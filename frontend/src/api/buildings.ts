import { request } from "./request";
import { authStore } from "../stores/auth";

const requestMapping: string = "/v1/buildings";

const getBuilding = async (id: number): Promise<Response> => {
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

const getBuildings = async (page: number = 0, size: number = 10): Promise<Response> => {
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

const createBuilding = async (body: CreateBuildingBody): Promise<Response> => {
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

const updateBuilding = async (id: number, body: UpdateBuildingBody): Promise<Response> => {
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

const deleteBuilding = async (id: number): Promise<Response> => {
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

export const buildings = {
    getBuilding,
    getBuildings,
    createBuilding,
    updateBuilding,
    deleteBuilding
};