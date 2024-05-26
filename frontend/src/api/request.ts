// TODO: TEMP SOLUTION
const server: string = "http://localhost:8080/api";

export const request = async (api: Api): Promise<Response> => {
    const response = await fetch(server + api.url, api.options);
    return response;
};