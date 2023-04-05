import * as toDoService from '../src/toDoService';
import { useEffect, useState } from 'react';
import { Field, Form, Formik } from "formik";
import { Bars } from "react-loader-spinner";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ToDoList() {
    const [toDos, setToDos] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await toDoService.findAll()
            setToDos(result);
        }
        fetchApi();
    }, []);


    return (
        <>
            <Formik
                initialValues={{title: ''}}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        const create = async () => {
                            await toDoService.save(values)
                            setSubmitting(false);
                            toast('Success!!!')
                        }
                        create();
                    }, 500);
                }}
            >
                { ({ isSubmitting }) => (
                    <Form>
                        <h1>To do list</h1>
                        <div className="mb-3">
                            <Field name="title" type="text" className="form-control" placeholder="Disabled input" />
                            {
                            isSubmitting ?
                            <Bars
                                height="80"
                                width="40"
                                color="#4fa94d"
                                ariaLabel="bars-loading"
                                wrapperStyle={{}}
                                wrapperclassName=""
                                visible={true}
                            />
                            :
                            <button type="submit" className="btn btn-primary">Submit</button>
                            }
                        </div>                        
                    </Form>
                )}
            </Formik>
            <div>
                <ul>
                    {
                        toDos.map( (value, index) => (
                            <li key={index}>
                                <span>{value.title}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}