import api from "../config/api";

export const getCustomer = (page) => api.get("/customers", {
    params:{
        page
    }
})

export const addCustomer = (data) => {
    return api.post("/customers", data, {
        headers : {
            "Content-type" : "multipart/form-data"
        }
    })
}

export const getCustomerById = (id) =>{
    return api.get("/customers/"+id);
}

export const updateCustomer = (menu) => {
    return api.put("/customers/", menu);
}
export const deleteCustomer = (id) => {
    return api.delete("/customers/"+id);
}