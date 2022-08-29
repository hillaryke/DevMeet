import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { authenticatedUser } from "~/session.server";
import { getUserALl } from "~/models/user.server";
import type { Experience } from "~/models/experience.server";
import type { Education } from "~/models/education.server";
import util from "util";

export const loader: LoaderFunction = async ({ request }) => {
   const userId = await authenticatedUser(request);
   if (!userId) return redirect("/");
   const user = await getUserALl(userId);
   return json({ user });
};

export default function DashboardIndex() {
   const { user } = useLoaderData();
   const profile = user.profile;
   const experience = profile?.experience;
   const education = profile?.education;

   return (
      <div>
         {profile ? null :
            <div className="px-4 sm:px-6 lg:px-8 mb-7 lg:w-10/12">
               <div className="sm:flex flex-col">
                  <div className="flex items-center">
                     <FontAwesomeIcon icon={faUser} className="text-lg"/>
                     <h1 className="ml-2 text-xl font-semibold text-gray-900">Create Your Profile</h1>
                  </div>

                  <div className="mt-4 ml-4 sm:flex-none">
                     <Link
                        to="/dashboard/create-profile"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white font-semibold shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 sm:w-auto"
                     >
                        Create Profile
                     </Link>
                  </div>
               </div>
            </div>
         }

         {/* Experience Credentials */}
         <div className="px-4 sm:px-6 lg:px-8 mb-7 lg:w-10/12">
            <div className="sm:flex sm:items-center">
               <div className="sm:flex-auto">
                  <h1 className="text-xl font-semibold text-gray-900">Experience Credentials</h1>
               </div>
               <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
               </div>
            </div>
            <div className="mt-8 flex flex-col">
               <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                     <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                           <thead className="bg-gray-50">
                           <tr>
                              <th scope="col"
                                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                 Company
                              </th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                 Job Title
                              </th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                 Years
                              </th>
                           </tr>
                           </thead>
                           <tbody className="bg-white">
                           {(experience && experience.length > 0) ? experience.map((exp: Experience, expIndex: number) => (
                              <tr key={exp.title} className={expIndex % 2 === 0 ? undefined : 'bg-gray-50'}>
                                 <td
                                    className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                                 >
                                    {exp.company}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{exp.title}</td>
                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {format(new Date(exp.from), 'MM/dd/yyyy')} - {" "}
                                    {exp.to ? format(new Date(exp.to), 'MM/dd/yyyy') : 'Present'}
                                 </td>
                              </tr>
                           )) : null}
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Education Credentials */}
         <div className="px-4 sm:px-6 lg:px-8 lg:w-10/12">
            <div className="sm:flex sm:items-center">
               <div className="sm:flex-auto">
                  <h1 className="text-xl font-semibold text-gray-900">Education Credentials</h1>
               </div>
            </div>
            <div className="mt-8 flex flex-col">
               <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                     <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                           <thead className="bg-gray-50">
                           <tr>
                              <th scope="col"
                                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                 School
                              </th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                 Degree
                              </th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                 Years
                              </th>
                           </tr>
                           </thead>
                           <tbody className="bg-white">
                           {education && education.length > 0 ? education.map((edu: Education, eduIndex: number) => (
                              <tr key={edu.degree} className={eduIndex % 2 === 0 ? undefined : 'bg-gray-50'}>
                                 <td
                                    className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                    {edu.school}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{edu.degree}</td>
                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {format(new Date(edu.from), 'MM/dd/yyyy')} - {" "}
                                    {edu.to ? format(new Date(edu.to), 'MM/dd/yyyy') : 'Present'}
                                 </td>
                              </tr>
                           )) : null}
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
