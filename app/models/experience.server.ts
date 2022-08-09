import { prisma } from "~/db.server";
import { getProfile } from "~/models/profile.server";

export type { Experience } from "@prisma/client";

export const createExperience = async (request: Request, formData: any) => {
   const profile = await getProfile(request);
   if (!profile) return null;

   const data = await prisma.profile.findUnique({
      where: { id: profile.id },
      select: { experience: true },
   });

   console.log(data!.experience);

   return prisma.profile.update({
      where: { id: profile.id },
      data: {
         experience: {
            create: {
               title: formData.title,
               company: formData.company,
               location: formData.location,
               from: formData.from,
               to: formData.to,
               current: formData.current,
               description: formData.description,
            }
         }
      }
   });
};

export const getExperience = async (request: Request) => {
   const profile = await getProfile(request);
   if (!profile) return null;

   const data = await prisma.profile.findUnique({
      where: { id: profile.id },
      select: { experience: true },
   });

   return data!.experience;
};