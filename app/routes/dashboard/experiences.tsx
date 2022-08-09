/* This example requires Tailwind CSS v2.0+ */
import { Form, Link } from "@remix-run/react";
import { LoaderFunction, redirect } from "@remix-run/node";
import { isAuthenticated } from "~/session.server";
import { getExperience } from "~/models/experience.server";
import util from "util";

const people = [
   { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
   // More people...
];

export const loader: LoaderFunction = async ({ request }) => {
   const isAuth = await isAuthenticated(request);
   if (!isAuth) return redirect("/");

   const experience = await getExperience(request);
   console.log(util.inspect(experience, false, null, true));

   return null;
};

export default function ExperienceList() {
   return (
      <div className="px-4 sm:px-6 lg:px-8">
         <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
               <h1 className="text-xl font-semibold text-gray-900">Experience</h1>
               <p className="mt-2 text-sm text-gray-700">
                  A list of all your experience credentials including the Company, title and years.
               </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
               <Link
                  prefetch="intent"
                  to="/dashboard/experience/new"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
               >
                  Add Experience
               </Link>
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
                           <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                              <span className="sr-only">Edit</span>
                           </th>
                           <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                              <span className="sr-only">Delete</span>
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
                              <td
                                 className="relative whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6">
                                 <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                    Edit<span className="sr-only">, {person.name}</span>
                                 </a>
                              </td>
                              <td
                                 className="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-6">
                                 <Form>
                                    <button className="bg-red-600 text-gray-100 py-2 px-5 rounded-md">
                                       Delete
                                    </button>
                                 </Form>
                              </td>
                           </tr>
                        ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
