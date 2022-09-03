import type { Education } from "@prisma/client";
import { getProfile } from "~/models/profile.server";
import { prisma } from "~/db.server";
import { Experience } from "@prisma/client";

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

export const getEducationById = async (eduId: Education["id"]) => {
   const data = await prisma.education.findUnique({
      where: { id: eduId },
   });
   return data;
};

export const deleteEducation = (eduId: Education["id"]) => {
   prisma.education.delete({
      where: { id: eduId }
   });
};

export const updateEducation = (eduId: Education["id"], data: any) => {
   return prisma.education.update({
      where: { id: eduId },
      data
   });
};