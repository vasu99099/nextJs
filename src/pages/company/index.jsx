import InputField from '@/components/shared/formElement/InputField';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@/components/shared/formElement/Button';
import { postAxiosApi } from '@/utils/axios';
const Company = () => {
  const companyValidationSchema = yup.object({
    Companyname: yup.string().trim().required(),
    address: yup.string().trim().required()
  });

  const { errors, values, handleBlur, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      Companyname: '',
      address: ''
    },
    validationSchema: companyValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      createCompany(values);
    }
  });

  function createCompany(values) {
    postAxiosApi('/api/employee', values);
  }
  return (
    <div className="w-1/2 mx-auto mt-10">
      <form onSubmit={handleSubmit}>
        <InputField
          name={'Companyname'}
          label={'Company Name'}
          value={values.Companyname}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.Companyname && errors.Companyname ? errors.Companyname : ''}
          required
        />
        <InputField
          name={'address'}
          label={'Address'}
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.address && errors.address ? errors.address : ''}
          required
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Company;
