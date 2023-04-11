import request from '../http/http';

const listAll = () => {
    return request.get("/facility");
};

const create = (facility) => {
    return request.post("/facility", {...facility});
};

const remove = (id) => {
    request.delete(`/facility/${id}`);
};

const update = (facility) => {
    request.put(`/facility/${facility.id}`,{...facility});
};

const findById = (id) => {
    return request.get(`/facility/${id}`);
};

export const facilityService = {
    listAll,
    create,
    remove,
    update,
    findById
};