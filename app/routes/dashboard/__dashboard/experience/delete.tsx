import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { deleteExperience } from "~/models/experience.server";

export const loader: LoaderFunction = () => {
   return redirect('/dashboard/experiences');
};

export const action: ActionFunction = async ({ request }) => {
   const formData = await request.formData();
   const expId = formData.get("expId");
   if (!expId) return redirect('/dashboard/experiences');

   await deleteExperience(expId.toString());

   return redirect('/dashboard/experiences');
};
