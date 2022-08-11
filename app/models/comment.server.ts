import { prisma } from "~/db.server";
import type { User } from "~/models/user.server";
import { Post } from "~/models/post.server";

export const createComment = async (user: User, postId: Post["id"], text: string) => {
   return prisma.post.update({
      where: { id: postId },
      data: {
         comments: {
            create: {
               text,
               userName: user.name,
               userAvatar: user.avatar,
               user: {
                  connect: { id: user.id }
               }
            }
         }
      },
      include: {
         comments: {
            include: {
               user: true,
            }
         },
      }
   });
};