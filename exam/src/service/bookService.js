import axios from "axios";

export const getBook = () => {
    return axios.get("http://localhost:8080/books");
}

export const getBookCreate = (books) => {
    return axios.post("http://localhost:8080/books",{...books});
}

export const getBookEdit = (books) => {
    return axios.put(`http://localhost:8080/books/${books.id}`,{...books});
}

export const getBookDelete = (id) => {
    return axios.delete(`http://localhost:8080/books/${id}`);
}

export const findById = (id) => {
    return axios.get(`http://localhost:8080/books/${id}`);
}