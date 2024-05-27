import { request } from "./request";
import { authStore } from "../stores/auth";

const requestMapping: string = "/v1/building-entrances";

const deleteBuildingEntrance = async (id: number): Promise<Response> => {
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

export const buildingEntrances = {
    deleteBuildingEntrance
};
