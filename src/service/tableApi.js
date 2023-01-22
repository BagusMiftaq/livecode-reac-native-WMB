import api from "../config/api";

export const getTable = (page) => api.get("/tables", {
    params:{
        page
    }
})

export const addTable = (data) => {
    return api.post("/tables", data, {
        headers : {
            "Content-type" : "multipart/form-data"
        }
    })
}

export const getTableById = (id) =>{
    return api.get("/tables/"+id);
}

export const updateTable = (menu) => {
    return api.put("/tables/", menu);
}
export const deleteTable = (id) => {
    return api.delete("/tables/"+id);
}