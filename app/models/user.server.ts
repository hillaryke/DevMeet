import type { User } from "@prisma/client";
import { prisma } from "~/db.server";
import bcrypt from "bcryptjs";
import gravatar from "gravatar";
import jwt from "jsonwebtoken";
import invariant from "tiny-invariant";

const JWT_SECRET = process.env.JWT_SECRET;
invariant(JWT_SECRET, "JWT_SECRET must be specified");

export const generateToken = (userId: string) => {
   try {
      const token = jwt.sign(
         { userId },
         JWT_SECRET!,
         { expiresIn: 60 * 1000 }
      );
      return token;
   } catch (err) {
      console.log(err);
   }
};

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


export const validateCredentials = async (
   email: User["email"],
   password: User["password"]
): Promise<User["id"] | null> => {
   const existingUser = await getUserByEmail(email);

   if (!existingUser) return null;

   // compare password against existinguser's password
   const isMatchPassword = await bcrypt.compare(password, existingUser.password);
   if (!isMatchPassword) return null;

   return existingUser.id;
};

export type { User } from "@prisma/client";

