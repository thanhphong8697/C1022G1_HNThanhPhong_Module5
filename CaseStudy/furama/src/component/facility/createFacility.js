import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { facilityType } from "./facilityType";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
export default function CreateFacility() {
  const [facilityType, setFacilityType] = useState([]);
  useEffect(() => {});
  return (
    <>
      <Formik
        initialValues={{
          img: "",
          name: "",
          area: "",
          price: "",
          maxPersons: "",
          rentalType: 1,
          typeId: 1,
          standard: null,
          otherAminities: null,
          poolArea: null,
          floor: null,
          freeAminities: null,
          aminitiesId: [],
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Không được để trống"),
          img: Yup.string().required("Không được để trống"),
          area: Yup.number().required("Không được để trống"),
          price: Yup.number().required("Không được để trống"),
          maxPersons: Yup.string().required("Không được để trống"),
        })}
        onSubmit={({ setSubmitting }) => {
          setSubmitting(false);
          toast("Success!!!");
          // navigate("/customer/create");
        }}
      >
        <div
          className="d-flex justify-content-center mb-4 "
          style={{ marginTop: "85px" }}
        >
          <Form className="bg-light p-3" style={{ width: "50%" }}>
            <div>
              <div className="row mb-4 ">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor="name" className="form-label fw-bolder">
                    Tên dịch vụ
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
                    className="form-err"
                  />
                </div>
              </div>
              <div className="row mb-4 ">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor="img" className="form-label fw-bolder">
                    Hình ảnh
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    type="text"
                    id="img"
                    className="form-control"
                    placeholder="Enter name of customer"
                    name="img"
                  />
                  <ErrorMessage
                    name="img"
                    component="span"
                    className="form-err"
                  />
                </div>
              </div>
              <div className="row mb-4 ">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor="area" className="form-label fw-bolder">
                    Diện tích sử dụng
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    type="text"
                    id="area"
                    className="form-control"
                    placeholder="Enter name of customer"
                    name="area"
                  />
                  <ErrorMessage
                    name="area"
                    component="span"
                    className="form-err"
                  />
                </div>
              </div>
              <div className="row mb-4 ">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor="price" className="form-label fw-bolder">
                    Chi phí thuê
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    type="text"
                    id="price"
                    className="form-control"
                    placeholder="Enter name of customer"
                    name="price"
                  />
                  <ErrorMessage
                    name="price"
                    component="span"
                    className="form-err"
                  />
                </div>
              </div>
              <div className="row mb-4 ">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor="maxPersons" className="form-label fw-bolder">
                    Số người tối đa
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    type="text"
                    id="maxPersons"
                    className="form-control"
                    placeholder="Enter name of customer"
                    name="maxPersons"
                  />
                  <ErrorMessage
                    name="maxPersons"
                    component="span"
                    className="form-err"
                  />
                </div>
              </div>
              <div className="row mb-4 ">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor="rentalType" className="form-label fw-bolder">
                    Kiểu thuê
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    type="text"
                    id="rentalType"
                    className="form-control"
                    placeholder="Enter name of customer"
                    name="rentalType"
                  />
                  <ErrorMessage
                    name="rentalType"
                    component="span"
                    className="form-err"
                  />
                </div>
              </div>
              <div className="row mb-4 ">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor="aminitiesId" className="form-label fw-bolder">
                    Dịch vụ đi kèm
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    type="text"
                    id="aminitiesId"
                    className="form-control"
                    placeholder="Enter name of customer"
                    name="aminitiesId"
                  />
                  <ErrorMessage
                    name="aminities"
                    component="span"
                    className="form-err"
                  />
                </div>
              </div>
              <div className="row mb-4 ">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor="typeId" className="form-label fw-bolder">
                    Loại dịch vụ
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    type="text"
                    id="typeId"
                    className="form-control"
                    placeholder="Enter name of customer"
                    name="typeId"
                  />
                  <ErrorMessage
                    name="typeId"
                    component="span"
                    className="form-err"
                  />
                </div>
              </div>
              <div className="row mb-4 ">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor="standard" className="form-label fw-bolder">
                    Tiêu chuẩn phòng
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    type="text"
                    id="standard"
                    className="form-control"
                    placeholder="Enter name of customer"
                    name="standard"
                  />
                  <ErrorMessage
                    name="standard"
                    component="span"
                    className="form-err"
                  />
                </div>
              </div>
              <div className="row mb-4 ">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor="otherAminities" className="form-label fw-bolder">
                    Mô tả tiện nghi khác
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    type="text"
                    id="otherAminities"
                    className="form-control"
                    placeholder="Enter name of customer"
                    name="otherAminities"
                  />
                  <ErrorMessage
                    name="otherAminities"
                    component="span"
                    className="form-err"
                  />
                </div>
              </div>
              <div className="row mb-4 ">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor="poolArea" className="form-label fw-bolder">
                    Diện tích hồ bơi
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    type="text"
                    id="poolArea"
                    className="form-control"
                    placeholder="Enter name of customer"
                    name="poolArea"
                  />
                  <ErrorMessage
                    name="poolArea"
                    component="span"
                    className="form-err"
                  />
                </div>
              </div>
              <div className="row mb-4 ">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor="floor" className="form-label fw-bolder">
                    Số tầng
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    type="text"
                    id="floor"
                    className="form-control"
                    placeholder="Enter name of customer"
                    name="floor"
                  />
                  <ErrorMessage
                    name="floor"
                    component="span"
                    className="form-err"
                  />
                </div>
              </div>
              <div className="row mb-4 ">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor="freeAminities" className="form-label fw-bolder">
                    Dịch vụ miễn phí đi kèm
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    type="text"
                    id="freeAminities"
                    className="form-control"
                    placeholder="Enter name of customer"
                    name="freeAminities"
                  />
                  <ErrorMessage
                    name="freeAminities"
                    component="span"
                    className="form-err"
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
    // <>
    //     <div className="d-flex justify-content-center mb-4" style="margin-top: 85px;">
    //     <form style="width: 50%;">
    //         <div>
    //           <legend>Create facility</legend>
    //           <div className="row mb-4">
    //             <div className="col-3 d-flex align-items-center">
    //                 <label htmlFor="disabledTextInput" className="form-label">Room name</label>
    //             </div>
    //             <div className="col-8">
    //                 <input type="text" id="disabledTextInput" className="form-control" placeholder="Enter name of room"/>
    //             </div>
    //           </div>
    //           <div className="row mb-4">
    //             <div className="col-3 d-flex align-items-center">
    //                 <label htmlFor="disabledTextInput" className="form-label">Room size</label>
    //             </div>
    //             <div className="col-8">
    //                 <input type="text" id="disabledTextInput" className="form-control" placeholder="Enter size of room"/>
    //             </div>
    //           </div>
    //           <div className="row mb-4">
    //             <div className="col-3 d-flex align-items-center">
    //                 <label htmlFor="disabledTextInput" className="form-label">Room image</label>
    //             </div>
    //             <div className="col-8">
    //                 <input type="text" id="disabledTextInput" className="form-control" placeholder="Enter image of room"/>
    //             </div>
    //           </div>
    //           <div className="row mb-4">
    //             <div className="col-3 d-flex align-items-center">
    //                 <label htmlFor="disabledTextInput" className="form-label">Room price</label>
    //             </div>
    //             <div className="col-8">
    //                 <input type="text" id="disabledTextInput" className="form-control" placeholder="Enter price of room"/>
    //             </div>
    //           </div>
    //           <div className="row mb-4">
    //             <div className="col-3 d-flex align-items-center">
    //                 <label htmlFor="disabledSelect" className="form-label">Room type</label>
    //             </div>
    //             <div className="col-8">
    //                 <select id="disabledSelect" className="form-select">
    //                     <option>Room</option>
    //                     <option>Villa</option>
    //                     <option>House</option>
    //                   </select>
    //             </div>
    //           </div>
    //           <div className="d-flex justify-content-center">
    //             <a href="" className="btn btn-secondary me-3">Back</a>
    //             <button type="submit" className="btn btn-primary">Create</button>
    //           </div>
    //         </div>
    //       </form>
    // </div>
    // </>
  );
}
