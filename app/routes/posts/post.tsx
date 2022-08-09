import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link, Outlet } from "@remix-run/react";

export default function Post() {
   const [liked, setLiked] = useState(false);

   return (
      <div className="flex justify-center w-screen h-screen px-4 text-gray-700">
         <div className="flex flex-col w-full max-w-screen-lg mt-2">
            <Link
               to="/posts"
               className="max-w-fit flex items-center text-gray-700 h-8 px-3 text-sm rounded bg-gray-300 hover:bg-gray-400"
            >Back to posts
            </Link>
            <div className="flex flex-col flex-grow border-l border-r border-gray-300 mt-3">

               <div className="flex-grow h-0 overflow-auto border-t">

                  <div className="flex w-full px-8 py-3 border-b border-gray-300">
                     <div className="flex flex-col items-center ml-4 mr-5 mt-6">
                        <div
                           className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20 bg-gray-400 rounded-full"></div>
                     </div>
                     <div className="flex flex-col flex-grow ml-4">
                        <div className="font-semibold mt-4 text-left">Tom Crook</div>

                        <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet, consectetur
                           adipiscing elit, sed do eiusmod
                           tempor incididunt ut labore
                        </p>
                        <div className="flex mt-2">

                           <span className="ml-1 text-xsm font-semibold text-gray-500 pt-1">Just now</span>
                        </div>
                     </div>
                  </div>

                  <div className="flex w-full py-4 pr-3 border-b-4 border-gray-300">
                     <div className="flex flex-col flex-grow ml-4">
                        <div
                           className="w-full bg-blueGreen font-semibold text-lg text-gray-50 mb-3 px-3 py-1 rounded-sm">
                           Leave a comment
                        </div>
                        <textarea name="description" rows={4}
                                  className="font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blueGreen focus:border-blueGreen sm:text-sm"
                                  placeholder="Comment on this post"
                        ></textarea>
                        <div className="flex justify-between mt-2">
                           <button
                              className="flex items-center text-gray-50 h-8 px-3 text-sm rounded bg-gray-600 hover:bg-gray-700">Submit
                           </button>
                        </div>
                     </div>
                  </div>
                  <Outlet/>
               </div>
            </div>
         </div>
      </div>
   );
}