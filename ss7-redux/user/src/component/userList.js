import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userDelete ,allUsers } from "../action/user";

export default function UserList(){
    const navigate = useNavigate();

    const users = useSelector( state => state.users)
    const dispatch = useDispatch();

    useEffect( () => {
        console.log("err")
        dispatch(allUsers())
    }, []);

    return (
        <>
        <h1>User List</h1>
        <button  type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                             Get User
        </button>
        <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Website</th>
              </tr>
            </thead>
            <tbody>
                {
                    users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                        <td>
                            <button onClick={() => dispatch(userDelete(user.id))} type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                             Delete
                            </button>
                        </td>
                    </tr>  
                    ))
                } 
            </tbody>
          </table>
        </>
    )
}