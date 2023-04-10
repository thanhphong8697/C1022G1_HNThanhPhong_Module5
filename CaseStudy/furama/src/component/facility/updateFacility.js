import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { facilityType } from "./facilityType";
import "bootstrap/dist/css/bootstrap.css";
// import { useEffect, useState } from "react";
import facilityType from "./facilityType"
import aminities from "./aminities"
export default function UpdateFacility() {
  // const [facilityType, setFacilityType] = useState([]);
  // useEffect(() => {});
  const handleFacilityChange = (event) => {
    const villa = document.getElementById("villa");
    const house = document.getElementById("house");
    const room = document.getElementById("room");

    switch (event.target.value) {
      case "0":
        villa.style.display = "none";
        house.style.display = "none";
        room.style.display = "none";
        break;
      case "1":
        villa.style.display = "block";
        house.style.display = "none";
        room.style.display = "none";
        break;
      case "2":
        villa.style.display = "none";
        house.style.display = "block";
        room.style.display = "none";
        break;
      case "3":
        villa.style.display = "none";
        house.style.display = "block";
        room.style.display = "none";
        break;
      default:
        throw new ErrorMessage("Không hợp lệ");
    }
  };

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
          typeId: "",
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
        {({isSubmitting, setFieldValue}) =>(
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
                    as="select"
                    id="rentalType"
                    className="form-control"
                    placeholder="Enter name of customer"
                    name="rentalType"
                  >
                    <option value="1">Ngày</option>
                    <option value="2">Tháng</option>
                    <option value="3">Năm</option>
                  </Field>
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
                {aminities.map((aminity) => (
                  <div className="row" key={aminity.idAminities}>
                <Field
                    type="checkbox"
                    id={aminity.idAminities}
                    name="aminitiesId"
                    value={aminity.idAminities.toString()}
                    className="col-5 mt-2"
                  />
                  <label htmlFor={aminity.idAminities} className="col-7 form-label fw-bolder">
                    {aminity.nameAminities}
                  </label>
                  </div>
                ))}
                  
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
                    as="select"
                    onChange={(event) => {
                      handleFacilityChange(event);
                      setFieldValue("typeId",
                      event.target.value)
                    }}
                    className="form-control"
                    placeholder="Enter name of customer"
                    name="typeId"
                  >
                    <option value="0">Dịch vụ</option>
                    {facilityType.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.nameType}
                      </option>
                    ))}
                    </Field>
                  <ErrorMessage
                    name="typeId"
                    component="span"
                    className="form-err"
                  />
                </div>
              </div>

              <div id="villa" style={{ display: "none" }}>
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
                    <label
                      htmlFor="otherAminities"
                      className="form-label fw-bolder"
                    >
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
              </div>

              <div id="house" style={{ display: "none" }}>
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
                    <label
                      htmlFor="otherAminities"
                      className="form-label fw-bolder"
                    >
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
              </div>

              <div id="room" style={{ display: "none" }}>
                <div className="row mb-4 ">
                  <div className="col-2 d-flex align-items-center">
                    <label
                      htmlFor="freeAminities"
                      className="form-label fw-bolder"
                    >
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
              </div>

              <div className="d-flex justify-content-center">
                {/* <a href="" className="btn btn-secondary me-3">
                  Back
                </a> */}
                <button type="submit" className="btn btn-primary">
                  Create
                </button>
              </div>
            </div>
          </Form>
        </div>
        )}
        
      </Formik>
    </>
  );
}
