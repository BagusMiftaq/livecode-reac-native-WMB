import api from "../config/api";

export const getMenus = (page) => api.get("/menus", {
    params:{
        page
    }
})