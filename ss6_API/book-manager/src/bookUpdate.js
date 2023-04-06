import * as bookService from "../src/bookService";
import { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { Bars } from "react-loader-spinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function BookUpdate() {
  const navigate = useNavigate();
  const param = useParams();
  const [book, setBook] = useState();
  useEffect(() => {
    async function bookDetail() {
      const detail = await bookService.findById(param.id);
      console.log(detail);
      setBook(detail);
      console.log(book);
    }
    bookDetail();
  }, [param.id]);

  if (!book) {
    return (
      <Bars
        height="80"
        width="40"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperclassName=""
        visible={true}
      />
    );
  }
  return (
    <>
      <NavLink to="/">List</NavLink>
      <Formik
        initialValues={{
          id: book?.id,
          title: book?.title,
          quantity: book?.quantity,
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const update = async () => {
              try {
                await bookService.update(values);
                setSubmitting(false);
                toast("Success!!!");
                navigate("/");
              } catch {
                toast("Failed!!");
                navigate("/");
              }
              setSubmitting(false);
            };
            update();
          }, 500);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <h1>Update</h1>
            <Field
              name="id"
              type="hidden"
              id="id"
              className="form-control"
              placeholder="Disabled input"
            />
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
                Update
              </button>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}
