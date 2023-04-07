import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import * as bookService from "../service/bookService";
import { Bars } from "react-loader-spinner";
import { Field, Form, Formik } from "formik";
import { toast } from "react-toastify";

export default function BookUpdate() {
  const navigate = useNavigate();

  const [books, setBooks] = useState();

  const param = useParams();

  useEffect(() => {
    async function bookDetail() {
      const detail = await bookService.findById(param.id);
      setBooks(detail);
    }
    bookDetail();
  }, [param.id]);

  if (!books) {
    return null;
  }

  return (
    <>
      <Formik
        initialValues={{
          id: books?.id,
          title: books?.title,
          quantity: books?.quantity,
        }}
        onSubmit={(value, { setSubmitting }) => {
          setTimeout(() => {
            const update = async () => {
              try {
                await bookService.update(value);
                setSubmitting(false);
                toast("Success!!!");
                navigate("/");
              } catch (error) {
                toast("Fail!!!");
                navigate("/");
              }
              setSubmitting(false);
            };
            update();
          }, 200);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <h1>Create new book</h1>
            <Field
                type="hidden"
                className="form-control"
                id="id"
                aria-describedby="emailHelp"
                name="id"
              />
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <Field
                type="text"
                className="form-control"
                id="title"
                aria-describedby="emailHelp"
                name="title"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <Field
                type="text"
                className="form-control"
                id="quantity"
                aria-describedby="emailHelp"
                name="quantity"
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
                <div>
                    <NavLink to="/" className="btn btn-secondary">Back</NavLink>
                <button type="submit" className="btn btn-primary">
                Create
              </button>
                </div>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}
