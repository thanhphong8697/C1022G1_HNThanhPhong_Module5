import request from '../http/http';
const listAll = () => {
    return request.get('/facility-type');
};

export const facilityTypeService = {
    listAll
};