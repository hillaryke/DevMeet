import type { Post } from "@prisma/client";
import { prisma } from "~/db.server";

import { authenticatedUser } from "~/session.server";

export type { Post } from "@prisma/client";

export const createPost = async (request: Request, text: string) => {
   const userId = await authenticatedUser(request);
   if (!userId) {
      throw new Error("Not authenticated");
   }
   return await prisma.user.update({
      where: { id: userId },
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