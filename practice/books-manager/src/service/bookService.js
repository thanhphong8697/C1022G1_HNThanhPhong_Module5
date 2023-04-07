import axios from 'axios';

export const findAll = async() => {
    try {
        const result = await axios.get("http://localhost:8080/book");
        return result.data
        
    } catch (error) {
        console.log(error); 
    }
};

export const create = async(book) => {
    try {
        await axios.post("http://localhost:8080/book", {...book});
        
    } catch (error) {
        console.log(error); 
    }
};

export const findById = async(id) => {
    try {
        const result = await axios.get(`http://localhost:8080/book/${id}`);
        return result.data
    } catch (error) {
        console.log(error); 
    }
};

export const update = async(book) => {
    try {
        await axios.put(`http://localhost:8080/book/${book.id}`, {...book});
    } catch (error) {
        console.log(error); 
    }
};

export const deleteBook = async(id) => {
    try {
     await axios.delete(`http://localhost:8080/book/${id}`);
    } catch (error) {
        console.log(error); 
    }
};