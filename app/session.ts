import { createCookieSessionStorage, createSessionStorage, SessionData } from "@remix-run/node";
import invariant from "tiny-invariant";

invariant(process.env.SESSION_SECRET, "SESSION_SECRET must be specified");

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