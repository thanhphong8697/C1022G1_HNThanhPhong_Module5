import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Formik, Form, Field } from "formik";
import { edit, findById } from "../serviceAPI/bookServiceAPI";
import { findAll } from "../serviceAPI/bookTypeServiceAPI";
import * as Yup from "yup";
function BookEdit() {
  const navigate = useNavigate();

  const [books, setBooks] = useState();

  const [bookTypes, setBookTypes] = useState([]);

  const param = useParams();

  const getBookTypeList = async () => {
    const bookTypeData = await findAll();
    setBookTypes(bookTypeData.data);
  };

  const getBookDetail = async () => {
    const bookDetailData = await findById(param.id);
    setBooks(bookDetailData.data);
  };

  useEffect(() => {
    getBookDetail();
    getBookTypeList();
  },[]);

  if(!books){
    return null;
  }

  return (
    <>
        <Formik
        initialValues={{
            id: books?.id,
          code: books?.code,
          name: books?.name,
          bookTypeId: books?.bookTypeId,
          date: books?.date,
          quantity: books?.quantity,
        }}

        validationSchema={Yup.object({
          code: Yup.string()
            .required("Trường này yêu cầu nhập")
            .matches("^BO-[0-9]{4}$", "Mã sách có định dạng BO-XXXX (X là số)"),
          name: Yup.string()
            .required("Trường này yêu cầu nhập")
            .max(100, "Tên sách không dài quá 100 ký tự"),
          quantity: Yup.string()
            .required("Trường này yêu cầu nhập")
            .matches("^[1-9][\\d]*$", "Số lượng sách phải là số nguyên dương"),
        })}
        
        onSubmit={(values) => {
          try {
            (async () => {
              await edit({
                ...values,
                bookTypeId: +values.bookTypeId,
              });
              alert("Success")
              navigate("/book");
            })();
          } catch (error) {
            alert("fail")
            navigate("/book");
          }
        }}
      >
        <Form className="bg-light p-3 shadow">
          <div className="d-flex justify-content-center mb-4 ">
              <div>
                <legend className="fw-bolder text-center">create</legend>
                <div className="col-10">
                    <Field
                      type="hidden"
                      className="form-control"
                      name="id"
                    />
                  </div>
                <div className="row mb-4 ">
                  <div className="col-2 d-flex align-items-center">
                    <label htmlFor="code" className="form-label fw-bolder">
                      Code
                    </label>
                  </div>
                  <div className="col-10">
                    <Field
                      type="text"
                      id="code"
                      className="form-control"
                      name="code"
                    />
                  </div>
                </div>
                <div className="row mb-4 ">
                  <div className="col-2 d-flex align-items-center">
                    <label htmlFor="name" className="form-label fw-bolder">
                      Name
                    </label>
                  </div>
                  <div className="col-10">
                    <Field
                      type="text"
                      id="name"
                      className="form-control"
                      name="name"
                    />
                  </div>
                </div>
                <div className="row mb-4 ">
                  <div className="col-2 d-flex align-items-center">
                    <label htmlFor="name" className="form-label fw-bolder">
                      Type
                    </label>
                  </div>
                  <div className="col-10">
                    <Field
                      as="select"
                      id="bookTypeId"
                      className="form-control"
                      name="bookTypeId"
                    >
                      <option value={""}>select</option>
                      {bookTypes.map((bt, index) => (
                        <option value={bt.id} key={index}>
                          {bt.name}
                        </option>
                      ))}
                    </Field>
                  </div>
                </div>
                <div className="row mb-4 ">
                  <div className="col-2 d-flex align-items-center">
                    <label htmlFor="date" className="form-label fw-bolder">
                      Date
                    </label>
                  </div>
                  <div className="col-10">
                    <Field
                      type="date"
                      id="date"
                      className="form-control"
                      name="date"
                    />
                  </div>
                </div>
                <div className="row mb-4 ">
                  <div className="col-2 d-flex align-items-center">
                    <label htmlFor="quantity" className="form-label fw-bolder">
                    quantity
                    </label>
                  </div>
                  <div className="col-10">
                    <Field
                      type="text"
                      id="quantity"
                      className="form-control"
                      name="quantity"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button to="/book" className="btn btn-secondary me-3">
                    Back
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Create
                  </button>
                </div>
              </div>
          </div>
        </Form>
      </Formik>
    </>
  )
}
export default BookEdit;
