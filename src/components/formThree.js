import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormThree = () => {
  const formikProps = {
    initialValues: {
      firstname: '',
      color: '',
      lastname: '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required('Sorry, firstname is required'),
      lastname: Yup.string().required('Sorry, lastname is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  };

  const myCustomComponent = ({
    field,
    form: { errors, touched },
    ...props
  }) => (
    <>
      <label htmlFor={field.name}>{props.labelName}</label>
      <input type="text" {...field} className="form-control" />
      {errors[field.name] && touched[field.name] ? (
        <span>{errors.lastname}</span>
      ) : null}
    </>
  );

  return (
    <div className="container">
      <div className="col-md-12 mt-5">
        <Formik {...formikProps}>
          {(formik) => (
            <Form>
              <label htmlFor="firstname">First name</label>
              <Field className="form-control" type="text" name="firstname" />
              {/* <ErrorMessage name="firstname" /> */}
              {formik.errors.firstname && formik.touched.firstname ? (
                <span>{formik.errors.firstname}</span>
              ) : null}
              <hr className="mb-4" />

              {/* <label htmlFor="color">color</label>
              <Field as="select" name="color" className="custom-control">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field> */}

              <Field
                name="lastname"
                placeholder="Last Name"
                className="form-control"
                labelName="enter your name"
                component={myCustomComponent}
              />

              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormThree;
