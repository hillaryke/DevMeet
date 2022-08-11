import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Form, Link, useActionData } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { createComment } from "~/models/comment.server";
import util from "util";
import { authenticatedUser } from "~/session.server";
import { getUserById } from "~/models/user.server";

export const action: ActionFunction = async ({ request, params }) => {
   const postId = params.postId;
   const userId = await authenticatedUser(request);
   if (!userId) {
      return json({ errors: { post: "You must login or register to create a post" } });
   }

   let user = await getUserById(userId);
   if (!user) {
      throw new Error("User not found");
   }

   const formData = await request.formData();
   let text = formData.get("text");

   if (!text || text.toString().length < 6) {
      return json({ errors: { post: "Post must be at least 6 characters" } });
   }

   const postUpdated = await createComment(user, postId!, text.toString());
   console.log(util.inspect(postUpdated, false, null, true));

   return redirect(`/posts/${postId}`);
};

export default function Post() {
   const actionData = useActionData();

   const [liked, setLiked] = useState(false);

   return (
      <div className="flex justify-center w-screen h-screen px-4 text-gray-700">
         <div className="flex flex-col w-full max-w-screen-lg mt-2">
            <Link
               to="/posts"
               className="max-w-fit flex items-center text-gray-700 h-8 px-3 text-sm rounded bg-gray-300 hover:bg-gray-400"
            >Back to posts
            </Link>
            <div className="flex flex-col flex-grow border-l border-r border-gray-300 mt-3">

               <div className="flex-grow h-0 overflow-auto border-t">

                  <div className="flex w-full px-8 py-3 border-b border-gray-300">
                     <div className="flex flex-col items-center ml-4 mr-5 mt-6">
                        <div
                           className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20 bg-gray-400 rounded-full"></div>
                     </div>
                     <div className="flex flex-col flex-grow ml-4">
                        <div className="font-semibold mt-4 text-left">Tom Crook</div>

                        <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet, consectetur
                           adipiscing elit, sed do eiusmod
                           tempor incididunt ut labore
                        </p>
                        <div className="flex mt-2">

                           <span className="ml-1 text-xsm font-semibold text-gray-500 pt-1">Just now</span>
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
                  <div className="flex w-full p-8 border-b border-gray-300">
                     <div className="flex flex-col items-center ml-4 mr-5 mt-1">
                        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gray-400 rounded-full"></div>
                        <div className="font-semibold mt-4 text-right">Tom</div>
                     </div>
                     <div className="flex flex-col flex-grow ml-4">
                        <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet, consectetur
                           adipiscing elit, sed do eiusmod
                           tempor incididunt ut labore
                        </p>
                        <div className="flex mt-2">
                           <div className="pr-3 bg-gray-50 text-right">
                              <button type="submit"
                                      className="inline-flex justify-center py-1.5 px-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-300"
                              >Delete
                              </button>
                           </div>

                           <span className="text-xsm font-semibold text-gray-500 pt-2">Just now</span>
                        </div>
                     </div>
                  </div>
                  <div className="flex w-full p-8 border-b border-gray-300">
                     <div className="flex flex-col items-center ml-4 mr-5 mt-1">
                        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gray-400 rounded-full"></div>
                        <div className="font-semibold mt-4 text-right">Tom</div>
                     </div>
                     <div className="flex flex-col flex-grow ml-4">
                        <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet, consectetur
                           adipiscing elit, sed do eiusmod
                           tempor incididunt ut labore
                        </p>
                        <div className="flex mt-2">
                           <span className="text-xsm font-semibold text-gray-500 pt-2">Just now</span>
                        </div>
                     </div>
                  </div>
                  {/* End of Comments*/}
               </div>
            </div>
         </div>
      </div>
   );
}