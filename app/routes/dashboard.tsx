import Sidebarr from "~/components/Sidebarr";
import { Outlet } from "@remix-run/react";
import Menu from "~/components/Menu";

export default function Dashboard() {
   return (
      <div>
         <Sidebarr/>
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
