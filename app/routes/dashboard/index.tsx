import { Link, useLoaderData } from "@remix-run/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import type { LoaderFunction } from "@remix-run/node";
import { authenticatedUser } from "~/session.server";
import { json } from "@remix-run/node";
import { getUserWithProfile } from "~/models/user.server";

const people = [
   { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
   // More people...
];

export const loader: LoaderFunction = async ({ request }) => {
   const userId = await authenticatedUser(request);

   const user = await getUserWithProfile(userId!);
   return json({ user });
};

export default function DashboardIndex() {
   const { user } = useLoaderData();

   return (
      <div>
         {user.profile ? null :
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
                           {people.map((person, personIdx) => (
                              <tr key={person.email} className={personIdx % 2 === 0 ? undefined : 'bg-gray-50'}>
                                 <td
                                    className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                    {person.name}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                              </tr>
                           ))}
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
                           {people.map((person, personIdx) => (
                              <tr key={person.email} className={personIdx % 2 === 0 ? undefined : 'bg-gray-50'}>
                                 <td
                                    className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                    {person.name}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                              </tr>
                           ))}
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
