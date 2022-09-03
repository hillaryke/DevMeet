import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Form, Link, useActionData, useLoaderData } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import { createComment, getComments } from "~/models/comment.server";
import { authenticatedUser } from "~/session.server";
import moment from "moment";

export const loader: LoaderFunction = async ({ request, params }) => {
   const postId = params.postId;
   const postWithComments = await getComments(postId!);

   return json({
      post: postWithComments,
      userId: await authenticatedUser(request)
   });
};

export const action: ActionFunction = async ({ request, params }) => {
   const postId = params.postId;
   const userId = await authenticatedUser(request);
   if (!userId) {
      return json({ errors: { post: "You must login or register to create a post" } });
   }

   const formData = await request.formData();
   let text = formData.get("text");

   if (!text || text.toString().length < 6) {
      return json({ errors: { post: "Post must be at least 6 characters" } });
   }

   await createComment(userId, postId!, text.toString());

   return redirect(`/posts/${postId}`);
};

export default function Post() {
   const { post, userId } = useLoaderData();
   const actionData = useActionData();

   return (
      <div className="flex justify-center w-screen h-screen px-4 text-gray-700">
         <div className="flex flex-col w-full max-w-screen-lg -mt-1">
            <Link
               to="/posts"
               className="max-w-fit flex items-center text-gray-700 h-8 px-3 text-sm rounded bg-gray-300 hover:bg-gray-400"
            >Back to posts
            </Link>
            <div className="flex flex-col flex-grow border-l border-r border-gray-300 mt-3">

               <div className="flex-grow h-0 overflow-auto border-t">

                  <div className="flex w-full px-8 py-3 border-b border-gray-300">
                     <div className="flex flex-col items-center ml-4 mr-5 mt-6">
                        <div className="flex-shrink-0">
                           <img src={post.user.avatar} alt="Avatar"
                                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20 rounded-full"/>
                        </div>
                     </div>
                     <div className="flex flex-col flex-grow ml-4">
                        <div className="font-semibold mt-4 text-left">{post.user.name}</div>

                        <p className="mt-1">{post.text}</p>
                        <div className="flex mt-2">

                           <span className="ml-1 text-xsm font-semibold text-gray-500 pt-1">
                              {moment(post.date).fromNow()}
                           </span>
                        </div>
                     </div>
                  </div>

                  <div className="flex w-full py-4 pr-3 border-b-4 border-gray-300">
                     <div className="flex flex-col flex-grow ml-4">
                        <div
                           className="w-full bg-blueGreen font-semibold text-lg text-gray-50 mb-3 px-3 py-1 rounded-sm">
                           Leave a comment
                        </div>
                        <Form method="post">
                           <textarea name="text" rows={4}
                                     className="font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blueGreen focus:border-blueGreen sm:text-sm"
                                     placeholder="Comment on this post"
                           ></textarea>
                           {actionData?.errors?.post ? (
                              <div className="py-1 text-red-700 text-sm">{actionData?.errors.post}</div>
                           ) : null}
                           <div className="flex justify-between mt-2">
                              <button
                                 className="flex items-center text-gray-50 h-8 px-3 text-sm rounded bg-gray-600 hover:bg-gray-700">Submit
                              </button>
                           </div>
                        </Form>
                     </div>
                  </div>
                  {/* Comments */}
                  {post.comments.length > 0 ? (
                        post.comments.map((comment: any) => (
                           <div key={comment.text} className="flex w-full p-4 border-b border-gray-300">
                              <div className="flex flex-col items-center ml mr-5 mt-1">
                                 <div className="flex-shrink-0">
                                    <img src={comment.user.avatar} alt="Avatar"
                                         className="w-12 h-12 w-12 h-12 sm:w-14 sm:h-14 rounded-full"/>
                                 </div>
                                 <div className="font-semibold text-sm mt-4 text-right">{comment.user.name}</div>
                              </div>
                              <div className="flex flex-col flex-grow ml-4">
                                 <p className="mt-1">{comment.text}</p>
                                 <div className="flex mt-2">
                                    {post.user.id === userId ?
                                       <Form action={`/posts/${post.id}/delete`} method="post">
                                          <input type="hidden" name="commentId" value={comment.id}/>
                                          <div className="pr-3 bg-gray-50 text-right">
                                             <button type="submit"
                                                     value="deleteComment"
                                                     className="inline-flex justify-center py-1.5 px-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-300"
                                             >Delete
                                             </button>
                                          </div>
                                       </Form>
                                       : null
                                    }

                                    <span className="text-xsm font-semibold text-gray-500 pt-2">
                                 {moment(new Date(comment.date)).fromNow(true)}
                              </span>
                                 </div>
                              </div>
                           </div>
                        ))
                     )
                     : (
                        <h2 className="font-semibold text-lg p-6">
                           No comments for this post!
                        </h2>
                     )
                  }
                  {/* End of Comments*/}
               </div>
            </div>
         </div>
      </div>
   );
}