// TODO: TEMP SOLUTION
const server: string = "http://localhost:8080/api";

export const request = async (api: Api): Promise<any> => {
    const response = await fetch(server + api.url, api.options);
    
    let responseJSON: any;
    await response.json().then(data => responseJSON = data).catch(() => responseJSON = "");

    return new Promise((resolve, reject) => {
        if (responseJSON.error) {
            reject(responseJSON);
        }
        return resolve(responseJSON);
    });
};