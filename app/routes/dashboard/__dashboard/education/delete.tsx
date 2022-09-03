import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { deleteEducation } from "~/models/education.server";

export const loader: LoaderFunction = () => {
   return redirect('/dashboard/educations');
};

export const action: ActionFunction = async ({ request }) => {
   const formData = await request.formData();
   const eduId = formData.get("eduId");
   if (!eduId) return redirect('/dashboard/educations');

   await deleteEducation(eduId.toString());

   return redirect('/dashboard/educations');
};