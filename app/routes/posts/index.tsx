import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { useState } from "react";
import { Form, Link, useActionData } from "@remix-run/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { json } from "@remix-run/node";
import { createPost, getPostsWithCount } from "~/models/post.server";
import util from "util";
import { authenticatedUser } from "~/session.server";
import { getUserById } from "~/models/user.server";

export const loader: LoaderFunction = async ({ request }) => {
   const posts = await getPostsWithCount();

   console.log(util.inspect(posts, { showHidden: false, depth: null, colors: true }));
   return null;
};

export const action: ActionFunction = async ({ request }) => {
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

   user = await createPost(user, text.toString());
   console.log(util.inspect(user, false, null, true));

   // return redirect('/posts')

   return null;
};

export default function PostsIndex() {
   const actionData = useActionData();

   const [liked, setLiked] = useState(false);

   return (
      <div className="flex justify-center w-screen h-screen px-4 text-gray-700">
         <div className="flex w-full max-w-screen-lg">
            <div className="flex flex-col flex-grow border-l border-r border-gray-300">
               <div className="md:flex md:items-center md:justify-between mx-9">
                  <div className="flex-1 min-w-0">
                     <h2 className="text-3xl font-bold leading-7 text-blueGreen sm:text-4xl sm:truncate pt-5">Posts</h2>
                  </div>
               </div>
               <div className="flex-grow h-0 overflow-auto">
                  <div className="flex w-full p-8 border-b-4 border-gray-300">
                     <div className="flex flex-col flex-grow ml-4">
                        <div
                           className="w-full bg-blueGreen font-semibold text-lg text-gray-50 mb-3 px-3 py-1 rounded-sm">Say
                           something...
                        </div>
                        <Form method="post">
                           <textarea name="text" rows={4}
                                     className="font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blueGreen focus:border-blueGreen sm:text-sm"
                                     placeholder="Create a post"
                           />
                           {actionData?.errors?.post ? (
                              <div className="py-1 text-red-700 text-sm">{actionData?.errors.post}</div>
                           ) : null}
                           <div className="flex justify-between mt-2">
                              <button
                                 type="submit"
                                 className="flex items-center text-gray-50 h-8 px-3 text-sm rounded bg-gray-600 hover:bg-gray-700">Submit
                              </button>
                           </div>
                        </Form>
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
                           <div className="px-4 py-1 pb-0.5 bg-gray-200 rounded">
                              <div>
                                 <FontAwesomeIcon icon={faThumbsUp}
                                                  className="cursor-pointer text-xl text-black w-6 h-5"/>
                                 <span className="pl-0.5 text-center">4</span>
                              </div>
                           </div>
                           <p className="ml-2 text font-semibold"></p>
                           <div className="px-4 py-1 bg-gray-200 rounded">
                              <div>
                                 <FontAwesomeIcon icon={faThumbsDown}
                                                  className="cursor-pointer text-xl text-black w-6 h-5 pt-0.5"/>
                              </div>
                           </div>
                           <div className="px-4  bg-gray-50 text-right">
                              <Link to="." type="submit"
                                    className="inline-flex justify-center py-1.5 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blueGreen hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-300"
                              >Discussion <span
                                 className="ml-1 bg-gray-200 rounded-xl px-1 pb-0.5 text-gray-600 text-xsm">7</span>
                              </Link>
                           </div>
                           <div className="pr-3 bg-gray-50 text-right">
                              <button type="submit"
                                      className="inline-flex justify-center py-1.5 px-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none"
                              >Delete
                              </button>
                           </div>

                           <span className="ml-4 text-xsm font-semibold text-gray-500 pt-2">Just now</span>
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
                           <div className="px-4 py-1 bg-gray-200 rounded">
                              <div>
                                 <FontAwesomeIcon icon={faThumbsUp}
                                                  className="cursor-pointer text-xl text-black w-6 h-5"/>
                              </div>
                           </div>
                           <p className="ml-2 text font-semibold"></p>
                           <div className="px-4 py-1 bg-gray-200 rounded">
                              <div>
                                 <FontAwesomeIcon icon={faThumbsDown}
                                                  className="cursor-pointer text-xl text-black w-6 h-5 pt-0.5"/>
                              </div>
                           </div>
                           <div className="px-4  bg-gray-50 text-right">
                              <button type="submit"
                                      className="inline-flex justify-center py-1.5 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blueGreen hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-300"
                              >Discussion
                              </button>
                           </div>

                           <span className="ml-4 text-xsm font-semibold text-gray-500 pt-2">Just now</span>
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
                           <div className="px-4 py-1 bg-gray-200 rounded">
                              <div>
                                 <FontAwesomeIcon icon={faThumbsUp}
                                                  className="cursor-pointer text-xl text-black w-6 h-5"/>
                              </div>
                           </div>
                           <p className="ml-2 text font-semibold"></p>
                           <div className="px-4 py-1 bg-gray-200 rounded">
                              <div>
                                 <FontAwesomeIcon icon={faThumbsDown}
                                                  className="cursor-pointer text-xl text-black w-6 h-5 pt-0.5"/>
                              </div>
                           </div>
                           <div className="px-4  bg-gray-50 text-right">
                              <button type="submit"
                                      className="inline-flex justify-center py-1.5 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blueGreen hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-300"
                              >Discussion
                              </button>
                           </div>

                           <span className="ml-4 text-xsm font-semibold text-gray-500 pt-2">Just now</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}