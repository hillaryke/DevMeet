import type { LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
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
import Headerr from "~/components/Headerr";
import { isAuthenticated } from "~/session.server";

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

export const loader: LoaderFunction = async ({ request }) => {
   return json({ user: await isAuthenticated(request) });
};

export default function App() {
   return (
      <html lang="en" className="h-full bg-gray-100">
      <head>
         <Meta/>
         <Links/>
      </head>
      <body className="h-full font-Railway bg-sky-7">
         <!-- Load Facebook SDK for JavaScript -->
<div id="fb-root"></div>
<script>
window.fbAsyncInit = function() {
  FB.init({
    xfbml            : true,
    version          : 'v16.0'
  });
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<!-- Your Chat Plugin code -->
<div class="fb-customerchat"
  attribution="install_email"
  attribution_version="biz_inbox"
  page_id="103713732669836">
</div>
      <Headerr/>
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
