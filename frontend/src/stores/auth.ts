import { Buffer } from 'buffer';
import { api } from "../api";

const CREDENTIALS: string = "credentials";
const USERNAME: string = "username";

const isLogged = () => {
    return localStorage.getItem(CREDENTIALS) !== null;
};

const logIn = async (username: string, password: string): Promise<Response> => {
    // Create token
    const token: string = Buffer.from(`${username}:${password}`).toString('base64');

    // Call login API
    const response = await api.auth.login(token);
    if (response.ok) {
        localStorage.setItem(CREDENTIALS, token);
        localStorage.setItem(USERNAME, username);
    }
    return response;
};

const logOut = () => {
    localStorage.removeItem(CREDENTIALS);
    localStorage.removeItem(USERNAME);
}

const getToken = () => {
    return localStorage.getItem(CREDENTIALS);
}

const getUsername = () => {
    return localStorage.getItem(USERNAME);
}

export const authStore = {
    isLogged,
    logIn,
    logOut,
    getToken,
    getUsername
};