import axios from 'axios';
export const findAll = async() => {
    try{
        const result = await axios.get(" https://my-json-server.typicode.com/codegym-vn/mock-api-books/books");
        return result.data;
    } catch(error){
        console.log(error);
    }
};

export const save = async (book) => {
    try {
        await axios.post("https://my-json-server.typicode.com/codegym-vn/mock-api-books/books", {...book});
    } catch(error){
        console.log(error);
    }
};

export const update = async (id, book) => {
    try {
        await axios.put("https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/{id}", {...book})
    } catch(error){
        console.log(error);
    }
};

export const deleteBook = async (id) => {
    try {
        await axios.delete("https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/{id}")
    } catch(error){
        console.log(error);
    }
};