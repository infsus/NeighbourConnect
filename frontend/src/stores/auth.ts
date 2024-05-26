import { Buffer } from 'buffer';
import { api } from "../api";

const CREDENTIALS: string = "credentials";

const isLogged = () => {
    return localStorage.getItem(CREDENTIALS) !== null;
};

const logIn = (username: string, password: string) => {
    // Create token
    const token: string = Buffer.from(`${username}:${password}`).toString('base64');

    // Call login API
    api.auth.login(token)
        .then(_ => {
            localStorage.setItem(CREDENTIALS, token);
        }).catch(() => {});
};

const logOut = () => {
    localStorage.removeItem(CREDENTIALS);
}

export const authStore = {
    isLogged,
    logIn,
    logOut
};