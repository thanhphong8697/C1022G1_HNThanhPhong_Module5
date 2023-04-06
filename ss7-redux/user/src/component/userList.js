import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allUsers } from "../action/user";

function UserList(){
    const navigate = useNavigate();

    const users = useSelector( state => state.users)
    const dispatch = useDispatch();

    useEffect( () => {
        console.log("err")
        dispatch(allUsers())
    }, []);

    return
}