import { USER_DELETE, USER_LIST } from "../action/action";

const initialState = [];

const userReducer = (users = initialState, action) => {
    const { type, payload } = action;
    console.log(payload);

    switch (type) {
        case USER_LIST:
            return payload
        default:
            return users;
    }
};
export default userReducer;