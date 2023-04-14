import axios from "axios"

export const getProductType = () => {
    try {
        return axios.get("http://localhost:8080/productTypes"); 
    } catch (error) {
        console.log(error);
    }
}