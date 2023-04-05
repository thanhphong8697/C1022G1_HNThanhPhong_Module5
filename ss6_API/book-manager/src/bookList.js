import { useEffect, useState } from 'react';
import { Field, Form, Formik } from "formik";
import * as bookService from '../src/bookService;';
import { NavLink, useNavigate } from 'react-router-dom';
import { update } from './bookService';

export default function BookList(){
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchApi = async () => {
            const result = await bookService.findAll()
            setBooks(result);
        }
        fetchApi();
    }, []);

    const handleUpdate = (id, book) => {
        setBooks(book);
    };

    const handleDelete = async(id) => {
        let result = await bookService.deleteBook(id);
        setBooks(result);
    }

    return (
        <>
            <h1>Library</h1>
            <div>
                <NavLink to='/create'>Create a new book</NavLink>
            </div>
            <div>
            <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Quantity</th>
                <th scope="col">Action</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
                {
                    books.map((book, index) => (
                      <tr key={index}>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <a className=" btn btn-primary" onClick={() => handleUpdate(book.id)}>Update</a>
                        </td>
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
            </div>
        </>
    )
}