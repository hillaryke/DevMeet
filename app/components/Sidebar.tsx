// <style>
//    /* Compiled dark classes from Tailwind */
//    .dark .dark\:divide-gray-700 > :not([hidden]) ~ :not([hidden]) {
//    border - color: rgba(55, 65, 81);
// }
//    .dark .dark\:bg-gray-50 {
//    background - color: rgba(249, 250, 251);
// }
//    .dark .dark\:bg-gray-100 {
//    background - color: rgba(243, 244, 246);
// }
//    .dark .dark\:bg-gray-600 {
//    background - color: rgba(75, 85, 99);
// }
//    .dark .dark\:bg-gray-700 {
//    background - color: rgba(55, 65, 81);
// }
//    .dark .dark\:bg-gray-800 {
//    background - color: rgba(31, 41, 55);
// }
//    .dark .dark\:bg-gray-900 {
//    background - color: rgba(17, 24, 39);
// }
//    .dark .dark\:bg-red-700 {
//    background - color: rgba(185, 28, 28);
// }
//    .dark .dark\:bg-green-700 {
//    background - color: rgba(4, 120, 87);
// }
//    .dark .dark\:hover\:bg-gray-200:hover {
//    background - color: rgba(229, 231, 235);
// }
//    .dark .dark\:hover\:bg-gray-600:hover {
//    background - color: rgba(75, 85, 99);
// }
//    .dark .dark\:hover\:bg-gray-700:hover {
//    background - color: rgba(55, 65, 81);
// }
//    .dark .dark\:hover\:bg-gray-900:hover {
//    background - color: rgba(17, 24, 39);
// }
//    .dark .dark\:border-gray-100 {
//    border - color: rgba(243, 244, 246);
// }
//    .dark .dark\:border-gray-400 {
//    border - color: rgba(156, 163, 175);
// }
//    .dark .dark\:border-gray-500 {
//    border - color: rgba(107, 114, 128);
// }
//    .dark .dark\:border-gray-600 {
//    border - color: rgba(75, 85, 99);
// }
//    .dark .dark\:border-gray-700 {
//    border - color: rgba(55, 65, 81);
// }
//    .dark .dark\:border-gray-900 {
//    border - color: rgba(17, 24, 39);
// }
//    .dark .dark\:hover\:border-gray-800:hover {
//    border - color: rgba(31, 41, 55);
// }
//    .dark .dark\:text-white {
//    color: rgba(255, 255, 255);
// }
//    .dark .dark\:text-gray-50 {
//    color: rgba(249, 250, 251);
// }
//    .dark .dark\:text-gray-100 {
//    color: rgba(243, 244, 246);
// }
//    .dark .dark\:text-gray-200 {
//    color: rgba(229, 231, 235);
// }
//    .dark .dark\:text-gray-400 {
//    color: rgba(156, 163, 175);
// }
//    .dark .dark\:text-gray-500 {
//    color: rgba(107, 114, 128);
// }
//    .dark .dark\:text-gray-700 {
//    color: rgba(55, 65, 81);
// }
//    .dark .dark\:text-gray-800 {
//    color: rgba(31, 41, 55);
// }
//    .dark .dark\:text-red-100 {
//    color: rgba(254, 226, 226);
// }
//    .dark .dark\:text-green-100 {
//    color: rgba(209, 250, 229);
// }
//    .dark .dark\:text-blue-400 {
//    color: rgba(96, 165, 250);
// }
//    .dark .group:hover .dark\:group-hover\:text-gray-500 {
//    color: rgba(107, 114, 128);
// }
//    .dark .group:focus .dark\:group-focus\:text-gray-700 {
//    color: rgba(55, 65, 81);
// }
//    .dark .dark\:hover\:text-gray-100:hover {
//    color: rgba(243, 244, 246);
// }
//    .dark .dark\:hover\:text-blue-500:hover {
//    color: rgba(59, 130, 246);
// }
//
//    /* Custom style */
//    .header-right {
//    width: calc(100% - 3.5rem);
// }
//    .sidebar:hover {
//    width: 16rem;
// }
//    @media only screen and (min-width: 768px) {
//    .header-right {
//    width: calc(100% - 16rem);
// }
// }
// </style>;

export default function Sidebar() {

   return (
      <div
         className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
         <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
               <li className="px-5 hidden md:block">
                  <div className="flex flex-row items-center h-8">
                     <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Main</div>
                  </div>
               </li>
               <li>
                  <a href="#"
                     className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                </span>
                     <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                  </a>
               </li>
               <li>
                  <a href="#"
                     className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                </span>
                     <span className="ml-2 text-sm tracking-wide truncate">Board</span>
                     <span
                        className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full">New</span>
                  </a>
               </li>
               <li>
                  <a href="#"
                     className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                </span>
                     <span className="ml-2 text-sm tracking-wide truncate">Messages</span>
                  </a>
               </li>
               <li>
                  <a href="#"
                     className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                </span>
                     <span className="ml-2 text-sm tracking-wide truncate">Notifications</span>
                     <span
                        className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span>
                  </a>
               </li>
               <li className="px-5 hidden md:block">
                  <div className="flex flex-row items-center mt-5 h-8">
                     <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Settings</div>
                  </div>
               </li>
               <li>
                  <a href="#"
                     className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </span>
                     <span className="ml-2 text-sm tracking-wide truncate">Profile</span>
                  </a>
               </li>
               <li>
                  <a href="#"
                     className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </span>
                     <span className="ml-2 text-sm tracking-wide truncate">Settings</span>
                  </a>
               </li>
            </ul>
            <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright @2021</p>
         </div>
      </div>
   );
}