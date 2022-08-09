import type { LoaderFunction } from "@remix-run/node";
import { isAuthenticated } from "~/session.server";
import { Link } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }) => {
   const userId = await isAuthenticated(request);
   console.log("userId: ", userId);

   return {};
};

export default function Index() {
   return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
         <div className="m-3 px-10 py-3">
            <h1 className="text-xl font-semibold py-6">Connect with Developers</h1>
            <div className="space-x-6">
               <Link to="/login"
                     className="bg-blueGreen text-white w-fit py-2 px-4 border border-transparent rounded-md shadow-sm font-medium focus:outline-none hover:bg-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-300"
               >Login</Link>
               <Link to="/register"
                     className="bg-teal-600 text-white w-fit py-2 px-4 border border-transparent rounded-md shadow-sm font-medium focus:outline-none hover:bg-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-300"
               >Register</Link>
            </div>
         </div>
      </div>
   );
}
