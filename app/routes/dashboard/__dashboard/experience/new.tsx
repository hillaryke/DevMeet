import React, { useState } from "react";
import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { processFormData } from "~/utils/util.server";
import { createExperience } from "~/models/experience.server";

export const action: ActionFunction = async ({ request }) => {
   const fieldNames = ["title", "company", "location", "from", "to", "current", "description"];
   const fieldsToValidate = ["title", "company", "from"];
   const dateFields = ["from", "to"];
   const errorMessages = {
      title: "Job Title is required",
      company: "Company is required",
      from: "From date is required",
   };
   let { errors, data } = await processFormData(
      request,
      fieldNames,
      errorMessages,
      fieldsToValidate,
      dateFields
   );
   // To date is required if the user is not currently working
   if (!data["current"] && !data["to"]) {
      if (!errors) errors = {};
      errors["to"] = "To date is required";
   }

   if (errors) return json({ errors });

   const experience = await createExperience(request, data);
   console.log(experience);

   return redirect('/dashboard/experiences');
};

export default function Experience() {
   const actionData = useActionData();

   const [isCurrentJob, toggleCurrentJob] = useState(false);

   return (
      <div>
         <div className="md:flex md:items-center md:justify-between mx-9">
            <div className="flex-1 min-w-0">
               <h2 className="text-3xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Add an Experience</h2>
            </div>
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="mt-10 sm:mt-5 lg:max-w-3xl">
               <Form method="post">
                  <div className="shadow overflow-hidden sm:rounded-md">
                     <div className="px-4 py-5 bg-white sm:p-6 space-y-5">
                        <div className="col-span-6 sm:col-span-4">
                           <input type="text" name="title"
                                  placeholder="* Job Title"
                                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           />
                           {actionData?.errors?.title ?
                              <div className="py-1 text-red-700 text-sm">{actionData?.errors.title}</div> : null
                           }
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                           <input type="text" name="company"
                                  placeholder="* Company"
                                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           />
                           {actionData?.errors?.company ?
                              <div className="py-1 text-red-700 text-sm">{actionData?.errors.company}</div> : null
                           }
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                           <input type="text" name="location"
                                  placeholder="Location"
                                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                           <input type="date" name="from"
                                  className="appearance-none block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           />
                           {actionData?.errors?.from ?
                              <div className="py-1 text-red-700 text-sm">{actionData?.errors.from}</div> : null
                           }
                        </div>

                        <div className="flex items-center">
                           {/* @ts-ignore */}
                           <input name="current" type="checkbox" defaultValue={isCurrentJob} value={isCurrentJob}
                                  onChange={() => toggleCurrentJob(!isCurrentJob)}
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                           />
                           <label htmlFor="push-everything"
                                  className="ml-2 block text-sm font-medium text-gray-700">Current Job</label>
                        </div>
                        <div className="col-span-6 sm:col-span-4">
                           <input type="date" name="to"
                                  disabled={isCurrentJob}
                                  className="appearance-none block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           />
                           {actionData?.errors?.to ?
                              <div className="py-1 text-red-700 text-sm">{actionData?.errors.to}</div> : null
                           }
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                              <textarea name="description" rows={3}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Job Description"
                              ></textarea>
                        </div>

                     </div>
                     <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >Save Experience
                        </button>
                     </div>
                  </div>
               </Form>
            </div>
         </div>
      </div>
   );
}

