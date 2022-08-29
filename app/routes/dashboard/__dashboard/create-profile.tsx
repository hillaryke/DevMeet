import type { ActionFunction } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

import { createProfile } from "~/models/profile.server";
import { authenticatedUser } from "~/session.server";
import { json, redirect } from "@remix-run/node";
import { CustomError } from "~/utils/errors.server";

export const action: ActionFunction = async ({ request }) => {
   const formData = await request.formData();
   const userId = await authenticatedUser(request);
   if (!userId) {
      throw new CustomError('Not Authorized!', 401);
   }

   const { errors } = await createProfile(formData, userId);

   if (errors) return json({ errors: errors });

   return redirect('/dashboard');
};

export default function CreateProfile() {
   const actionData = useActionData();

   return (
      <div>
         <div className="md:flex md:items-center md:justify-between mx-9">
            <div className="flex-1 min-w-0">
               <h2 className="text-3xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Create Your
                  Profile</h2>
            </div>
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="mt-10 sm:mt-5 lg:max-w-3xl">
               <Form method="post">
                  <div className="shadow overflow-hidden sm:rounded-md">
                     <div className="px-4 py-5 bg-white sm:p-6 space-y-5">
                        <div className="col-span-6 sm:col-span-3">
                           <select id="status" name="status" autoComplete="status"
                                   className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                              <option value="0">* Select Professional Status</option>
                              <option value="Developer">Developer</option>
                              <option value="Junior Developer">Junior Developer</option>
                              <option value="Senior Developer">Senior Developer</option>
                              <option value="Manager">Manager</option>
                              <option value="Student">Student or Learning</option>
                              <option value="Instructor">Instructor or Teacher</option>
                              <option value="Intern">Intern</option>
                              <option value="Other">Other</option>
                           </select>
                           <small className="text-gray-600 ml-2"
                           >Give us an idea of where you are at in your career</small>
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                           <input type="text" name="company"
                                  placeholder="Company"
                                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           />
                           <small className="text-gray-600 ml-2"
                           >Could be your own company or one you work for</small>
                        </div>


                        <div className="col-span-6 sm:col-span-4">
                           <input type="text" name="website"
                                  placeholder="Website"
                                  className="font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           />
                           <small className="text-gray-600 ml-2">Could be your own or a company website</small>
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                           <input type="text" name="location"
                                  placeholder="Location"
                                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           />
                           <small className="text-gray-600 ml-2"
                           >City & state suggested (eg. Boston, MA)</small>
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                           <input type="text" name="skills"
                                  placeholder="* Skills"
                                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           />
                           <p className="mt-2 text-sm text-red-600" id="email-error">
                              Please add at least one skill
                           </p>
                           <small className="text-gray-600 ml-2"
                           >Please use comma separated values (eg.
                              HTML,CSS,JavaScript,PHP)</small>
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                           <input type="text" name="githubUsername"
                                  placeholder="Github username"
                                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           />
                           <small className="text-gray-600 ml-2"
                           >If you want your latest repos and a Github link, include your
                              username</small>
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                           <textarea name="bio" rows={3}
                                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                     placeholder="A short bio of yourself"
                           ></textarea>
                           <small className="text-gray-600 ml-2"
                           >Tell us a little about yourself</small>
                        </div>

                     </div>
                     <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >Create Profile
                        </button>
                     </div>
                  </div>
               </Form>
            </div>
         </div>
      </div>
   );
}

