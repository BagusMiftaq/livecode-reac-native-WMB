import api from "../config/api";

export const getMenus = (page) => api.get("/menus", {
    params:{
        page
    }
})

export const addMenu = (data) => {
    return api.post("/menus", data, {
        headers : {
            "Content-type" : "multipart/form-data"
        }
    })
}

export const getCourseById = (id) =>{
    return api.get("/menus/"+id);
}

export const updateMenu = (menu) => {
    return api.put("/menus/", menu);
}
export const deleteMenu = (id) => {
    return api.delete("/menus/:"+id);
}