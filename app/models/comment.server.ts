import { prisma } from "~/db.server";
import type { User } from "~/models/user.server";
import { Post } from "~/models/post.server";
import type { Comment } from "@prisma/client";

export const createComment = async (userId: User["id"], postId: Post["id"], text: string) => {
   return prisma.post.update({
      where: { id: postId },
      data: {
         comments: {
            create: {
               text,
               user: {
                  connect: { id: userId }
               }
            }
         }
      },
      include: {
         comments: {
            select: {
               id: true,
               text: true,
               date: true,
               user: {
                  select: {
                     name: true,
                     avatar: true
                  }
               },
            }
         },
      }
   });
};

export const getComments = async (postId: Post["id"]) => {
   return prisma.post.findUnique({
      where: { id: postId },
      include: {
         user: {
            select: {
               id: true,
               name: true,
               avatar: true
            }
         },
         comments: {
            select: {
               id: true,
               text: true,
               date: true,
               user: {
                  select: {
                     name: true,
                     avatar: true
                  }
               },
            }
         },
      }
   });
};

export const deleteCommentById = (commentId: Comment["id"]) => {
   return prisma.comment.delete({
      where: { id: commentId }
   });
};
