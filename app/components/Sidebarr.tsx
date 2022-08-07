import {
   HomeIcon,
   AcademicCapIcon,
   BriefcaseIcon
} from '@heroicons/react/outline';
import { Link } from "@remix-run/react";

const navigation = [
   { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
   { name: 'Experience', href: '#', icon: BriefcaseIcon, current: false },
   { name: 'Education', href: '#', icon: AcademicCapIcon, current: false },
];

function classNames(...classes: string[]) {
   return classes.filter(Boolean).join(' ');
}

export default function Sidebarr() {
   return (
      <>
         {/*
        This example requires updating your template:
        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
         <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
               <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                  <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                     {navigation.map((item) => (
                        <a
                           key={item.name}
                           href={item.href}
                           className={classNames(
                              item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                              'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                           )}
                        >
                           <item.icon
                              className={classNames(
                                 item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                 'mr-3 flex-shrink-0 h-6 w-6'
                              )}
                              aria-hidden="true"
                           />
                           {item.name}
                        </a>
                     ))}
                  </nav>
               </div>
               <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                  <Link to="#" className="flex-shrink-0 w-full group block">
                     <div className="flex items-center">
                        <div>
                           <img
                              className="inline-block h-9 w-9 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                           />
                        </div>
                        <div className="ml-3">
                           <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
                           <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View
                              profile</p>
                        </div>
                     </div>
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
}