import { request } from "./request";

const requestMapping: string = "/v1";

const login = async (token: string): Promise<Response> => {
    const api: Api = {
        url: requestMapping + "/login",
        options: {
            method: "post",
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Basic ${token}`
            }
        },
    };

    return await request(api);
}

export const auth = {
    login
};