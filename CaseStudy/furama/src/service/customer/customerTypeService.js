import request from '../http/http';

const listAll = () => {
    return request.get('/customerType');
};

export const customerTypeService = {
    listAll
}