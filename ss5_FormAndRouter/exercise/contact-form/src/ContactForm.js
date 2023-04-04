import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Bars } from "react-loader-spinner";
export default function ContractForm() {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required."),
          email: Yup.string().required("Required.").email("abc@gmail.com"),
          phone: Yup.string()
            .required("Required.")
            .matches('(84|0[3|5|7|8|9])+([0-9]{8})\b', 'Please enter correct phone format'),
          message: Yup.string().required("Required."),
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
            <h1>Contact Form</h1>
            <div className="mb-3">
              <label htmlFor="nameForm" className="form-label">
                Name
              </label>
              <Field name="name" type="text" id="nameForm" className="form-control" placeholder="Disabled input"/>
              <ErrorMessage name="name" component='span' classNameName="form-err" />
            </div>
            <div className="mb-3">
              <label htmlFor="emailForm" className="form-label">
                Email
              </label>
              <Field name="email" type="text" id="emailForm" className="form-control" placeholder="Disabled input"/>
              <ErrorMessage name="email" component='span' classNameName="form-err" />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneForm" className="form-label">
                Phone
              </label>
              <Field name="phone" type="text" id="phoneForm" className="form-control" placeholder="Disabled input"/>
              <ErrorMessage name="phone" component='span' classNameName="form-err" />
            </div>
            <div className="mb-3">
              <label htmlFor="messagesForm" className="form-label">
              Message
              </label>
              <Field name="message" component='textarea' id="messageForm" className="form-control" placeholder="Disabled input"/>
              <ErrorMessage name="message" component='span' classNameName="form-err" />
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
          </Form>
        )}
      </Formik>
    </>
  );
}
