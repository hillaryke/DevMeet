import type { EntryContext, HandleDataRequestFunction } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import dotenv from "dotenv";

dotenv.config();

export let handleDataRequest: HandleDataRequestFunction = async (
   response: Response,
   { request }
) => {
   let isGet = request.method.toLowerCase() === "get";
   let purpose =
      request.headers.get("Purpose") ||
      request.headers.get("X-Purpose") ||
      request.headers.get("Sec-Purpose") ||
      request.headers.get("Sec-Fetch-Purpose") ||
      request.headers.get("Moz-Purpose");
   let isPrefetch = purpose === "prefetch";

   // If it's a GET request and it's a prefetch request and it doesn't have a Cache-Control header
   if (isGet && isPrefetch && !response.headers.has("Cache-Control")) {
      // we will cache for 10 seconds only on the browser
      response.headers.set("Cache-Control", "private, max-age=10");
   }

   return response;
};

export default function handleRequest(
   request: Request,
   responseStatusCode: number,
   responseHeaders: Headers,
   remixContext: EntryContext
) {
   let markup = renderToString(
      <RemixServer context={remixContext} url={request.url}/>
   );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
