import request from '../http';

const allUser = () => {
    return request.get('/users');
};

const deleteUser = (id) => {
    return request.delete(`/users/${id}`);
};

const userService = {
    allUser,
    deleteUser,
};

export default userService;