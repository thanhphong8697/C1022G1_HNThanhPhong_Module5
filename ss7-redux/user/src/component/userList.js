import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allUsers } from "../action/user";

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
                    users.map((value, index) => (
                      <tr key={index}>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                        <td>{value.website}</td>
                        <td>
                            <button onClick={() => handleDelete(book.id)} type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
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