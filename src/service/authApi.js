// import {saveToken} from "../utils/token";
import api from "../config/api"

export const login = async (data) => {
    try {
        const response = await api.post("/auth/login", data)
        return response?.data?.data;
    } catch (e) {
        console.error(e);
    }
}

export const logout = async () => {
    try {
        const response = await api.post("/auth/logout")
        return response?.data?.data;
    } catch (e) {
        console.error(e);
    }
}