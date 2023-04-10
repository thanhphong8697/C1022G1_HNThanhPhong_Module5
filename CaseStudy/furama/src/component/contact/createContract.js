import { Form, Formik, Field, ErrorMessage } from "formik";
// import { contractMap } from "./contract";
import { customerMap } from "../customer/customer";
import { facilityMap } from "../facility/facility";
import { toast } from "react-toastify";

export default function CreateContract() {
  return (
    <>
      <Formik
        initialValues={{
          customerId: customerMap[0]?.id,
          facilityId: facilityMap[0]?.id,
          contractCode: "",
          startDate: "",
          completionDate: "",
          advancePayment: "",
          remainingPayment: "",
        }}
        onSubmit={(value, { setSubmitting }) => {
          try {
            toast("Thêm mới thành công");
            setSubmitting(false);
          } catch (error) {
            toast("Thêm mới thất bại");
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <div
            className="d-flex justify-content-center mb-4 "
            style={{ marginTop: "85px", backgroundImage: "..furama-img.png" }}
          >
            <Form className="bg-light p-3 shadow" style={{ width: "50%" }}>
              <legend className="fw-bolder text-center">Thêm hợp đồng</legend>
              <div className="row mb-4 ">
                <div className="col-2 d-flex align-items-center">
                  <label
                    htmlFor="contractCode"
                    className="form-label fw-bolder"
                  >
                    Số hợp đông
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    type="text"
                    id="contractCode"
                    className="form-control"
                    placeholder="Enter name of customer"
                    name="contractCode"
                  />
                  <ErrorMessage
                    name="contractCode"
                    component="span"
                    classNameName="form-err"
                  />
                </div>
              </div>
              <div className="row mb-4 ">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor="customerId" className="form-label fw-bolder">
                    Khách hàng
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    as="select"
                    id="customerId"
                    className="form-control"
                    placeholder="Enter name of customer"
                    name="customerId"
                  >
                    {customerMap.map((customer) => (
                      <option key={customer.id} value={customer.id.toString()}>
                        {customer.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="customerId"
                    component="span"
                    classNameName="form-err"
                  />
                </div>
              </div>
              <div className="row mb-4 ">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor="facilityId" className="form-label fw-bolder">
                    Dịch vụ
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    as="select"
                    id="facilityId"
                    className="form-control"
                    placeholder="Enter name of customer"
                    name="facilityId"
                  >
                    {facilityMap.map((facility) => (
                      <option key={facility.id} value={facility.id.toString()}>
                        {facility.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="facilityId"
                    component="span"
                    classNameName="form-err"
                  />
                </div>
              </div>
              <div className="row mb-4 ">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor="startDate" className="form-label fw-bolder">
                    Ngày bắt đầu
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    type="date"
                    id="startDate"
                    className="form-control"
                    placeholder="Enter name of customer"
                    name="startDate"
                  />
                  <ErrorMessage
                    name="startDate"
                    component="span"
                    classNameName="form-err"
                  />
                </div>
              </div>
              <div className="row mb-4 ">
                <div className="col-2 d-flex align-items-center">
                  <label
                    htmlFor="completionDate"
                    className="form-label fw-bolder"
                  >
                    Ngày kết thúc
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    type="date"
                    id="completionDate"
                    className="form-control"
                    placeholder="Enter name of customer"
                    name="completionDate"
                  />
                  <ErrorMessage
                    name="completionDate"
                    component="span"
                    classNameName="form-err"
                  />
                </div>
              </div>
              <div className="row mb-4 ">
                <div className="col-2 d-flex align-items-center">
                  <label
                    htmlFor="advancePayment"
                    className="form-label fw-bolder"
                  >
                    Số tiền cọc trước
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    type="text"
                    id="advancePayment"
                    className="form-control"
                    placeholder="Enter name of customer"
                    name="advancePayment"
                  />
                  <ErrorMessage
                    name="advancePayment"
                    component="span"
                    classNameName="form-err"
                  />
                </div>
              </div>
              <div className="row mb-4 ">
                <div className="col-2 d-flex align-items-center">
                  <label
                    htmlFor="remainingPayment"
                    className="form-label fw-bolder"
                  >
                    Tổng số tiền thanh toán
                  </label>
                </div>
                <div className="col-10">
                  <Field
                    type="text"
                    id="remainingPayment"
                    className="form-control"
                    placeholder="Enter name of customer"
                    name="remainingPayment"
                  />
                  <ErrorMessage
                    name="remainingPayment"
                    component="span"
                    classNameName="form-err"
                  />
                </div>
                <div className="d-flex justify-content-center mt-3">
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
        )}
      </Formik>
    </>
  );
}
