import * as bookService from "./bookService";
// import { useEffect, useState } from 'react';
import { Field, Form, Formik } from "formik";
import { Bars } from "react-loader-spinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom'


export default function BookCreate() {
  const navigate = useNavigate()
  return (
    <>
      <Formik
        initialValues={{
          title: "",
          quantity: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const create = async () => {
              await bookService.save(values);
              setSubmitting(false);
              toast("Success!!!");
              navigate('/')
            };
            create();
          }, 500);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <h1>Creat a new book</h1>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <Field
                name="title"
                type="text"
                id="title"
                className="form-control"
                placeholder="Disabled input"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <Field
                name="quantity"
                type="text"
                id="quantity"
                className="form-control"
                placeholder="Disabled input"
              />
            </div>
            {isSubmitting ? (
              <Bars
                height="80"
                width="40"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperclassName=""
                visible={true}
              />
            ) : (
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}
