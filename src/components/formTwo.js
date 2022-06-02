import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormTwo = () => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required('First name'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container">
      <div className="col-md-12 mt-5">
        <form onSubmit={formik.onSubmit}>
          <label htmlFor="firstname">First name</label>
          <input
            className="form-control"
            type="text"
            name="firstname"
            {...formik.getFieldProps('firstname')}
          />
          {formik.errors && formik.touched ? (
            <span>{formik.errors.firstname}</span>
          ) : null}

          <hr className="mb-4" />
          <button className="btn btn-primary btn-lg btn-block">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormTwo;
