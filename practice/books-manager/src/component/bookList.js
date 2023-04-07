import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as bookService from '../service/bookService';
import 'bootstrap/dist/css/bootstrap.css'
import { toast } from 'react-toastify';

export default function BooksList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchApi();
    },[]);

    const fetchApi = async() => {
        const result = await bookService.findAll();
        setBooks(result);
    }

    const handleDelete = async(id) => {
        try {
            await bookService.deleteBook(id);
            toast("Success")
          
            fetchApi();
            
        } catch (error) {
            toast("Fail")
        }
    }

    return (
        <>
            <h1>Library</h1>
            <NavLink to='/create' className="btn btn-primary">create new book</NavLink>
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Action</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                    { books.map((book) =>(
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td>
                                <NavLink to={`/update/${book.id}`} className="btn btn-primary">Update</NavLink>
                                
                            </td>
                            <td>
                                <button onClick={() => handleDelete(book.id)} type="button" className="btn btn-danger">Delete</button>
                            </td>
                        </tr>   
                    )
                    )
                     
                    }
                
                </tbody>
            </table>
        </>
    )
}