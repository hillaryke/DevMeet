import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
   LinkProps,
   Links,
   LiveReload,
   Meta,
   Outlet,
   Scripts,
   ScrollRestoration,
} from "@remix-run/react";
import appstyles from "~/styles/OldApp.css";
import styles from "~/styles/app.css";

export const links: LinksFunction = () => {
   return [
      {
         rel: "stylesheet",
         href: styles
      },
      // {
      //   rel: "stylesheet",
      //   href: appstyles
      // },
      {
         rel: "stylesheet",
         href: "https://fonts.googleapis.com/css?family=Raleway"
      },
   ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "DevMeet",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en" className="h-full bg-gray-100">
    <head>
       <Meta/>
       <Links/>
    </head>
    <body className="h-full font-Railway bg-sky-7">
    <Outlet/>
    <ScrollRestoration/>
    <script src="https://kit.fontawesome.com/b6db36476d.js" crossOrigin="anonymous"/>
    <Scripts/>
    <LiveReload/>
    </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
   return (
      <div>
         <h1>Error</h1>
         <p>{error.message}</p>
         <p>The stack trace is:</p>
         <pre>{error.stack}</pre>
      </div>
   );
}