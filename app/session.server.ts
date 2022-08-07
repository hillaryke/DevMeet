import { createCookieSessionStorage, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import { generateToken } from "~/models/user.server";
import jwt from "jsonwebtoken";
import type { User } from "~/models/user.server";

invariant(process.env.SESSION_SECRET, "SESSION_SECRET must be specified");
invariant(process.env.JWT_SECRET, "JWT_SECRET must be specified");

export const sessionStorage = createCookieSessionStorage({
   cookie: {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      secrets: [process.env.SESSION_SECRET],
      secure: process.env.NODE_ENV === "production"
   }
});

export async function getSession(request: Request) {
   const cookie = request.headers.get('cookie');
   return sessionStorage.getSession(cookie);
}

export async function createUserSession(userId: string, request: Request, redirectTo: string) {
   const session = await getSession(request);
   const token = generateToken(userId);
   session.set("token", token);
   return redirect(redirectTo, {
      headers: { "Set-Cookie": await sessionStorage.commitSession(session) }
   });
}

export async function authenticatedUser(request: Request): Promise<User["id"] | null> {
   const session = await getSession(request);
   if (session.has("token")) return null;
   const token = session.get("token");
   try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!);
      // @ts-ignore
      const userId = decoded.userId;
      return userId;
   } catch (err) {
      console.log(err);
   }
   return null;
}

export async function isAuthenticated(request: Request): Promise<boolean> {
   const session = await getSession(request);
   return session.has("token");
}