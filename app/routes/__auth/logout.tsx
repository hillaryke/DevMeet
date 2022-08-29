import { ActionFunction, redirect } from "@remix-run/node";
import { destroySession } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
   return redirect('/', {
      headers: {
         "set-Cookie": await destroySession(request)
      }
   });
};