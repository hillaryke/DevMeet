import type { LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faYoutube, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useLoaderData } from "@remix-run/react";

import { getUserWithProfile } from "~/models/user.server";
import { authenticatedUser } from "~/session.server";
import { getProfile, getProfileWithAll } from "~/models/profile.server";
import util from "util";

export const loader: LoaderFunction = async ({ request }) => {
   const userId = await authenticatedUser(request);
   if (!userId) return redirect("/");
   const user = await getUserWithProfile(userId);

   const profile = await getProfileWithAll(userId);

   console.log(util.inspect(profile, { showHidden: false, depth: null, colors: true }));

   return json({ user });
};

export default function ProfileShow() {
   const { user } = useLoaderData();

   if (!user.profile) {
      return (
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
      );
   }

   return (
      <div className="bg-gray-100">
         <div className="container mx-auto mb-5 px-5">
            <div className="md:flex no-wrap md:-mx-2 ">
               {/* Left Side */}
               <div className="w-full md:w-3/12 md:mx-2">
                  {/* Profile Card */}
                  <div className="bg-white p-3 border-t-4 border-green-400">
                     <div className="image overflow-hidden">
                        <img className="h-auto w-full mx-auto"
                             src={user.avatar}
                             alt=""
                        />
                     </div>
                     <h1 className="text-gray-900 font-bold text-xl leading-8 my-1 text-center">{user.name}</h1>
                     <h3 className="text-gray-600 font-lg text-semibold leading-6 text-center">
                        {user.profile.status} at {user.profile.company}
                     </h3>
                     <div className="text-center mt-2 space-x-3 text-xl">
                        <FontAwesomeIcon icon={faGlobe} className="text-blue-500"/>
                        <FontAwesomeIcon icon={faFacebookF} className="text-blue-700"/>
                        <FontAwesomeIcon icon={faYoutube} className="text-red-700"/>
                        <FontAwesomeIcon icon={faTwitter} className="text-blue-500"/>
                        <FontAwesomeIcon icon={faInstagram} className="text-instagramColor"/>
                        <FontAwesomeIcon icon={faLinkedin} className="text-blue-600"/>
                     </div>


                     <ul
                        className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li className="flex items-center py-3 text-blue-700 underline underline-offset-4">
                           <Link to="/dashboard/edit-profile">Edit Profile</Link>
                        </li>
                        <li className="flex items-center py-3">
                           <span>Member since</span>
                           <span className="ml-auto">Nov 07, 2016</span>
                        </li>
                     </ul>
                  </div>
                  {/* End of profile card */}
               </div>
               {/* Right Side */}
               <div className="w-full md:w-9/12 mx-2 h-64">
                  {/* Profile tab */}
                  {/* About Section */}
                  <div className="bg-white p-3 shadow-sm rounded-sm">
                     <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span className="text-green-500">
                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinejoin="round" strokeWidth="2"
                                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                            </svg>
                        </span>
                        <span className="tracking-wide">About</span>
                     </div>
                     <div className="text-gray-700">
                        <div className="text-sm px-4 py-2">
                           <div className="font-semibold">Bio</div>
                           <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">{user.profile.bio}</p>
                        </div>
                     </div>
                  </div>
                  {/* End of about section */}

                  <div className="my-4"></div>

                  {/* Experience and education */}

                  <div className="flex">
                     {/* Experience  */}
                     <div className="w-6/12 mr-4  p-3 shadow-sm rounded-sm bg-white">
                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span className="text-green-500">
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                    </svg>
                                </span>
                           <span className="tracking-wide">Experience</span>
                        </div>
                        <div className="list-inside space-y-1 mb-4">
                           <div className="text-teal-600 font-semibold">Apple Inc.</div>
                           <div className="text-gray-700 text-sm">March 2020 - Now</div>
                           <div className="text-sm font-semibold text-gray-700">Position:
                              <span className="text-sm text-gray-600 font-normal">{"  "}Developer</span>
                           </div>
                           <div className="text-sm font-semibold text-gray-700">Description:{"  "}
                              <span className="font-normal">
                                       Dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt
                                    </span>
                           </div>
                        </div>
                        <div className="list-inside space-y-1 mb-4">
                           <div className="text-teal-600 font-semibold">Apple Inc.</div>
                           <div className="text-gray-700 text-sm">March 2020 - Now</div>
                           <div className="text-sm font-semibold text-gray-700">Position:
                              <span className="text-sm text-gray-600 font-normal">{"  "}Developer</span>
                           </div>
                           <div className="text-sm font-semibold text-gray-700">Description:{"  "}
                              <span className="font-normal">
                                       Dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt
                                    </span>
                           </div>
                        </div>
                     </div>
                     {/* Education */}
                     <div className="w-6/12 p-3 shadow-sm rounded-sm bg-white">
                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span className="text-green-500">
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z"/>
                                        <path fill="#fff"
                                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                                        <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                                    </svg>
                                </span>
                           <span className="tracking-wide">Education</span>
                        </div>


                        <div className="list-inside space-y-1 mb-4">
                           <div className="text-teal-600 font-semibold">Masters Degree in Computer Science</div>
                           <div className="text-sm font-semibold text-gray-700">Stanford University</div>
                           <div className="text-gray-700 text-sm">23/11/2002 - present</div>
                           <div className="text-sm font-semibold text-gray-700">Description:{"  "}
                              <span className="font-normal">
                                       Dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt
                                    </span>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* End of Experience and education grid */}

                  {/* About Section */}
                  <div className="bg-white p-3 shadow-sm rounded-sm mt-5">
                     <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span className="text-green-500">
                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                            </svg>
                        </span>
                        <span className="tracking-wide">Github repos</span>
                     </div>
                     {/* List of repos */}
                     <div className="flex justify-between border">
                        <div className="flex flex-col m-3 ml-4 text-sm">
                           <p className="text-blueGreen font-semibold">testing</p>
                           <p className="mt-4">Testing</p>
                        </div>
                        <div className="flex flex-col space-y-1 text-xs text-center m-3">
                           <div className="bg-blueGreen text-gray-200 p-1">Stars: 2</div>
                           <div className="bg-darkColor text-gray-200 p-1">Watchers: 2</div>
                           <div className="bg-gray-200 p-1">Forks: 23</div>
                        </div>
                     </div>
                     <div className="flex justify-between border">
                        <div className="flex flex-col m-3 ml-4 text-sm">
                           <p className="text-blueGreen font-semibold">testing</p>
                           <p className="mt-4">Testing</p>
                        </div>
                        <div className="flex flex-col space-y-1 text-xs text-center m-3">
                           <div className="bg-blueGreen text-gray-200 p-1">Stars: 2</div>
                           <div className="bg-darkColor text-gray-200 p-1">Watchers: 2</div>
                           <div className="bg-gray-200 p-1">Forks: 23</div>
                        </div>
                     </div>
                     <div className="flex justify-between border">
                        <div className="flex flex-col m-3 ml-4 text-sm">
                           <p className="text-blueGreen font-semibold">testing</p>
                           <p className="mt-4">Testing</p>
                        </div>
                        <div className="flex flex-col space-y-1 text-xs text-center m-3">
                           <div className="bg-blueGreen text-gray-200 p-1">Stars: 2</div>
                           <div className="bg-darkColor text-gray-200 p-1">Watchers: 2</div>
                           <div className="bg-gray-200 p-1">Forks: 23</div>
                        </div>
                     </div>
                     {/*   End of list of repos */}
                  </div>
                  {/* End of about section */}
                  {/* End of profile tab */}
               </div>
            </div>
         </div>
      </div>
   );
}