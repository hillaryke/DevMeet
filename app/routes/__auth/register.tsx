import React from 'react';
import { Form, Link, useActionData } from "@remix-run/react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";

import { createUser } from "~/models/user.server";
import { createUserSession, isAuthenticated } from "~/session.server";
import { formDataToString, validateFields } from "~/utils/util.server";

export const loader: LoaderFunction = async ({ request }) => {
   const isAuth = await isAuthenticated(request);
   if (isAuth) {
      return redirect("/dashboard");
   }
};

export const action: ActionFunction = async ({ request }) => {
   const formData = await request.formData();

   const { name, email, password, password2 } = formDataToString(formData,
      'name', 'email', 'password', 'password2'
   );

   const fields = { name, email, password, password2 };

   const errorMessages = {
      name: "Name should not be empty",
      email: "Email must not be empty",
      password: "Password is required",
      password2: "Password confirmation is required"
   };

   const errors = validateFields(fields, errorMessages);
   if (errors) return json({ errors: errors });
   if (password !== password2) return json({ errors: { password2: 'Password does not match!' } });

   const user = await createUser(name, email, password);
   return createUserSession(user.id, request, '/dashboard');
};

export default function Register() {
   // TODO fix 4 renders after actionFunction
   const actionData = useActionData();
   // console.log(actionData);

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
                     {actionData?.errors?.name ?
                        <div className="pt-1 text-red-700 text-sm">{actionData.errors.name}</div> : null
                     }
                  </div>
                  <div className="mt-1">
                     <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                     />
                     {actionData?.errors?.email ?
                        <div className="py-1 text-red-700 text-sm">{actionData.errors.email}</div> : null
                     }
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

                     {actionData?.errors?.password ?
                        <div className="pt-1 text-red-700 text-sm">{actionData.errors.password}</div> : null
                     }
                  </div>
                  <div className="mt-1">
                     <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                     />
                     {actionData?.errors?.password2 ?
                        <div className="pt-1 text-red-700 text-sm">{actionData.errors.password2}</div> : null
                     }
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
