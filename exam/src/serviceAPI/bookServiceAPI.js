import request from "../config/http";
export const findAll = () => {
    return request.get(`/books`);
};

export const findAllWithPage = ({page, name, type}) => {
    return request.get(
        `/books?page=${page ? page : 0}&name=${name}&bookTypeId=${type}`
    );
};

export const create = (books) => {
    return request.post(`/books`, {...books})
};

export const remove = (id) => {
    return request.delete(`/books/${id}`)
};

export const findById = (id) => {
    return request.get(`/books/${id}`)
};

export const edit = (books) => {
    return request.put(`/books`, {...books})
};