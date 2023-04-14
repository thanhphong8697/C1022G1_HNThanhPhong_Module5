import axios from "axios"

export const getProduct = () => {
    try {
        return axios.get("http://localhost:8080/products"); 
    } catch (error) {
        console.log(error);
    }
}

export const getProductCreate = (product) => {
    try {
        return axios.post("http://localhost:8080/products", {product}); 
    } catch (error) {
        console.log(error);
    }
}

export const getProductEdit = (product) => {
    try {
        return axios.put(`http://localhost:8080/products/${product.id}`, {product}); 
    } catch (error) {
        console.log(error);
    }
}

export const findById = (id) => {
    try {
        return axios.get(`http://localhost:8080/products/${id}`); 
    } catch (error) {
        console.log(error);
    }
}

export const getProductDelete = (id) => {
    try {
        return axios.get(`http://localhost:8080/products/${id}`); 
    } catch (error) {
        console.log(error);
    }
}