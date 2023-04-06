import request from '../http';

const allUser = () => {
    return request.get();
};

const deleteUser = (id) => {
    return request.post(id);
};

const userService = {
    allUser,
    deleteUser,
};

export default userService;