import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {customerType} from "./customerType";
import "bootstrap/dist/css/bootstrap.css";
// import { useNavigate } from "react-router-dom";
export default function CreateCustomer() {
  // const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          dateOfBirth: "",
          gender: "",
          identity: "",
          phone: "",
          email: "",
          address: "",
          customerType: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Không được để trống"),
          dateOfBirth: Yup.date("Hãy nhập đúng định dạng").required(
            "Không được để trống"
          ),
          gender: Yup.string().required("Không được để trống"),
          identity: Yup.number().required("Không được để trống"),
          phone: Yup.number().required("Không được để trống"),
          email: Yup.string()
            .required("Không được để trống")
            .email("Hãy nhập đúng định dạng"),
          address: Yup.string().required("Không được để trống"),
        })}
        onSubmit={({ setSubmitting }) => {
          setSubmitting(false);
          toast("Success!!!");
          // navigate("/customer/create");
        }}
      >
        <div
          className="d-flex justify-content-center mb-4 "
          style={{ marginTop: "85px", backgroundImage: "..furama-img.png"}}
        >
          <Form className="bg-light p-3 shadow" style={{ width: "50%" }}>
            <div>
              <legend className="fw-bolder text-center">Thêm Khách Hàng</legend>
              <div className="row mb-4 ">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor="name" className="form-label fw-bolder">
                    Họ Tên
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter name of customer"
                    name="name"
                  />
                  <ErrorMessage
                    name="name"
                    component="span"
                    classNameName="form-err"
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor="dateOfBirth" className="form-label fw-bolder">
                    Ngày sinh
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    type="text"
                    id="dateOfBirth"
                    className="form-control"
                    placeholder="Enter date of birth"
                    name="dateOfBirth"
                  />
                  <ErrorMessage
                    name="dateOfBirth"
                    component="span"
                    classNameName="form-err"
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor="disabledTextInput" className="form-label fw-bolder">
                    Giới Tính
                  </label>
                </div>
                <div className="col-10">
                  <div class="form-check">
                    <div className="form-check form-check-inline">
                      <Field
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                      />
                      <label class="form-check-label" htmlFor="male">
                        Nam
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <Field
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                      />
                      <label class="form-check-label" htmlFor="female">
                        Nữ
                      </label>
                    </div>
                  </div>
                  <ErrorMessage name="gender" component='span' classNameName="form-err" />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor="identity" className="form-label fw-bolder">
                    Số CMND
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    type="text"
                    id="identity"
                    className="form-control"
                    placeholder="Enter identity of customer"
                    name="identity"
                  />
                  <ErrorMessage
                    name="identity"
                    component="span"
                    classNameName="form-err"
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor="phone" className="form-label fw-bolder">
                    Số điện thoại
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    type="text"
                    id="phone"
                    className="form-control"
                    placeholder="Enter phone of customer"
                    name="phone"
                  />
                  <ErrorMessage
                    name="phone"
                    component="span"
                    classNameName="form-err"
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor="email" className="form-label fw-bolder">
                    Email
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    type="text"
                    id="email"
                    className="form-control"
                    placeholder="Enter email of customer"
                    name="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    classNameName="form-err"
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor="address" className="form-label fw-bolder">
                    Địa chỉ
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    type="text"
                    id="address"
                    className="form-control"
                    placeholder="Enter address of customer"
                    name="address"
                  />
                  <ErrorMessage
                    name="address"
                    component="span"
                    classNameName="form-err"
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor="customerType" className="form-label fw-bolder">
                    Loại khách
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    id="customerType"
                    className="form-select"
                    name="customerType"
                    as="select"
                  >
                    {customerType.map((type) => (
                      <option key={type.id} value={type.type}>
                        {type.type}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="customerType"
                    component="span"
                    classNameName="form-err"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <a href="" className="btn btn-secondary me-3">
                  Back
                </a>
                <button type="submit" className="btn btn-primary">
                  Create
                </button>
              </div>
            </div>
          </Form>
        </div>
      </Formik>
    </>
  );
}
