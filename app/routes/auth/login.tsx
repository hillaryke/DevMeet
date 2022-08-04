import PropTypes from "prop-types";
import { Form, Link, useLoaderData } from "@remix-run/react";
import React, { Fragment, useState } from "react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";

import { getSession, sessionStorage } from "~/session";
import { json, redirect } from "@remix-run/node";
import { validateCredentials } from "~/models/user.server";
import invariant from "tiny-invariant";

// import { connect } from "react-redux";
// import { Link, Redirect, withRouter } from "react-router-dom";

// import { loginUser } from "../../actions/auth";

export const loader: LoaderFunction = async ({ request }) => {
   const session = await getSession(request);

   if (session.has("token")) {
      return redirect("/dashboard");
   }
   ;

   const data = { error: session.get("error") };

   return json(data, {
      headers: {
         "Set-Cookie": await sessionStorage.commitSession(session),
      }
   });
};

export const action: ActionFunction = async ({ request }) => {
   const session = await getSession(request);

   const form = await request.formData();
   const email = form.get("email");
   const password = form.get("password");

   invariant(email, "Invalid email");
   invariant(password, "Invalid password");

   const userEmail = email.toString();
   const userPassword = password.toString();

   const userId = await validateCredentials(userEmail, userPassword);

   if (userId === null) {
      session.flash("error", "Invalid username or password");

      // Redirect back to the login page with errors
      return redirect("/auth/login", {
         headers: {
            "Set-Cookie": await sessionStorage.commitSession(session),
         }
      });
   }

   session.set("token", userId);

   return redirect("/", {
      headers: {
         "Set-Cookie": await sessionStorage.commitSession(session),
      }
   });
};

export default function Login() {
   const data = useLoaderData();
   console.log("actionData: ", data);

   return (
      // <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      //    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      //       <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create account</h2>
      //    </div>
      //
      //    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
      //       <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      //          <Form method="post" className="space-y-6">
      //             <div className="mt-1">
      //                <input
      //                   type="email"
      //                   placeholder="Email Address"
      //                   name="email"
      //                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      //                />
      //             </div>
      //             <div className="mt-1">
      //                <input
      //                   type="password"
      //                   placeholder="Password"
      //                   name="password"
      //                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      //                />
      //             </div>
      //             <button
      //                type="submit"
      //                className="bg-blueGreen text-lg text-lightColor w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-medium focus:outline-none hover:bg-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-300"
      //             >
      //                Login
      //             </button>
      //             <div className="text-center text-sm text-gray-500">
      //                Don't have an account?{"  "}
      //                <Link
      //                   to="/auth/register"
      //                   className="underline text-blue-500"
      //                >Register</Link>
      //             </div>
      //          </Form>
      //
      //       </div>
      //    </div>
      //
      // </div>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
         <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
               Sign in to your account
            </h2>
         </div>

         <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
               <Form className="space-y-8" method="post">
                  <div>
                     <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                     </label>
                     <div className="mt-1">
                        <input
                           id="email"
                           name="email"
                           type="email"
                           autoComplete="email"
                           className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                     </div>
                  </div>

                  <div>
                     <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                     </label>
                     <div className="mt-1">
                        <input
                           id="password"
                           name="password"
                           type="password"
                           autoComplete="current-password"
                           className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                     </div>
                  </div>

                  {/*<div className="flex items-center justify-between">*/}
                  {/*   <div className="flex items-center">*/}
                  {/*      <input*/}
                  {/*         id="remember-me"*/}
                  {/*         name="remember-me"*/}
                  {/*         type="checkbox"*/}
                  {/*         className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"*/}
                  {/*      />*/}
                  {/*      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">*/}
                  {/*         Remember me*/}
                  {/*      </label>*/}
                  {/*   </div>*/}

                  {/*   <div className="text-sm">*/}
                  {/*      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">*/}
                  {/*         Forgot your password?*/}
                  {/*      </a>*/}
                  {/*   </div>*/}
                  {/*</div>*/}
                  <div>
                     <button
                        type="submit"
                        className="bg-blueGreen text-white w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-medium focus:outline-none hover:bg-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-300"
                     >
                        Login
                     </button>
                  </div>

                  <div className="text-center text-sm text-gray-500">
                     Don't have an account?{" "}
                     <Link
                        to="/auth/register"
                        className="text-blue-500"
                     >Register</Link>
                  </div>
               </Form>
            </div>
         </div>
      </div>


   );
};

