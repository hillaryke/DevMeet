import { Form, Link, useActionData, useLoaderData, useTransition } from "@remix-run/react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";

import { createUserSession, getSession, sessionStorage } from "~/session.server";
import { json, redirect } from "@remix-run/node";
import { validateCredentials } from "~/models/user.server";
import invariant from "tiny-invariant";
import { formDataToObject, validateFields } from "~/utils/util.server";
import React from "react";

export const loader: LoaderFunction = async ({ request }) => {
   const session = await getSession(request);

   if (session.has("token")) {
      return redirect("/dashboard");
   }

   const data = { error: session.get("error") };

   return json(data, {
      headers: {
         "Set-Cookie": await sessionStorage.commitSession(session),
      }
   });
};

export const action: ActionFunction = async ({ request }) => {
   const session = await getSession(request);

   const formData = await request.formData();
   const fieldNames = ["email", "password"];
   const { email, password } = formDataToObject(formData, fieldNames);

   const errorMessages = {
      email: "Email is required",
      password: "Password is required",
   };
   const errors = validateFields({ email, password }, errorMessages);
   if (errors) return json({ errors: errors });

   const userId = await validateCredentials(email, password);

   if (userId === null) {
      session.flash("error", "Invalid username or password");

      // Redirect back to the login page with errors
      return redirect("/login", {
         headers: { "Set-Cookie": await sessionStorage.commitSession(session) }
      });
   }
   return createUserSession(userId, request, '/dashboard');
};

export default function Login() {
   const { error } = useLoaderData();
   const actionData = useActionData();
   console.log("actionData: ", error);

   const transition = useTransition();

   return (
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
         <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
               Sign in to your account
            </h2>
         </div>

         <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
               <Form className="space-y-6 xl:space-y-8" method="post">
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
                        {actionData?.errors?.email ?
                           <div className="py-1 text-red-700 text-sm">{actionData?.errors.email}</div> : null
                        }
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
                        {actionData?.errors?.password ?
                           <div className="py-1 text-red-700 text-sm">{actionData?.errors.password}</div> : null
                        }
                     </div>
                     <div className="pt-2 text-red-700" role="alert">{error}</div>
                  </div>
                  <div>
                     <button
                        type="submit"
                        // @ts-ignore
                        disabled={transition.submission}
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

