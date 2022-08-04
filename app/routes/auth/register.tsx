import React, { Fragment, useState } from 'react';
import { Form, Link } from "@remix-run/react";
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

export default function Register() {

   return (
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
         <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
         </div>

         <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
               <Form method="post" className="space-y-6" action="create-profile.html">
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
                     >This site uses Gravatar so if you want a profile image, use a
                        Gravatar email</small
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
                     className="btn-primary"
                  >
                     Register
                  </button>
               </Form>
               <div className="text-center text-sm text-gray-500">
                  Already have an account?
                  <Link to="/auth/login">Sign In</Link>
               </div>
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
