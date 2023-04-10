import { USER_DELETE, USER_LIST } from "../action/action";

const initialState = [];

const userReducer = (users = initialState, action) => {
    switch (action.type) {
        case USER_LIST:
            return action.payload
        case USER_DELETE:
            const deleteUser = users.filter((element) => element.id !== action.payload)
            return deleteUser
        default:
            return users;
    }
};
export default userReducer;