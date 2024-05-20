import {useAuthentication} from "@/lib/hooks";

export const useApi = () => {
    const {user} = useAuthentication();

    const apiGet = async (url: string) => {
        const response = await fetch(url);
        return await response.json();
    }

    const apiPost = async (url: string, data?: any) => {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data ? JSON.stringify(data) : undefined,
        });

        return await response.json();
    }

    const apiPut = async (url: string, data?: any) => {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: data ? JSON.stringify(data) : undefined,
        });

        return await response.json();
    }

    const apiDelete = async (url: string) => {
        const response = await fetch(url, {
            method: "DELETE",
        });

        return await response.json();
    }

    return {apiGet, apiPost, apiPut, apiDelete, user};
}