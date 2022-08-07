import React, { Fragment, useState } from 'react';
import { Form, Link, useResolvedPath } from "@remix-run/react";
import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
// import { Link, Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import { setAlert } from "../../actions/alert";
// import { registerUser } from "../../actions/auth";
//
// import PropTypes from "prop-types";
//
// const Register = ( { setAlert, registerUser, isAuthenticated } ) => {
//    const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       password: '',
//       password2: ''
//    });
//
//    const { name, email, password, password2 } = formData;
//
//    const onInputChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
//
//    const onFormSubmit = event => {
//       event.preventDefault();
//
//       if (password !== password2) {
//          setAlert('Passwords do not match', 'danger');
//       } else {
//          registerUser({ name, email, password });
//       }
//    };
//
//    if (isAuthenticated) {
//       return <Redirect to="/dashboard"/>;
//    }

import { createUser } from "~/models/user.server";

export const action: ActionFunction = async ({ request }) => {
   const formData = await request.formData();
   const email = formData.get("email");
   const password = formData.get("password");
   const password2 = formData.get("password2");
   const name = formData.get("name");

   try {
      if (!name) throw Error('name should not be empty');
      if (!email) throw Error('Email must be valid');
      if (!password) throw Error('invalid password');
      if (!password2) throw Error('invalid password');
      invariant(password === password2, 'Password not the same!');
      if (!password) throw Error('name should not be empty');

      const userName = name.toString();
      const userEmail = email.toString();
      const userPassword = password.toString();

      const user = await createUser(userName, userEmail, userPassword);
      console.log(user);

   } catch (err) {
      // @ts-ignore
      console.log(err.message);
      return null;
   }


   return redirect("/");
};

export default function Register() {

   return (
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
         <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create account</h2>
         </div>

         <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
               <Form method="post" className="space-y-6">
                  <div className="mt-1">
                     <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                     />
                  </div>
                  <div className="mt-1">
                     <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                     />
                     <small
                     > For a profile image, we recommend using a Gravatar email </small
                     >
                  </div>
                  <div className="mt-1">
                     <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                     />
                  </div>
                  <div className="mt-1">
                     <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                     />
                  </div>
                  <button
                     type="submit"
                     className="bg-blueGreen text-lightColor w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-medium focus:outline-none hover:bg-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-300"
                  >
                     Register
                  </button>
                  <div className="text-center text-sm text-gray-500">
                     Already have an account?{"  "}
                     <Link
                        to="/auth/login"
                        className="underline text-blue-500"
                     >Sign In</Link>
                  </div>
               </Form>

            </div>
         </div>

      </div>
   );
};

// Register.propTypes = {
//    setAlert: PropTypes.func.isRequired,
//    registerUser: PropTypes.func.isRequired,
//    isAuthenticated: PropTypes.bool
// };
//
// const mapStateToProps = state => ( {
//    isAuthenticated: state.auth.isAuthenticated
// } );
//
// export default connect(
//    mapStateToProps,
//    { setAlert, registerUser }
// )(Register);
