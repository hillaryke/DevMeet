import { useState } from "react";

export default function Experience() {
   const [isCurrentJob, toggleCurrentJob] = useState(false);

   return (
      <div>
         <div className="md:flex md:items-center md:justify-between mx-9">
            <div className="flex-1 min-w-0">
               <h2 className="text-3xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Add Education</h2>
            </div>
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="mt-10 sm:mt-5 lg:max-w-3xl">
               <form action="#" method="POST">
                  <div className="shadow overflow-hidden sm:rounded-md">
                     <div className="px-4 py-5 bg-white sm:p-6 space-y-5">
                        <div className="col-span-6 sm:col-span-4">
                           <input type="text" name="school"
                                  placeholder="* School or Bootcamp"
                                  className="font-bold font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                           <input type="text" name="degree"
                                  placeholder="* Degree or Certificate"
                                  className="font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                           <input type="text" name="fieldofstudy"
                                  placeholder="Field Of Study"
                                  className="font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                           <select id="country" name="country" autoComplete="country-name"
                                   className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                              <option>United States</option>
                              <option>Canada</option>
                              <option>Mexico</option>
                           </select>
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                           <input type="date" name="from"
                                  className="font-bold appearance-none block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                        </div>

                        <div className="flex items-center">
                           {/* @ts-ignore */}
                           <input name="current" type="checkbox" value={isCurrentJob}
                                  onChange={() => toggleCurrentJob(!isCurrentJob)}
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                           <label htmlFor="push-everything"
                                  className="ml-2 block text-sm font-medium text-gray-700">Current School or
                              Bootcamp</label>
                        </div>
                        <div className="col-span-6 sm:col-span-4">
                           <input type="date" name="to"
                                  disabled={isCurrentJob}
                                  className="font-bold appearance-none block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                           <textarea name="description" rows={3}
                                     className="font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                     placeholder="Program Description"
                           ></textarea>
                        </div>

                     </div>
                     <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >Add Education
                        </button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}

