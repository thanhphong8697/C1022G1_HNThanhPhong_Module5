import request from '../http/http';

const listAll = () => {
    return request.get("/contract");
};

const create = (contract) => {
    request.post("/contract", {...contract});
};

export const contractService = {
    listAll,
    create,
};