import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { deleteExperience } from "~/models/experience.server";

export const loader: LoaderFunction = () => {
   return redirect('/dashboard');
};

export const action: ActionFunction = async ({ request }) => {
   const formData = await request.formData();
   const expId = formData.get("expId");
   if (!expId) return redirect('/dashboard');

   await deleteExperience(expId.toString());

   return redirect('/dashboard/experiences');
};
