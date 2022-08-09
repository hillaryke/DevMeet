import { formDataToObject } from "~/utils/util.server";
import type { IErrors } from "~/utils/util.server";
import type { User } from "@prisma/client";
import { prisma } from "~/db.server";

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
   console.log(profileFields);

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