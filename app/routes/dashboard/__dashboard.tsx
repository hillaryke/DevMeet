import Sidebarr from "~/components/Sidebarr";
import { Outlet, useLoaderData } from "@remix-run/react";
import Menu from "~/components/Menu";
import { json, LoaderFunction, redirect } from "@remix-run/node";
import { authenticatedUser } from "~/session.server";
import { getUserById } from "~/models/user.server";
import Headerr from "~/components/Headerr";

export const loader: LoaderFunction = async ({ request }) => {
   const userId = await authenticatedUser(request);
   if (!userId) return redirect('/');
   const user = await getUserById(userId);
   return json({ user });
};

export default function Dashboard() {
   const { user } = useLoaderData();


   return (
      <>
         <div>
            {/*@ts-ignore*/}

            <Sidebarr user={user}/>
            <div className="md:pl-64 flex flex-col flex-1">
               <main className="flex-1">
                  <Outlet/>
               </main>
            </div>
         </div>
      </>
   );
}
