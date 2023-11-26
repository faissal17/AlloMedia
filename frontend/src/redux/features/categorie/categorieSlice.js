import axois from "axios"

const categorieApi = axois.create({
    baseURL:"http://localhost:5000/api/v1",
    timeout:5000
})


export const createCategorie = async ()=>{
    try {
        const response = categorieApi.post("/categorie")
        return response.data
    } catch (error) {
        console.log(error.message)
        return null
    }
}

export const getCategorie = async ()=>{
    try {
        const response = categorieApi.get("/categorie")
        return response.data
    } catch (error) {
        console.log(error.message)
        return null
    }
}

export const deleteCategorie = async ()=>{
    try {
        const response = categorieApi.delete("/categorie")
        return response.data
    } catch (error) {
        console.log(error.message)
        return null
    }
}

export const updateCategorie = async ()=>{
    try {
        const response = categorieApi.put("/categorie")
        return response.data
    } catch (error) {
        console.log(error.message)
        return null
    }
}