import type { User } from "@prisma/client";
import { prisma } from "~/db.server";
import bcrypt from "bcryptjs";
import gravatar from "gravatar";

export async function getUserById(id: User["id"]) {
   return prisma.user.findUnique({ where: { id } });
}

export async function getUserByEmail(email: User["email"]) {
   return prisma.user.findUnique({ where: { email } });
}

export async function createUser(
   name: User["name"],
   email: User["email"],
   password: User["password"],
) {
   const hashedPassword = await bcrypt.hash(password, 10);

   // get users gravatar
   const avatar = gravatar.url(email, {
      s: "200",
      r: "pg",
      d: "mm"
   });

   return prisma.user.create({
      data: {
         name,
         email,
         password: hashedPassword,
         avatar
      }
   });
}

export type { User } from "@prisma/client";

