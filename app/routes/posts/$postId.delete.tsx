import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { deleteCommentById } from "~/models/comment.server";

export const loader: LoaderFunction = ({ params }) => {
   return redirect(`/posts/${params.postId}`);
};

export const action: ActionFunction = async ({ request, params }) => {
   const postId = params.postId;
   const formData = await request.formData();
   const commentId = formData.get("commentId");
   if (!commentId) {
      return redirect(`/posts/${postId}`);
   }
   await deleteCommentById(commentId.toString());
   return redirect(`/posts/${postId}`);

};