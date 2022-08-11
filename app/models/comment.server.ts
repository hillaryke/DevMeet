import { prisma } from "~/db.server";
import type { User } from "~/models/user.server";
import { Post } from "~/models/post.server";

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