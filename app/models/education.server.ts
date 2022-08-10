import type { Education } from "@prisma/client";
import { getProfile } from "~/models/profile.server";
import { prisma } from "~/db.server";

export type { Education } from "@prisma/client";

export const createEducation = async (request: Request, formData: any) => {
   const profile = await getProfile(request);
   if (!profile) return null;

   return prisma.profile.update({
      where: { id: profile.id },
      data: {
         education: {
            create: {
               school: formData.school,
               degree: formData.degree,
               fieldofstudy: formData.fieldofstudy,
               from: formData.from,
               to: formData.to,
               current: formData.current,
               description: formData.description,
            }
         }
      }
   });
};


export const getEducation = async (request: Request) => {
   const profile = await getProfile(request);
   if (!profile) return null;

   const data = await prisma.profile.findUnique({
      where: { id: profile.id },
      select: { education: true },
   });

   return data!.education;
};