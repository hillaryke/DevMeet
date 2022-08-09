import Sidebarr from "~/components/Sidebarr";
import { Outlet, useLoaderData } from "@remix-run/react";
import Menu from "~/components/Menu";
import { json, LoaderFunction, redirect } from "@remix-run/node";
import { authenticatedUser, isAuthenticated } from "~/session.server";
import { CustomError } from "~/utils/errors.server";
import { getUserById } from "~/models/user.server";

export const loader: LoaderFunction = async ({ request }) => {
   const userId = await authenticatedUser(request);
   if (!userId) return redirect('/');

   const user = await getUserById(userId);

   return json({ user });
};

export default function Dashboard() {
   const { user } = useLoaderData();

   return (
      <div>
         {/*@ts-ignore*/}
         <Sidebarr user={user}/>
         <div className="md:pl-64 flex flex-col flex-1">
            <main className="flex-1">
               <div className="py-6">
                  <Outlet/>
               </div>
            </main>
         </div>
      </div>
   );
}
