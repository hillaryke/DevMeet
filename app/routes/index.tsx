import type { LoaderFunction } from "@remix-run/node";
import { isAuthenticated } from "~/session.server";
import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import Headerr from "~/components/Headerr";

export const loader: LoaderFunction = async ({ request }) => {
   const isAuth = await isAuthenticated(request);
   console.log("isAuth: ", isAuth);

   return json({ user: isAuth });
};

// export default function Index() {
//    const { isAuth } = useLoaderData();
//
//    return isAuth ? (
//       <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
//          <div className="m-3 px-10 py-3">
//             <h1 className="text-xl font-semibold py-6">Connect with Developers</h1>
//             <Link to="/dashboard"
//                   className="bg-teal-600 text-white w-fit py-2 px-4 border border-transparent rounded-md shadow-sm font-medium focus:outline-none hover:bg-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-300"
//             >Dashboard</Link>
//          </div>
//       </div>
//    ) : (
//       <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
//          <div className="m-3 px-10 py-3">
//             <h1 className="text-xl font-semibold py-6">Connect with Developers</h1>
//             <div className="space-x-6">
//                <Link to="/login"
//                      className="bg-blueGreen text-white w-fit py-2 px-4 border border-transparent rounded-md shadow-sm font-medium focus:outline-none hover:bg-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-300"
//                >Login</Link>
//                <Link to="/register"
//                      className="bg-teal-600 text-white w-fit py-2 px-4 border border-transparent rounded-md shadow-sm font-medium focus:outline-none hover:bg-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-300"
//                >Register</Link>
//             </div>
//          </div>
//       </div>
//    )
// }

export default function Index() {
   const { user } = useLoaderData();
   return (
      <>
         <main className="pt-20 h-5/6">
            <div>
               {/* Hero card */}
               <div>
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"/>
                  <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                     <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                        <div className="absolute inset-0">
                           <img
                              className="h-full w-full object-cover"
                              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                              alt="People working on laptops"
                           />
                           <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply"/>
                        </div>
                        <div className="h-full relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                           <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                              <span className="inline-block text-white">Connect with</span>{" "}
                              <span className="inline-block text-indigo-200">Developers</span>
                           </h1>

                           <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                              {user ? (
                                 <Link
                                    to="login"
                                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                                 >
                                    Dashboard
                                 </Link>
                              ) : (
                                 <>
                                    <Link
                                       to="login"
                                       className="mr-5 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                                    >
                                       Login
                                    </Link><Link
                                    to="/register"
                                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                                 >
                                    Register
                                 </Link>
                                 </>)
                              }
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* More main page content here... */}
         </main>
      </>
   );
}
