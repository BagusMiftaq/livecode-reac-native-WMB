import api from "../config/api";

export const getCustomer = (page) => api.get("/customers", {
    params:{
        page
    }
})