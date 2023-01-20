import api from "../config/api";

export const getTable = (page) => api.get("/tables", {
    params:{
        page
    }
})