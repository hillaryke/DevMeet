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
import appstyles from "~/styles/App.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: appstyles
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Raleway"
    },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
    }
  ]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "DevMeet",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <script src="https://kit.fontawesome.com/b6db36476d.js" crossOrigin="anonymous"/>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
