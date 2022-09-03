import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { deletePostById } from "~/models/post.server";

export const action: ActionFunction = async ({ request }) => {
   const formData = await request.formData();
   const postId = formData.get("postId");
   if (!postId) {
      return redirect("/posts");
   }

   try {
      await deletePostById(postId.toString());
   } catch (err) {
      console.log(err);
   }

   return redirect('/posts');
};