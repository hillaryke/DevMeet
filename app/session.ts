import { createSessionStorage } from "@remix-run/node";

const { getSession, commitSession, destroySession } = createSessionStorage({
   name: "__session",

   // @ts-ignore
   cookie: "asdfasdfasdfasdfs",
   httpsOnly: true,
   secure: true
});

export { getSession, commitSession, destroySession };