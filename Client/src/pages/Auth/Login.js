import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../../assets/styles/login-styles.css'

const Login = () => {

  const initalValues = {
    phoneNumber : '',
    password: ''
  }

  const onSubmit = (values, {setErrors, resetForm}) =>{
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }

    fetch('http://localhost:3001/login', requestOptions)
      .then((response) => {
        return response.json()
      }).then((data) => {
        if (data.success) {
          resetForm()
          console.log(data.userData)

          // ---- login success redirect page ---------- TODO

        } else {
          setErrors(data.error)
        }
      }).catch((error) => {
        console.log('Error : ' + error)
      })
  }

   const LoginValidationSchema= Yup.object().shape({
    phoneNumber: Yup.number()
      .typeError('Phone number invalid.')
      .min(10, 'Too Short!')
      .required('Phone number is required'),
    password: Yup.string().required('Password is required'),
  })

  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <h1 className='form-h1'>Login</h1>
        <Formik
        initialValues={initalValues}
        onSubmit={onSubmit}
        validationSchema = {LoginValidationSchema}
        >
        {({ errors, touched }) => (
          <Form className='login-form'>
            <div className='field-container'>
              <Field name="phoneNumber" className='input-field' placeholder='Phone Number'/>
              {touched.phoneNumber && errors.phoneNumber && 
                  <span className='error-msg'>{errors.phoneNumber}</span>
              }
            </div>
            <div className='field-container'>
              <Field name="password"  className='input-field' placeholder='password' type='password'/>
              {touched.password && errors.password && 
                <span className='error-msg'>{errors.password}</span>
              }
            </div>
            <div>
              <button type="submit" className='submit-btn--login'>Submit</button>
            </div>
          </Form>
        )}
        </Formik>
      </div>
      
    </div>
  )
}

export default Login