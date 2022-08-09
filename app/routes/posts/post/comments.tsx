import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Posts() {
   const [liked, setLiked] = useState(false);

   return (
      <>
         <div className="flex w-full p-8 border-b border-gray-300">
            <div className="flex flex-col items-center ml-4 mr-5 mt-1">
               <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gray-400 rounded-full"></div>
               <div className="font-semibold mt-4 text-right">Tom</div>
            </div>
            <div className="flex flex-col flex-grow ml-4">
               <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore
               </p>
               <div className="flex mt-2">
                  <div className="pr-3 bg-gray-50 text-right">
                     <button type="submit"
                             className="inline-flex justify-center py-1.5 px-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-300"
                     >Delete
                     </button>
                  </div>

                  <span className="text-xsm font-semibold text-gray-500 pt-2">Just now</span>
               </div>
            </div>
         </div>

         <div className="flex w-full p-8 border-b border-gray-300">
            <div className="flex flex-col items-center ml-4 mr-5 mt-1">
               <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gray-400 rounded-full"></div>
               <div className="font-semibold mt-4 text-right">Tom</div>
            </div>
            <div className="flex flex-col flex-grow ml-4">
               <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore
               </p>
               <div className="flex mt-2">
                  <span className="text-xsm font-semibold text-gray-500 pt-2">Just now</span>
               </div>
            </div>
         </div>
      </>
   );
}