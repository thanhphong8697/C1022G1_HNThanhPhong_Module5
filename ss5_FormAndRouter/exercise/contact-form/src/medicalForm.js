import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Bars } from "react-loader-spinner";
export default function MedicalForm() {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          identity: "",
          year: "",
          gender: "",
          national: "",
          company: "",
          department: "",
          insuranceCard: false,
          city: "",
          district: "",
          wards: "",
          address: "",
          email: "",
          phone: "",
          informationOne: "",
          informationTwo: [],
          informationThree: [],
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required."),
          identity: Yup.number().required("Required."),
          year: Yup.date().required("Required.").min(1900, ">1900"),
          national: Yup.string().required("Required."),
          city: Yup.string().required("Required."),
          district: Yup.string().required("Required."),
          wards: Yup.string().required("Required."),
          address: Yup.string().required("Required."),
          email: Yup.string().email("Invalid email address"),
          phone: Yup.number().required("Required."),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="row mx-0">
            <div className="col-4"></div>
            <div className="col-4">
            <h1>Tờ khai y tế</h1>
            <div className="mb-3">
              <label htmlFor="nameMedical" className="form-label">Họ tên</label>
              <Field name="name" type="text" id="nameMedical" className="form-control" placeholder="Disabled input" />
              <ErrorMessage name="name" component="span" className="form-err" />
            </div>
            <div className="mb-3">
              <label htmlFor="identityMedical" className="form-label">Số hộ chiếu/ CMND</label>
              <Field name="identity" type="text" id="identityMedical" className="form-control" placeholder="Disabled input" />
              <ErrorMessage name="identity" component="span" className="form-err" />
            </div>
            <div className="mb-3">
              <label htmlFor="yearMedical" className="form-label">Năm sinh</label>
              <Field name="year" type="text" id="yearMedical" className="form-control" placeholder="Disabled input" />
              <ErrorMessage name="year" component="span" className="form-err" />
            </div>
            Giới tính
            <div className="form-check">
                <Field name="gender" className="form-check-input" type="radio" value="1" id="rd-1" />
                <label className="form-check-label" htmlFor="rd-1">
                    Nam
                </label>
            </div>
            <div className="form-check">
                <Field name="gender" className="form-check-input" type="radio" value="0" id="rd-2" />
                <label className="form-check-label" htmlFor="rd-2">
                    Nữ
                </label>
            </div>
            <div className="mb-3">
              <label htmlFor="nationalMedical" className="form-label">Quốc tịch</label>
              <Field name="national" type="text" id="nationalMedical" className="form-control" placeholder="Disabled input" />
              <ErrorMessage name="national" component="span" className="form-err" />
            </div>
            <div className="mb-3">
              <label htmlFor="companyMedical" className="form-label">Công ty làm việc</label>
              <Field name="company" type="text" id="companyMedical" className="form-control" placeholder="Disabled input" />
            </div>
            <div className="mb-3">
              <label htmlFor="departmentMedical" className="form-label">Bộ phận làm việc</label>
              <Field name="department" type="text" id="departmentMedical" className="form-control" placeholder="Disabled input" />
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="cb-1">
                Có thẻ bảo hiểm y tế:
              </label>
              <input className="form-check-input" type="checkbox" id="cb-1"/>
            </div>
            <h3>Địa chỉ liên lạc tại Việt Nam</h3>
            <div className="mb-3">
              <label htmlFor="cityMedical" className="form-label">Tỉnh thành</label>
              <Field name="city" type="text" id="cityMedical" className="form-control" placeholder="Disabled input" />
              <ErrorMessage name="city" component="span" className="form-err" />
            </div>
            <div className="mb-3">
              <label htmlFor="districtMedical" className="form-label">Quận/ huyện</label>
              <Field name="district" type="text" id="districtMedical" className="form-control" placeholder="Disabled input" />
              <ErrorMessage name="district" component="span" className="form-err" />
            </div>
            <div className="mb-3">
              <label htmlFor="wardsMedical" className="form-label">Phường/ xã</label>
              <Field name="wards" type="text" id="wardsMedical" className="form-control" placeholder="Disabled input" />
              <ErrorMessage name="wards" component="span" className="form-err" />
            </div>
            <div className="mb-3">
              <label htmlFor="addressMedical" className="form-label">Số nhà, phố, tổ dân phố/thôn/đội</label>
              <Field name="address" type="text" id="addressMedical" className="form-control" placeholder="Disabled input" />
              <ErrorMessage name="address" component="span" className="form-err" />
            </div>
            <div className="mb-3">
              <label htmlFor="emailMedical" className="form-label">Email</label>
              <Field name="email" type="text" id="emailMedical" className="form-control" placeholder="Disabled input" />
              <ErrorMessage name="email" component="span" className="form-err" />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneMedical" className="form-label">Điện thoại</label>
              <Field name="phone" type="text" id="phoneMedical" className="form-control" placeholder="Disabled input" />
              <ErrorMessage name="phone" component="span" className="form-err" />
            </div>
            <div className="mb-3">
              <h4>Trong vòng 14 ngày qua, Anh /Chị có đến quốc gia /vùng lãnh thổ nào (Có thể đi qua nhiều quốc gia)</h4>
              <Field name="informationOne" component='textarea' className="form-control" placeholder="Disabled input"/>
            </div>
            <div className="mb-3">
              <h4>Trong vòng 14 ngày qua, Anh /Chị có đến quốc gia /vùng lãnh thổ nào (Có thể đi qua nhiều quốc gia)</h4>
              <div className="form-check">
                <input name="informationTwo" value="Sốt" className="form-check-input" type="checkbox" id="cb-2"/>
                <label className="form-check-label" htmlFor="cb-2">
                  Sốt
                </label>
              </div>
              <div className="form-check">
                <input name="informationTwo" value="Ho" className="form-check-input" type="checkbox" id="cb-3"/>
                <label className="form-check-label" htmlFor="cb-3">
                  Ho
                </label>
              </div>
              <div className="form-check">
                <input name="informationTwo" value="Khó thở" className="form-check-input" type="checkbox" id="cb-4"/>
                <label className="form-check-label" htmlFor="cb-4">
                  Khó thở
                </label>
              </div>
              <div className="form-check">
                <input name="informationTwo" value="Viêm phổi" className="form-check-input" type="checkbox" id="cb-5"/>
                <label className="form-check-label" htmlFor="cb-5">
                  Viêm phổi
                </label>
              </div>
              <div className="form-check">
                <input name="informationTwo" value="Đau họng" className="form-check-input" type="checkbox" id="cb-6"/>
                <label className="form-check-label" htmlFor="cb-6">
                  Đau họng
                </label>
              </div>
              <div className="form-check">
                <input name="informationTwo" value="Mệt mỏi" className="form-check-input" type="checkbox" id="cb-7"/>
                <label className="form-check-label" htmlFor="cb-7">
                  Mệt mỏi
                </label>
              </div>
            </div>
            <div className="mb-3">
              <h4>Trong vòng 14 ngày qua, Anh /Chị có đến quốc gia /vùng lãnh thổ nào (Có thể đi qua nhiều quốc gia)</h4>
              <Field name="informationOne" component='textarea' className="form-control" placeholder="Disabled input"/>
            </div>
            <div className="mb-3">
              <h4>Trong vòng 14 ngày qua, Anh /Chị có tiếp xúc với ?</h4>
              <div className="form-check">
                <input name="informationThree" value="Sốt" className="form-check-input" type="checkbox" id="cb-8"/>
                <label className="form-check-label" htmlFor="cb-8">
                  Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19
                </label>
              </div>
              <div className="form-check">
                <input name="informationThree" value="Ho" className="form-check-input" type="checkbox" id="cb-9"/>
                <label className="form-check-label" htmlFor="cb-9">
                  Người từ nước có bệnh COVID-19
                </label>
              </div>
              <div className="form-check">
                <input name="informationThree" value="Khó thở" className="form-check-input" type="checkbox" id="cb-10"/>
                <label className="form-check-label" htmlFor="cb-10">
                  Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)
                </label>
              </div>
            </div>
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
            <div className="col-4"></div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
