import type { User } from "~/models/user.server";
import type { Post } from "@prisma/client";
import { prisma } from "~/db.server";

import { authenticatedUser } from "~/session.server";

export type { Post } from "@prisma/client";

export const createPost = async (user: User, text: string) => {
   return prisma.user.update({
      where: { id: user.id },
      data: {
         posts: {
            create: {
               text,
               userName: user.name,
               userAvatar: user.avatar,
            }
         }
      },
      include: {
         posts: {
            include: {
               comments: true,
               likes: true
            }
         }
      }
   });
};

export const getPostById = async (postId: Post["id"]) => {
   return prisma.post.findUnique({
      where: { id: postId }
   });


};