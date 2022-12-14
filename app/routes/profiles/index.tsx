import { CheckIcon } from '@heroicons/react/outline';
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { getProfiles } from "~/models/profile.server";

export const loader: LoaderFunction = async () => {
   const profiles = await getProfiles();

   return json({ profiles, });
};

export default function IndexProfiles() {
   const { profiles } = useLoaderData();

   return (
      <div className="flex justify-center w-screen">
         <div className="md:mx-8 lg:mx-14 sm:w-3/4 lg:w-2/3">
            <div>
               <div className="md:flex md:items-center md:justify-between mb-4">
                  <div className="flex-1 min-w-0">
                     <h2 className="text-3xl font-bold leading-7 text-blueGreen sm:text-3xl sm:truncate">Developers</h2>
                  </div>
               </div>

               <div className="flex-1 min-w-0 mb-5">
                  <h2 className="text-xl leading-7 text-gray-700 sm:text-2xl sm:truncate">
                     Browse and connect with developers
                  </h2>
               </div>

               {/* Developers */}

               <div className="">
                  {profiles.map((profile: any) => (
                     <div key={profile.id}
                          className="flex w-full p-4 mb-3 bg-gray-200 border-2 border-gray-300 rounded-lg">
                        <div className="ml-2 mr-4 sm:mr-7">
                           <Link to={`/profiles/${profile.id}`}>
                              <img src="https://avatars0.githubusercontent.com/u/130138?s=460&v=4" alt="Avatar"
                                   className=" w-14 h-14 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gray-400 rounded-full"/>
                           </Link>
                        </div>

                        <div className="sm:w-6/12 lg:w-7/12 flex flex-col ml-4">
                           <Link to={`/profiles/${profile.id}`}>
                              <div className="text-lg font-semibold mt-4 text-left">{profile.user.name}</div>
                           </Link>

                           <div className="flex mt-2">
                           <span className="text-sm font-semibold text-gray-500 pt-2">
                              {profile.status} at {profile.company}
                           </span>
                           </div>
                        </div>

                        <div
                           className="flex flex-col justify-center lg:mr-12 py-2 text-teal-600 font-semibold text-sm">
                           <ul className="flex flex-col justify-center">
                              {profile.skills.map((skill: any) => (
                                 <li key={skill} className="flex items-center">
                                    <CheckIcon className="w-5 h-5 mr-1"/>
                                    {skill}
                                 </li>
                              ))}
                           </ul>
                        </div>


                     </div>
                  ))}
               </div>
               {/* End of Developers */}
            </div>

         </div>
      </div>
   );
}