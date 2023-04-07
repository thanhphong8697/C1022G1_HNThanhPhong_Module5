import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import * as bookService from "../service/bookService";
import { toast } from "react-toastify";
import { Bars } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";

export default function BooksCreate() {
  const navigate = useNavigate()

  return (
    <>
      <Formik
        initialValues={{
          title: "",
          quantity: "",
        }}
        onSubmit={(value, { setSubmitting }) => {
          setTimeout(() => {
            const create = async () => {
              await bookService.create(value);
              setSubmitting(false)
              toast("Success!!!")
              navigate('/')
            };
            create();
          }, 200);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <h1>Create new book</h1>
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
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}
