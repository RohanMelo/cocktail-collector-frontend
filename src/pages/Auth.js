import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

// TODO: Add a 'Forgot password?' link
// TODO: Create a button-style with @apply for all buttons

const Auth = () => {


    return (
        <>
            {/* <h2 className="text-center mt-2 font-semibold text-2xl">Login</h2> */}
            <div className="flex items-center justify-center bg-gray-900 box-border h-screen">



                <Formik
                    initialValues={{
                        email: '',
                        password: '',

                    }}
                    validationSchema={Yup.object().shape({

                        email: Yup.string()
                            .email('Email is invalid')
                            .required('Email is required'),
                        password: Yup.string()
                            .required('Password is required'),

                    })}
                    onSubmit={fields => {
                        alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                    }}
                >
                    {({ errors, status, touched }) => (
                        <Form className="bg-white p-10 rounded shadow -mt-24">
                            <div className="mt-2">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <Field name="email" type="text" placeholder="john@gmail.com" className={'bg-gray-200 px-4 py-2 rounded border-solid border-gray-400 ' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="email" component="div" className="text-red-600" />
                            </div>

                            <div className="mt-2">
                                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <Field name="password" type="password" placeholder="Type your password" className={'bg-gray-200 px-4 py-2 rounded border-solid border-gray-400 ' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="text-red-600" />
                            </div>



                            <div className="mt-8 flex justify-center">
                                <button type="submit" className="bg-gray-800 text-white px-10 py-4 rounded font-semibold focus:outline-none">Login</button>


                            </div>
                            <p className="text-sm ml-2 text-center mt-6 text-gray-800">Not registered? <span className="font-bold text-lg align-baseline text-gray-900"><Link to="/signup">REGISTER</Link></span></p>
                        </Form>
                    )}

                </Formik>

            </div>
        </>
    )
}

export default Auth
