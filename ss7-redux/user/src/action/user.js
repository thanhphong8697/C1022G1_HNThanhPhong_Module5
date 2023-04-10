import userService from "../service/userService";
import {USER_DELETE, USER_LIST} from "./action";
export const allUsers = () => async (dispatch) => {
    try{
        const res = await userService.allUser();

        dispatch({
            type: USER_LIST,
            payload: res.data,
        })
    }catch(error){
        console.log(error);
    }
};

export const userDelete = (id) => async (dispatch) => {
    try{
        const request = await userService.deleteUser(id);
        alert('Success!!!');

        dispatch({
            type: USER_DELETE,
            payload: id,
        })
    }catch(error){
        console.log(error);
    }
};