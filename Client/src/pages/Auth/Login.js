import React from 'react'
import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';

const Login = () => {

  const initalValues = {
    phoneNumber : '',
    password: ''
  }

  const onSubmit = (values, {setErrors}) =>{
    console.log(values)
  }

   const LoginValidationSchema= Yup.object().shape({
    phoneNumber: Yup.number()
      .typeError('Phone number invalid.')
      .min(10, 'Too Short!')
      .required('Phone number is required'),
    password: Yup.string().required('Password is required'),
  })

  return (
    <div>
      <Formik
       initialValues={initalValues}
       onSubmit={onSubmit}
       validationSchema = {LoginValidationSchema}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="phoneNumber" />
           {touched.phoneNumber && errors.phoneNumber && <div>{errors.phoneNumber}</div>}
           <br />  <br />

           <Field name="password" />
           {touched.password && errors.password && <div>{errors.password}</div>}

          <br />  <br />
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>

    </div>
  )
}

export default Login