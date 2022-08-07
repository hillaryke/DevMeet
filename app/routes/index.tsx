import type { LoaderFunction } from "@remix-run/node";
import { isAuthenticated } from "~/session.server";

export const loader: LoaderFunction = async ({ request }) => {
   const userId = await isAuthenticated(request);
   console.log("userId: ", userId);

   return {};
};

export default function Index() {
   return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
         <h1>Dashboard</h1>
      </div>
   );
}
