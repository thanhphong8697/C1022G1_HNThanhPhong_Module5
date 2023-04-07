import userService from "../service/userService";
import {USER_DELETE, USER_LIST} from "./action";
export const allUsers = () => async (dispatch) => {
    try{
        const request = await userService.allUser();
        console.log(request.data);

        dispatch({
            type: USER_LIST,
            payload: request.data,
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
            payload: request.data,
        })
    }catch(error){
        console.log(error);
    }
};