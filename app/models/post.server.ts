import type { Post } from "@prisma/client";
import type { User } from "~/models/user.server";
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
      // @ts-ignore
      orderBy: {
         date: "desc"
      },
      include: {
         user: {
            select: {
               id: true,
               name: true,
               avatar: true
            }
         },
         _count: {
            select: {
               comments: true,
               likes: true
            }
         }
      }
   });
};

export const deletePostById = (postId: Post["id"]) => {
   return prisma.post.delete({
      where: {
         id: postId
      }
   });
};