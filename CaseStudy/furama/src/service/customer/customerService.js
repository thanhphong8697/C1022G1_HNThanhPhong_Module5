import request from '../http/http';

const listAll = () => {
    return request.get("/customer");
};

const create = (customer) => {
    return request.post("/customer", { ...customer });
};

const remove = (id) => {
    request.delete(`/customer/${id}`);
};

const update = (customer) => {
    request.put(`/customer/${customer.id}`,{...customer});
};

const findById = (id) => {
    return request.get(`/customer/${id}`);
};

export const customerService = {
    listAll,
    create,
    remove,
    update,
    findById
};