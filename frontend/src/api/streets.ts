import { request } from "./request";
import { authStore } from "../stores/auth";

const requestMapping: string = "/v1/streets";

const getStreet = async (id: number): Promise<Response> => {
    const api: Api = {
        url: requestMapping + `/${id}`,
        options: {
            method: "get",
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Basic ${authStore.getToken()}`
            }
        },
    };

    return await request(api);
};

const getStreets = async (page: number = 0, size: number = 10): Promise<Response> => {
    const api: Api = {
        url: requestMapping + `?page=${page}&size=${size}`,
        options: {
            method: "get",
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Basic ${authStore.getToken()}`
            }
        },
    };

    return await request(api);
};

const createStreet = async (body: CreateStreetBody): Promise<Response> => {
    const api: Api = {
        url: requestMapping,
        options: {
            method: "post",
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Basic ${authStore.getToken()}`
            },
            body: body
        },
    };

    return await request(api);
};

const updateStreet = async (id: number, body: UpdateStreetBody): Promise<Response> => {
    const api: Api = {
        url: requestMapping + `/${id}`,
        options: {
            method: "put",
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Basic ${authStore.getToken()}`
            },
            body: body
        },
    };

    return await request(api);
};

const deleteStreet = async (id: number): Promise<Response> => {
    const api: Api = {
        url: requestMapping + `/${id}`,
        options: {
            method: "delete",
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Basic ${authStore.getToken()}`
            }
        },
    };

    return await request(api);
};

export const streets = {
    getStreet,
    getStreets,
    createStreet,
    updateStreet,
    deleteStreet
};