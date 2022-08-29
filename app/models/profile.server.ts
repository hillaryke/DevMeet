import { formDataToObject } from "~/utils/util.server";
import type { IErrors } from "~/utils/util.server";
import type { User } from "@prisma/client";
import { prisma } from "~/db.server";

import { authenticatedUser } from "~/session.server";

export type { Profile } from "@prisma/client";

export const createProfile = async (formData: FormData, userId: User["id"]) => {
   const errors: IErrors = {};
   const errorMessages = {
      status: "Status is required",
      skills: "skills is required",
   };
   const fieldNames = ['status', 'company', 'website', 'location', 'skills', 'bio', 'githubUsername'];
   const profileFields = formDataToObject(formData, fieldNames);
   const { status, skills } = profileFields;
   if (status === "0") {
      errors["status"] = errorMessages["status"];
   }
   if (!skills || skills.length === 0) {
      errors["skills"] = errorMessages["skills"];
   }
   // @ts-ignore
   profileFields["skills"] = skills.split(",").map((skill: string) => skill.trim());

   if (Object.keys(errors).length > 0) {
      return { errors };
   }

   const user = await prisma.user.update({
      where: { id: userId },
      data: {
         profile: {
            create: {
               company: profileFields.company,
               website: profileFields.website,
               location: profileFields.location,
               status: profileFields.status,
               skills: profileFields.skills,
               bio: profileFields.bio,
               githubUsername: profileFields.githubUsername,
            }
         }
      }
   });

   return { user };
};

export const getProfile = async (request: Request) => {
   const userId = await authenticatedUser(request);
   if (!userId) return null;

   const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { profile: true },
   });

   return user?.profile;
};

export const getProfiles = () => {
   return prisma.profile.findMany({
      orderBy: {
         date: "desc"
      },
      select: {
         id: true,
         company: true,
         skills: true,
         location: true,
         status: true,
         user: {
            select: {
               id: true,
               name: true,
               avatar: true
            }
         }
      },
   });
};

export const getProfileById = async (profileId: string) => {
   return prisma.profile.findUnique({
      where: { id: profileId },
      include: {
         user: {
            select: {
               id: true,
               name: true,
               avatar: true,
               date: true
            }
         }
      },
   });
};