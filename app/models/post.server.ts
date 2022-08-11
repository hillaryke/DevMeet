import type { User } from "~/models/user.server";
import type { Post } from "@prisma/client";
import { prisma } from "~/db.server";

export type { Post } from "@prisma/client";

export const createPost = async (user: User, text: string) => {
   return prisma.user.update({
      where: { id: user.id },
      data: {
         posts: {
            create: {
               text,
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

export const getPostsWithCount = async () => {
   return prisma.post.findMany({
      include: {
         _count: {
            select: {
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