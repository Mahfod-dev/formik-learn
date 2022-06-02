import { Formik } from 'formik';
import * as Yup from 'yup';

const FormOne = () => {
  return (
    <Formik
      initialValues={{
        firstname: '',
        lastname: '',
        email: '',
        state: '',
        country: '',
        zip: '',
      }}
      validationSchema={Yup.object({
        firstname: Yup.string()
          .required('first name is required')
          .max(5, 'sorry the name is too long'),
        lastname: Yup.string()
          .required('first name is required')
          .max(5, 'sorry the name is too long'),
        email: Yup.string()
          .required('email is required')
          .email('need email valid'),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <div className="container">
          <div className="col-md-12 mt-5">
            <form onSubmit={handleSubmit}>
              <h4 className="mb-3">Personal information</h4>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstname">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    value={values.firstname}
                    onChange={handleChange}
                  />
                  {errors && touched.firstname ? (
                    <span>{errors.firstname}</span>
                  ) : null}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastname">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    value={values.lastname}
                    onChange={handleChange}
                  />
                  {errors && touched.lastname ? (
                    <span>{errors.lastname}</span>
                  ) : null}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors && touched.email ? <span>{errors.email}</span> : null}
              </div>

              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="country">Country</label>
                  <select
                    className="custom-select d-block w-100"
                    id="country"
                    name="country"
                  >
                    <option value="">Choose...</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="NL">Netherlands</option>
                  </select>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">State</label>
                  <select
                    className="custom-select d-block w-100"
                    id="state"
                    name="state"
                  >
                    <option value="">Choose...</option>
                    <option value="california">California</option>
                    <option value="toronto">Toronto</option>
                    <option value="utrech">Utrech</option>
                  </select>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    name="zip"
                  />
                </div>
              </div>

              <hr className="mb-4" />
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default FormOne;
