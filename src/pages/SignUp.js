import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const SignUp = () => {
    return (
        <div className="flex items-center justify-center bg-gray-900 box-border h-screen">
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: '',
                    acceptTerms: false
                }}
                validationSchema={Yup.object().shape({

                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Confirm Password is required'),
                    acceptTerms: Yup.bool()
                        .oneOf([true], 'Accept Ts & Cs is required')
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
            >
                {({ errors, status, touched }) => (
                    <Form className="bg-white p-8 rounded shadow -mt-24">
                        <div className="mt-2">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <Field name="email" type="text" placeholder="john@gmail.com" className={'bg-gray-200 px-4 py-2 rounded border-solid border-gray-400 ' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="text-red-600" />
                        </div>

                        <div className="mt-2">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <Field name="password" type="password" placeholder="Type a 6+ digits password" className={'bg-gray-200 px-4 py-2 rounded border-solid border-gray-400 ' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="text-red-600" />
                        </div>

                        <div className="mt-2">
                            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                            <Field name="confirmPassword" type="password" placeholder="Confirm password" className={'bg-gray-200 px-4 py-2 rounded border-solid border-gray-400 ' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                            <ErrorMessage name="confirmPassword" component="div" className="text-red-600" />
                        </div>

                        <div className="mt-2">
                            <Field type="checkbox" name="acceptTerms" className={' ' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} />
                            <label htmlFor="acceptTerms" className="text-gray-700 text-sm font-bold mb-2 ml-2">Accept Terms & Conditions</label>
                            <ErrorMessage name="acceptTerms" component="div" className="text-red-600" />
                        </div>

                        <div className="mt-8 flex justify-center">
                            <button type="submit" className="bg-gray-800 text-white px-10 py-4 rounded font-semibold focus:outline-none">Register</button>
                            <button type="reset" className="bg-red-500 text-white px-10 py-4 rounded ml-2 font-semibold focus:outline-none">Reset</button>
                        </div>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default SignUp
