var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest,
  handleDataRequest: () => handleDataRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_dotenv = __toESM(require("dotenv")), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
import_dotenv.default.config();
var handleDataRequest = async (response, { request }) => {
  let isGet = request.method.toLowerCase() === "get", isPrefetch = (request.headers.get("Purpose") || request.headers.get("X-Purpose") || request.headers.get("Sec-Purpose") || request.headers.get("Sec-Fetch-Purpose") || request.headers.get("Moz-Purpose")) === "prefetch";
  return isGet && isPrefetch && !response.headers.has("Cache-Control") && response.headers.set("Cache-Control", "private, max-age=10"), response;
};
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_node2 = require("@remix-run/node"), import_react3 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-5KBUQFEP.css";

// app/components/Headerr.tsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Headerr_default = () => {
  let { user } = (0, import_react2.useLoaderData)(), links2 = [
    { label: "Developers", to: "/profiles", isActionRoute: !1 },
    { label: "Posts", to: "/posts", isActionRoute: !1 },
    !user && { label: "Register", to: "/register", isActionRoute: !1 },
    !user && { label: "Login", to: "/login", isActionRoute: !1 },
    user && { label: "Dashboard", to: "/dashboard", isActionRoute: !1 },
    user && { label: "Logout", to: "/logout", isActionRoute: !0 }
  ], linkClassName = "no-underline cursor-pointer inline-block leading-5 px-4 py-2 border border-white rounded sm:inline-block sm:mt-0 text-teal-200 mr-5 text-slate-50 hover:border-transparent hover:text-blue-800 hover:bg-white", renderLink = (label, to, isActionRoute = !1) => isActionRoute ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "inline-block",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
      action: to,
      method: "post",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
        type: "submit",
        className: linkClassName,
        children: label
      }, void 0, !1, {
        fileName: "app/components/Headerr.tsx",
        lineNumber: 22,
        columnNumber: 19
      }, this)
    }, void 0, !1, {
      fileName: "app/components/Headerr.tsx",
      lineNumber: 21,
      columnNumber: 16
    }, this)
  }, to, !1, {
    fileName: "app/components/Headerr.tsx",
    lineNumber: 20,
    columnNumber: 13
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
    to,
    className: linkClassName,
    children: label
  }, to, !1, {
    fileName: "app/components/Headerr.tsx",
    lineNumber: 28,
    columnNumber: 13
  }, this), displayLinks = links2.filter((linkConfig) => linkConfig).map(({ label, to, isActionRoute }) => renderLink(label, to, isActionRoute));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "pb-20",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "bg-gray-800 flex justify-center fixed w-full z-50",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
        className: "flex items-center justify-between px-6 py-3 max-w-screen-2xl w-screen",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
            to: "/",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex items-center flex-shrink-0 text-white mr-6 pl-1.5 hover:cursor-pointer",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "font-bold text-2xl",
                children: "</> DevMeet"
              }, void 0, !1, {
                fileName: "app/components/Headerr.tsx",
                lineNumber: 46,
                columnNumber: 22
              }, this)
            }, void 0, !1, {
              fileName: "app/components/Headerr.tsx",
              lineNumber: 45,
              columnNumber: 19
            }, this)
          }, void 0, !1, {
            fileName: "app/components/Headerr.tsx",
            lineNumber: 44,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "w-full block sm:flex sm:items-center sm:w-auto",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "text-sm sm:flex-grow -mr-5",
              children: displayLinks
            }, void 0, !1, {
              fileName: "app/components/Headerr.tsx",
              lineNumber: 51,
              columnNumber: 19
            }, this)
          }, void 0, !1, {
            fileName: "app/components/Headerr.tsx",
            lineNumber: 50,
            columnNumber: 16
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/Headerr.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this)
    }, void 0, !1, {
      fileName: "app/components/Headerr.tsx",
      lineNumber: 42,
      columnNumber: 10
    }, this)
  }, void 0, !1, {
    fileName: "app/components/Headerr.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this);
};

// app/session.server.ts
var import_node = require("@remix-run/node"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/db.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db__ || (global.__db__ = new import_client.PrismaClient()), prisma = global.__db__, prisma.$connect();

// app/models/user.server.ts
var import_bcryptjs = __toESM(require("bcryptjs")), import_gravatar = __toESM(require("gravatar")), import_jsonwebtoken = __toESM(require("jsonwebtoken")), import_tiny_invariant = __toESM(require("tiny-invariant")), JWT_SECRET = process.env.JWT_SECRET;
(0, import_tiny_invariant.default)(JWT_SECRET, "JWT_SECRET must be specified");
var generateToken = (userId) => {
  try {
    return import_jsonwebtoken.default.sign(
      { userId },
      JWT_SECRET,
      { expiresIn: 6e4 }
    );
  } catch (err) {
    console.log(err);
  }
};
async function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}
async function getUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}
async function createUser(name, email, password) {
  let hashedPassword = await import_bcryptjs.default.hash(password, 10), avatar = import_gravatar.default.url(email, {
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
var validateCredentials = async (email, password) => {
  let existingUser = await getUserByEmail(email);
  return !existingUser || !await import_bcryptjs.default.compare(password, existingUser.password) ? null : existingUser.id;
};
var getUserALl = async (userId) => prisma.user.findUnique({
  where: { id: userId },
  include: {
    profile: {
      include: {
        experience: !0,
        education: !0,
        social: !0
      }
    },
    posts: {
      include: {
        comments: !0,
        likes: !0
      }
    },
    likes: !0
  }
});

// app/session.server.ts
var import_jsonwebtoken2 = __toESM(require("jsonwebtoken"));
(0, import_tiny_invariant2.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be specified");
(0, import_tiny_invariant2.default)(process.env.JWT_SECRET, "JWT_SECRET must be specified");
var sessionStorage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    httpOnly: !0,
    sameSite: "lax",
    path: "/",
    secrets: [process.env.SESSION_SECRET],
    secure: !1
  }
});
async function getSession(request) {
  let cookie = request.headers.get("cookie");
  return sessionStorage.getSession(cookie);
}
async function destroySession(request) {
  let session = await getSession(request);
  return sessionStorage.destroySession(session);
}
async function createUserSession(userId, request, redirectTo) {
  let session = await getSession(request), token = generateToken(userId);
  return session.set("token", token), (0, import_node.redirect)(redirectTo, {
    headers: { "Set-Cookie": await sessionStorage.commitSession(session) }
  });
}
async function authenticatedUser(request) {
  let session = await getSession(request);
  if (!session.has("token"))
    return null;
  let token = session.get("token");
  try {
    return import_jsonwebtoken2.default.verify(token, process.env.JWT_SECRET).userId;
  } catch (err) {
    console.log(err);
  }
  return null;
}
async function isAuthenticated(request) {
  return (await getSession(request)).has("token");
}

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links = () => [
  {
    rel: "stylesheet",
    href: app_default
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Raleway"
  }
], meta = () => ({
  charset: "utf-8",
  title: "DevMeet",
  viewport: "width=device-width,initial-scale=1"
}), loader = async ({ request }) => (0, import_node2.json)({ user: await isAuthenticated(request) });
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    className: "h-full bg-gray-100",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 48,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 49,
            columnNumber: 10
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "h-full font-Railway bg-sky-7",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Headerr_default, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 52,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 53,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 54,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
            src: "https://kit.fontawesome.com/b6db36476d.js",
            crossOrigin: "anonymous"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 55,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 56,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 57,
            columnNumber: 5
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 46,
    columnNumber: 7
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "Error"
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: error.message
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: "The stack trace is:"
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", {
        children: error.stack
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 69,
        columnNumber: 10
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 65,
    columnNumber: 7
  }, this);
}

// app/routes/dashboard/__dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => Dashboard,
  loader: () => loader2
});

// app/components/Sidebarr.tsx
var import_outline = require("@heroicons/react/outline"), import_react4 = require("@remix-run/react"), import_react5 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Sidebarr({ user }) {
  let [active, setActive] = (0, import_react5.useState)(!0), navigation = [
    { name: "Dashboard", href: "/dashboard/", icon: import_outline.HomeIcon, current: active },
    { name: "Experience", href: "/dashboard/experiences", icon: import_outline.BriefcaseIcon, current: !active },
    { name: "Education", href: "/dashboard/educations", icon: import_outline.AcademicCapIcon, current: !active }
  ], setCurrent = (item) => {
    let currentItem = navigation.find((navItem) => navItem.name === item.name);
    currentItem.current = !0;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 pt-16",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex-1 flex flex-col pb-4 overflow-y-auto",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
              className: "mt-5 flex-1 px-2 bg-white space-y-1",
              children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Link, {
                prefetch: "intent",
                to: item.href,
                onClick: () => setCurrent(item),
                className: `focus:bg-gray-100 focus:text-gray-900 text-gray-600 hover:bg-gray-50 hover:text-gray-900
                              group flex items-center px-2 py-2 text-sm font-medium rounded-md`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, {
                    className: "focus:text-gray-500 text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6",
                    "aria-hidden": "true"
                  }, void 0, !1, {
                    fileName: "app/components/Sidebarr.tsx",
                    lineNumber: 58,
                    columnNumber: 28
                  }, this),
                  item.name
                ]
              }, item.name, !0, {
                fileName: "app/components/Sidebarr.tsx",
                lineNumber: 46,
                columnNumber: 25
              }, this))
            }, void 0, !1, {
              fileName: "app/components/Sidebarr.tsx",
              lineNumber: 44,
              columnNumber: 19
            }, this)
          }, void 0, !1, {
            fileName: "app/components/Sidebarr.tsx",
            lineNumber: 43,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex-shrink-0 flex border-t border-gray-200 p-4",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Link, {
              prefetch: "intent",
              to: "/dashboard/profile",
              className: "flex-shrink-0 w-full group block",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex items-center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                      className: "inline-block h-9 w-9 rounded-full",
                      src: user.avatar,
                      alt: ""
                    }, void 0, !1, {
                      fileName: "app/components/Sidebarr.tsx",
                      lineNumber: 75,
                      columnNumber: 28
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/Sidebarr.tsx",
                    lineNumber: 74,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "ml-3",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        className: "text-sm font-medium text-gray-700 group-hover:text-gray-900",
                        children: user.name
                      }, void 0, !1, {
                        fileName: "app/components/Sidebarr.tsx",
                        lineNumber: 82,
                        columnNumber: 28
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        className: "text-xs font-medium text-gray-500 group-hover:text-gray-700",
                        children: "View profile"
                      }, void 0, !1, {
                        fileName: "app/components/Sidebarr.tsx",
                        lineNumber: 83,
                        columnNumber: 28
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/Sidebarr.tsx",
                    lineNumber: 81,
                    columnNumber: 25
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/Sidebarr.tsx",
                lineNumber: 73,
                columnNumber: 22
              }, this)
            }, void 0, !1, {
              fileName: "app/components/Sidebarr.tsx",
              lineNumber: 72,
              columnNumber: 19
            }, this)
          }, void 0, !1, {
            fileName: "app/components/Sidebarr.tsx",
            lineNumber: 71,
            columnNumber: 16
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/Sidebarr.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this)
    }, void 0, !1, {
      fileName: "app/components/Sidebarr.tsx",
      lineNumber: 40,
      columnNumber: 10
    }, this)
  }, void 0, !1, {
    fileName: "app/components/Sidebarr.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this);
}

// app/routes/dashboard/__dashboard.tsx
var import_react6 = require("@remix-run/react"), import_node3 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => {
  let userId = await authenticatedUser(request);
  if (!userId)
    return (0, import_node3.redirect)("/");
  let user = await getUserById(userId);
  return (0, import_node3.json)({ user });
};
function Dashboard() {
  let { user } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebarr, {
          user
        }, void 0, !1, {
          fileName: "app/routes/dashboard/__dashboard.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "md:pl-64 flex flex-col flex-1",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
            className: "flex-1",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
              fileName: "app/routes/dashboard/__dashboard.tsx",
              lineNumber: 28,
              columnNumber: 19
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/__dashboard.tsx",
            lineNumber: 27,
            columnNumber: 16
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/dashboard/__dashboard.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/dashboard/__dashboard.tsx",
      lineNumber: 22,
      columnNumber: 10
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/dashboard/__dashboard.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this);
}

// app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx
var experienceId_exports = {};
__export(experienceId_exports, {
  action: () => action,
  default: () => EditExperience,
  loader: () => loader3
});
var import_react7 = require("react"), import_node4 = require("@remix-run/node");

// app/utils/util.server.ts
var validateFields = (formatedFormData, errorMessages, fieldsToValidate) => {
  let errors = {};
  if (!fieldsToValidate)
    for (let field of Object.keys(formatedFormData))
      formatedFormData[field] || (errorMessages ? errors[field] = errorMessages[field] || "This field is required" : errors[field] = "This field is required");
  for (let index in fieldsToValidate) {
    let field = fieldsToValidate[index];
    formatedFormData[field] || (errors[field] = errorMessages[field] || "This field is required");
  }
  return Object.keys(errors).length !== 0 ? errors : null;
};
var formDataToObject = (formData, fieldNames) => {
  let Data = {};
  for (let index in fieldNames) {
    let field = fieldNames[index], fieldData = formData.get(field);
    fieldData === null ? Data[field] = !1 : fieldData == "false" || fieldData == "true" ? Data[field] = JSON.parse(fieldData) : Data[field] = fieldData;
  }
  return Data;
}, processFormData = async (request, fieldNames, errorMessages, fieldsTovalidate, dateFields) => {
  let formData = await request.formData(), formated = formDataToObject(formData, fieldNames);
  if (dateFields)
    for (let field of dateFields) {
      let date = formated[field];
      date ? formated[field] = new Date(date) : formated[field] = null;
    }
   return { errors: validateFields(formated, errorMessages, fieldsTovalidate), data: formated };
}, processEduExp = async (request, fieldNames, fieldsToValidate, errorMessages) => {
   let dateFields = ["from", "to"], { errors, data } = await processFormData(
       request,
       fieldNames,
       errorMessages,
       fieldsToValidate,
       dateFields
   );
   return !data.current && !data.to && (errors || (errors = {}), errors.to = "To date is required"), { errors, data };
}, processEdu = async (request) => {
   let fieldNames = ["school", "degree", "fieldofstudy", "from", "to", "current", "description"],
       fieldsToValidate = ["school", "degree", "from"], errorMessages = {
          school: "School or bootcamp is required",
          degree: "Degree is required",
          from: "From date is required"
       }, { errors, data } = await processEduExp(request, fieldNames, fieldsToValidate, errorMessages);
   return { errors, data };
}, processExp = async (request) => {
   let fieldNames = ["title", "company", "location", "from", "to", "current", "description"],
       fieldsToValidate = ["title", "company", "from"], errorMessages = {
          title: "Job Title is required",
          company: "Company is required",
          from: "From date is required"
       }, { errors, data } = await processEduExp(request, fieldNames, fieldsToValidate, errorMessages);
   return { errors, data };
};

// app/models/profile.server.ts
var createProfile = async (formData, userId) => {
  let errors = {}, errorMessages = {
    status: "Status is required",
    skills: "skills is required"
  }, profileFields = formDataToObject(formData, ["status", "company", "website", "location", "skills", "bio", "githubUsername"]), { status, skills } = profileFields;
  return status === "0" && (errors.status = errorMessages.status), (!skills || skills.length === 0) && (errors.skills = errorMessages.skills), profileFields.skills = skills.split(",").map((skill) => skill.trim()), Object.keys(errors).length > 0 ? { errors } : { user: await prisma.user.update({
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
          githubUsername: profileFields.githubUsername
        }
      }
    }
  }) };
}, getProfile = async (request) => {
  let userId = await authenticatedUser(request);
  if (!userId)
    return null;
  let user = await prisma.user.findUnique({
    where: { id: userId },
    select: { profile: !0 }
  });
  return user == null ? void 0 : user.profile;
}, getProfileWithAllById = (profileId) => prisma.profile.findUnique({
  where: { id: profileId },
  include: {
    user: !0,
    experience: !0,
    education: !0
  }
}), getProfileWIthAll = (userId) => prisma.profile.findUnique({
  where: { userId },
  include: {
    user: !0,
    experience: !0,
    education: !0
  }
}), getProfiles = () => prisma.profile.findMany({
  orderBy: {
    date: "desc"
  },
  select: {
    id: !0,
    company: !0,
    skills: !0,
    location: !0,
    status: !0,
    user: {
      select: {
        id: !0,
        name: !0,
        avatar: !0
      }
    }
  }
});

// app/models/experience.server.ts
var createExperience = async (request, formData) => {
  let profile = await getProfile(request);
  return profile ? prisma.profile.update({
    where: { id: profile.id },
    data: {
      experience: {
        create: {
          title: formData.title,
          company: formData.company,
          location: formData.location,
          from: formData.from,
          to: formData.to,
          current: formData.current,
          description: formData.description
        }
      }
    }
  }) : null;
}, getExperience = async (request) => {
   let profile = await getProfile(request);
   return profile ? (await prisma.profile.findUnique({
      where: { id: profile.id },
      select: { experience: !0 }
   })).experience : null;
}, getExperienceById = async (expId) => await prisma.experience.findUnique({
   where: { id: expId }
}), deleteExperience = (expId) => prisma.experience.delete({
   where: { id: expId }
}), updateExperience = (expId, data) => prisma.experience.update({
   where: { id: expId },
   data
});

// app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx
var import_react8 = require("@remix-run/react"), import_date_fns = require("date-fns");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader3 = async ({ request, params }) => {
   if (!await isAuthenticated(request))
      return (0, import_node4.redirect)("/");
   let expId = params.experienceId;
   if (!expId)
      throw new Error("Experience not found");
   return { experience: await getExperienceById(expId) };
}, action = async ({ request, params }) => {
   let expId = params.experienceId;
   if (!expId)
      return (0, import_node4.redirect)("/dashboard/experiences");
   let { errors, data } = await processExp(request);
   if (console.log(errors, data), errors)
      return (0, import_node4.json)({ errors });
   let experience = await updateExperience(expId.toString(), data);
   return (0, import_node4.redirect)("/dashboard/experiences");
};
function EditExperience() {
  var _a, _b, _c, _d;
  let { experience } = (0, import_react8.useLoaderData)(), actionData = (0, import_react8.useActionData)(), [isCurrentJob, toggleCurrentJob] = (0, import_react7.useState)(experience.current);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "md:flex md:items-center md:justify-between mx-9",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex-1 min-w-0",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "text-3xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate",
            children: "Edit Experience Credential"
          }, void 0, !1, {
             fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
             lineNumber: 45,
             columnNumber: 16
          }, this)
        }, void 0, !1, {
           fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
           lineNumber: 44,
           columnNumber: 13
        }, this)
      }, void 0, !1, {
          fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
          lineNumber: 43,
          columnNumber: 10
       }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "mt-10 sm:mt-5 lg:max-w-3xl",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Form, {
            method: "post",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "shadow overflow-hidden sm:rounded-md",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "px-4 py-5 bg-white sm:p-6 space-y-5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "text",
                          name: "title",
                          defaultValue: experience.title,
                          placeholder: "* Job Title",
                          className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
                            lineNumber: 56,
                            columnNumber: 28
                         }, this),
                        (_a = actionData == null ? void 0 : actionData.errors) != null && _a.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "py-1 text-red-700 text-sm",
                          children: actionData == null ? void 0 : actionData.errors.title
                        }, void 0, !1, {
                           fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
                           lineNumber: 62,
                           columnNumber: 31
                        }, this) : null
                      ]
                    }, void 0, !0, {
                        fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
                        lineNumber: 55,
                        columnNumber: 25
                     }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "text",
                          name: "company",
                          defaultValue: experience.company,
                          placeholder: "* Company",
                          className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
                            lineNumber: 67,
                            columnNumber: 28
                         }, this),
                        (_b = actionData == null ? void 0 : actionData.errors) != null && _b.company ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "py-1 text-red-700 text-sm",
                          children: actionData == null ? void 0 : actionData.errors.company
                        }, void 0, !1, {
                           fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
                           lineNumber: 73,
                           columnNumber: 31
                        }, this) : null
                      ]
                    }, void 0, !0, {
                        fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
                        lineNumber: 66,
                        columnNumber: 25
                     }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                        type: "text",
                        name: "location",
                        defaultValue: experience.location,
                        placeholder: "Location",
                        className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      }, void 0, !1, {
                         fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
                         lineNumber: 78,
                         columnNumber: 28
                      }, this)
                    }, void 0, !1, {
                        fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
                        lineNumber: 77,
                        columnNumber: 25
                     }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "date",
                          name: "from",
                          defaultValue: (0, import_date_fns.format)(new Date(experience.from), "yyyy-MM-dd"),
                          className: "appearance-none block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
                            lineNumber: 86,
                            columnNumber: 28
                         }, this),
                        (_c = actionData == null ? void 0 : actionData.errors) != null && _c.from ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "py-1 text-red-700 text-sm",
                          children: actionData == null ? void 0 : actionData.errors.from
                        }, void 0, !1, {
                           fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
                           lineNumber: 91,
                           columnNumber: 31
                        }, this) : null
                      ]
                    }, void 0, !0, {
                        fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
                        lineNumber: 85,
                        columnNumber: 25
                     }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex items-center",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          name: "current",
                          type: "checkbox",
                          value: isCurrentJob,
                          checked: isCurrentJob,
                          onChange: () => toggleCurrentJob(!isCurrentJob),
                          className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
                            lineNumber: 97,
                            columnNumber: 28
                         }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                          htmlFor: "push-everything",
                          className: "ml-2 block text-sm font-medium text-gray-700",
                          children: "Current Job"
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
                            lineNumber: 101,
                            columnNumber: 28
                         }, this)
                      ]
                    }, void 0, !0, {
                        fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
                        lineNumber: 95,
                        columnNumber: 25
                     }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "date",
                          name: "to",
                          value: experience.to && (0, import_date_fns.format)(new Date(experience.to), "yyyy-MM-dd"),
                          disabled: isCurrentJob,
                          className: "appearance-none block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
                            lineNumber: 105,
                            columnNumber: 28
                         }, this),
                        (_d = actionData == null ? void 0 : actionData.errors) != null && _d.to ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "py-1 text-red-700 text-sm",
                          children: actionData == null ? void 0 : actionData.errors.to
                        }, void 0, !1, {
                           fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
                           lineNumber: 111,
                           columnNumber: 31
                        }, this) : null
                      ]
                    }, void 0, !0, {
                        fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
                        lineNumber: 104,
                        columnNumber: 25
                     }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                        name: "description",
                        rows: 3,
                        defaultValue: experience.description,
                        className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                        placeholder: "Job Description"
                      }, void 0, !1, {
                         fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
                         lineNumber: 116,
                         columnNumber: 31
                      }, this)
                    }, void 0, !1, {
                        fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
                        lineNumber: 115,
                        columnNumber: 25
                     }, this)
                  ]
                }, void 0, !0, {
                    fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
                    lineNumber: 54,
                    columnNumber: 22
                 }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "px-4 py-3 bg-gray-50 text-right sm:px-6",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    type: "submit",
                    className: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                    children: "Save Experience"
                  }, void 0, !1, {
                     fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
                     lineNumber: 125,
                     columnNumber: 25
                  }, this)
                }, void 0, !1, {
                    fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
                    lineNumber: 124,
                    columnNumber: 22
                 }, this)
              ]
            }, void 0, !0, {
               fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
               lineNumber: 53,
               columnNumber: 19
            }, this)
          }, void 0, !1, {
             fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
             lineNumber: 52,
             columnNumber: 16
          }, this)
        }, void 0, !1, {
           fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
           lineNumber: 51,
           columnNumber: 13
        }, this)
      }, void 0, !1, {
          fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
          lineNumber: 50,
          columnNumber: 10
       }, this)
    ]
  }, void 0, !0, {
     fileName: "app/routes/dashboard/__dashboard/experience/edit/$experienceId.tsx",
     lineNumber: 42,
     columnNumber: 7
  }, this);
}

// app/routes/dashboard/__dashboard/education/edit/$educationId.tsx
var educationId_exports = {};
__export(educationId_exports, {
  default: () => Experience,
  loader: () => loader4
});
var import_react9 = require("react"), import_react10 = require("@remix-run/react"), import_node5 = require("@remix-run/node");

// app/models/education.server.ts
var createEducation = async (request, formData) => {
  let profile = await getProfile(request);
  return profile ? prisma.profile.update({
    where: { id: profile.id },
    data: {
      education: {
        create: {
          school: formData.school,
          degree: formData.degree,
          fieldofstudy: formData.fieldofstudy,
          from: formData.from,
          to: formData.to,
          current: formData.current,
          description: formData.description
        }
      }
    }
  }) : null;
}, getEducation = async (request) => {
  let profile = await getProfile(request);
  return profile ? (await prisma.profile.findUnique({
    where: { id: profile.id },
    select: { education: !0 }
  })).education : null;
}, getEducationById = async (eduId) => await prisma.education.findUnique({
  where: { id: eduId }
}), deleteEducation = async (eduId) => {
  let data = await prisma.education.delete({
    where: { id: eduId }
  });
};

// app/routes/dashboard/__dashboard/education/edit/$educationId.tsx
var import_date_fns2 = require("date-fns"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader4 = async ({ request, params }) => {
  if (!await isAuthenticated(request))
    return (0, import_node5.redirect)("/");
  let eduId = params.educationId;
  if (!eduId)
    throw new Error("Experience not found");
  return { education: await getEducationById(eduId) };
};
function Experience() {
  var _a, _b, _c, _d;
  let { education } = (0, import_react10.useLoaderData)(), actionData = (0, import_react10.useActionData)(), [isCurrentJob, toggleCurrentJob] = (0, import_react9.useState)(education.current);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "md:flex md:items-center md:justify-between mx-9",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex-1 min-w-0",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "text-3xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate",
            children: "Edit Education"
          }, void 0, !1, {
            fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
            lineNumber: 34,
            columnNumber: 16
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
        lineNumber: 32,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "mt-10 sm:mt-5 lg:max-w-3xl",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Form, {
            method: "post",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "shadow overflow-hidden sm:rounded-md",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "px-4 py-5 bg-white sm:p-6 space-y-5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "text",
                          name: "school",
                          defaultValue: education.school,
                          placeholder: "* School or Bootcamp",
                          className: "font-bold font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
                          lineNumber: 43,
                          columnNumber: 28
                        }, this),
                        (_a = actionData == null ? void 0 : actionData.errors) != null && _a.school ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "py-1 text-red-700 text-sm",
                          children: actionData == null ? void 0 : actionData.errors.school
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
                          lineNumber: 49,
                          columnNumber: 31
                        }, this) : null
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
                      lineNumber: 42,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "text",
                          name: "degree",
                          defaultValue: education.degree,
                          placeholder: "* Degree or Certificate",
                          className: "font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
                          lineNumber: 54,
                          columnNumber: 28
                        }, this),
                        (_b = actionData == null ? void 0 : actionData.errors) != null && _b.degree ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "py-1 text-red-700 text-sm",
                          children: actionData == null ? void 0 : actionData.errors.degree
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
                          lineNumber: 60,
                          columnNumber: 31
                        }, this) : null
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
                      lineNumber: 53,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                        type: "text",
                        name: "fieldofstudy",
                        defaultValue: education.fieldofstudy,
                        placeholder: "Field Of Study",
                        className: "font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      }, void 0, !1, {
                        fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
                        lineNumber: 65,
                        columnNumber: 28
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
                      lineNumber: 64,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "date",
                          name: "from",
                          defaultValue: (0, import_date_fns2.format)(new Date(education.from), "yyyy-MM-dd"),
                          className: "font-bold appearance-none block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
                          lineNumber: 72,
                          columnNumber: 28
                        }, this),
                        (_c = actionData == null ? void 0 : actionData.errors) != null && _c.from ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "py-1 text-red-700 text-sm",
                          children: actionData == null ? void 0 : actionData.errors.from
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
                          lineNumber: 77,
                          columnNumber: 31
                        }, this) : null
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
                      lineNumber: 71,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex items-center",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          name: "current",
                          type: "checkbox",
                          value: isCurrentJob,
                          checked: isCurrentJob,
                          onChange: () => toggleCurrentJob(!isCurrentJob),
                          className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
                          lineNumber: 83,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                          htmlFor: "push-everything",
                          className: "ml-2 block text-sm font-medium text-gray-700",
                          children: "Current School or Bootcamp"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
                          lineNumber: 87,
                          columnNumber: 28
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
                      lineNumber: 81,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "date",
                          name: "to",
                          value: education.to && !isCurrentJob ? (0, import_date_fns2.format)(new Date(education.to), "yyyy-MM-dd") : null,
                          disabled: isCurrentJob,
                          className: "font-bold appearance-none block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
                          lineNumber: 95,
                          columnNumber: 28
                        }, this),
                        (_d = actionData == null ? void 0 : actionData.errors) != null && _d.to ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "py-1 text-red-700 text-sm",
                          children: actionData == null ? void 0 : actionData.errors.to
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
                          lineNumber: 103,
                          columnNumber: 31
                        }, this) : null
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
                      lineNumber: 93,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                        name: "description",
                        rows: 3,
                        defaultValue: education.description,
                        className: "font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                        placeholder: "Program Description"
                      }, void 0, !1, {
                        fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
                        lineNumber: 108,
                        columnNumber: 28
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
                      lineNumber: 107,
                      columnNumber: 25
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
                  lineNumber: 41,
                  columnNumber: 22
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "px-4 py-3 bg-gray-50 text-right sm:px-6",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    type: "submit",
                    className: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                    children: "Save Education"
                  }, void 0, !1, {
                    fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
                    lineNumber: 117,
                    columnNumber: 25
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
                  lineNumber: 116,
                  columnNumber: 22
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
              lineNumber: 40,
              columnNumber: 19
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
            lineNumber: 39,
            columnNumber: 16
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
        lineNumber: 37,
        columnNumber: 10
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/dashboard/__dashboard/education/edit/$educationId.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this);
}

// app/routes/dashboard/__dashboard/experience/delete.tsx
var delete_exports = {};
__export(delete_exports, {
  action: () => action2,
  loader: () => loader5
});
var import_node6 = require("@remix-run/node");
var loader5 = () => (0, import_node6.redirect)("/dashboard/experiences"), action2 = async ({ request }) => {
  let expId = (await request.formData()).get("expId");
  return expId ? (await deleteExperience(expId.toString()), (0, import_node6.redirect)("/dashboard/experiences")) : (0, import_node6.redirect)("/dashboard/experiences");
};

// app/routes/dashboard/__dashboard/education/delete.tsx
var delete_exports2 = {};
__export(delete_exports2, {
  action: () => action3,
  loader: () => loader6
});
var import_node7 = require("@remix-run/node");
var loader6 = () => (0, import_node7.redirect)("/dashboard/educations"), action3 = async ({ request }) => {
  let eduId = (await request.formData()).get("eduId");
  return eduId ? (await deleteEducation(eduId.toString()), (0, import_node7.redirect)("/dashboard/educations")) : (0, import_node7.redirect)("/dashboard/educations");
};

// app/routes/dashboard/__dashboard/create-profile.tsx
var create_profile_exports = {};
__export(create_profile_exports, {
  action: () => action4,
  default: () => CreateProfile
});
var import_react11 = require("@remix-run/react");
var import_node8 = require("@remix-run/node");

// app/utils/errors.server.ts
var CustomError = class extends Error {
  constructor(message, statusCode) {
    super();
    this.message = message;
    this.statusCode = statusCode;
    this.message = message, this.statusCode = statusCode, Object.setPrototypeOf(this, Error.prototype);
  }
};

// app/routes/dashboard/__dashboard/create-profile.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), action4 = async ({ request }) => {
  let formData = await request.formData(), userId = await authenticatedUser(request);
  if (!userId)
    throw new CustomError("Not Authorized!", 401);
  let { errors } = await createProfile(formData, userId);
  return errors ? (0, import_node8.json)({ errors }) : (0, import_node8.redirect)("/dashboard");
};
function CreateProfile() {
  let actionData = (0, import_react11.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "md:flex md:items-center md:justify-between mx-9",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex-1 min-w-0",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "text-3xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate",
            children: "Create Your Profile"
          }, void 0, !1, {
            fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
            lineNumber: 30,
            columnNumber: 16
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
        lineNumber: 28,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "mt-10 sm:mt-5 lg:max-w-3xl",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Form, {
            method: "post",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "shadow overflow-hidden sm:rounded-md",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "px-4 py-5 bg-white sm:p-6 space-y-5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-3",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
                          id: "status",
                          name: "status",
                          autoComplete: "status",
                          className: "mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                              value: "0",
                              children: "* Select Professional Status"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                              lineNumber: 42,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                              value: "Developer",
                              children: "Developer"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                              lineNumber: 43,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                              value: "Junior Developer",
                              children: "Junior Developer"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                              lineNumber: 44,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                              value: "Senior Developer",
                              children: "Senior Developer"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                              lineNumber: 45,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                              value: "Manager",
                              children: "Manager"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                              lineNumber: 46,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                              value: "Student",
                              children: "Student or Learning"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                              lineNumber: 47,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                              value: "Instructor",
                              children: "Instructor or Teacher"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                              lineNumber: 48,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                              value: "Intern",
                              children: "Intern"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                              lineNumber: 49,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                              value: "Other",
                              children: "Other"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                              lineNumber: 50,
                              columnNumber: 31
                            }, this)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                          lineNumber: 40,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", {
                          className: "text-gray-600 ml-2",
                          children: "Give us an idea of where you are at in your career"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                          lineNumber: 52,
                          columnNumber: 28
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                      lineNumber: 39,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "text",
                          name: "company",
                          placeholder: "Company",
                          className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                          lineNumber: 57,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", {
                          className: "text-gray-600 ml-2",
                          children: "Could be your own company or one you work for"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                          lineNumber: 61,
                          columnNumber: 28
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                      lineNumber: 56,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "text",
                          name: "website",
                          placeholder: "Website",
                          className: "font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                          lineNumber: 67,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", {
                          className: "text-gray-600 ml-2",
                          children: "Could be your own or a company website"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                          lineNumber: 71,
                          columnNumber: 28
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                      lineNumber: 66,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "text",
                          name: "location",
                          placeholder: "Location",
                          className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                          lineNumber: 75,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", {
                          className: "text-gray-600 ml-2",
                          children: "City & state suggested (eg. Boston, MA)"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                          lineNumber: 79,
                          columnNumber: 28
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                      lineNumber: 74,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "text",
                          name: "skills",
                          placeholder: "* Skills",
                          className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                          lineNumber: 84,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          className: "mt-2 text-sm text-red-600",
                          id: "email-error",
                          children: "Please add at least one skill"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                          lineNumber: 88,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", {
                          className: "text-gray-600 ml-2",
                          children: "Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                          lineNumber: 91,
                          columnNumber: 28
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                      lineNumber: 83,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "text",
                          name: "githubUsername",
                          placeholder: "Github username",
                          className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                          lineNumber: 97,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", {
                          className: "text-gray-600 ml-2",
                          children: "If you want your latest repos and a Github link, include your username"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                          lineNumber: 101,
                          columnNumber: 28
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                      lineNumber: 96,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                          name: "bio",
                          rows: 3,
                          className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                          placeholder: "A short bio of yourself"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                          lineNumber: 107,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", {
                          className: "text-gray-600 ml-2",
                          children: "Tell us a little about yourself"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                          lineNumber: 111,
                          columnNumber: 28
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                      lineNumber: 106,
                      columnNumber: 25
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                  lineNumber: 38,
                  columnNumber: 22
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "px-4 py-3 bg-gray-50 text-right sm:px-6",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    type: "submit",
                    className: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                    children: "Create Profile"
                  }, void 0, !1, {
                    fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                    lineNumber: 117,
                    columnNumber: 25
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
                  lineNumber: 116,
                  columnNumber: 22
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
              lineNumber: 37,
              columnNumber: 19
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
            lineNumber: 36,
            columnNumber: 16
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
        lineNumber: 34,
        columnNumber: 10
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/dashboard/__dashboard/create-profile.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this);
}

// app/routes/dashboard/__dashboard/experience/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action5,
  default: () => Experience2
});
var import_react12 = require("react"), import_node9 = require("@remix-run/node"), import_react13 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), action5 = async ({ request }) => {
   let { errors, data } = await processEdu(request);
  if (errors)
     return { errors };
  let experience = await createExperience(request, data);
  return (0, import_node9.redirect)("/dashboard/experiences");
};
function Experience2() {
  var _a, _b, _c, _d;
  let actionData = (0, import_react13.useActionData)(), [isCurrentJob, toggleCurrentJob] = (0, import_react12.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "md:flex md:items-center md:justify-between mx-9",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex-1 min-w-0",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "text-3xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate",
            children: "Add an Experience"
          }, void 0, !1, {
             fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
             lineNumber: 26,
             columnNumber: 16
          }, this)
        }, void 0, !1, {
           fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
           lineNumber: 25,
           columnNumber: 13
        }, this)
      }, void 0, !1, {
          fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
          lineNumber: 24,
          columnNumber: 10
       }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "mt-10 sm:mt-5 lg:max-w-3xl",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Form, {
            method: "post",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "shadow overflow-hidden sm:rounded-md",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "px-4 py-5 bg-white sm:p-6 space-y-5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "text",
                          name: "title",
                          placeholder: "* Job Title",
                          className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
                            lineNumber: 35,
                            columnNumber: 28
                         }, this),
                        (_a = actionData == null ? void 0 : actionData.errors) != null && _a.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "py-1 text-red-700 text-sm",
                          children: actionData == null ? void 0 : actionData.errors.title
                        }, void 0, !1, {
                           fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
                           lineNumber: 40,
                           columnNumber: 31
                        }, this) : null
                      ]
                    }, void 0, !0, {
                        fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
                        lineNumber: 34,
                        columnNumber: 25
                     }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "text",
                          name: "company",
                          placeholder: "* Company",
                          className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
                            lineNumber: 45,
                            columnNumber: 28
                         }, this),
                        (_b = actionData == null ? void 0 : actionData.errors) != null && _b.company ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "py-1 text-red-700 text-sm",
                          children: actionData == null ? void 0 : actionData.errors.company
                        }, void 0, !1, {
                           fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
                           lineNumber: 50,
                           columnNumber: 31
                        }, this) : null
                      ]
                    }, void 0, !0, {
                        fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
                        lineNumber: 44,
                        columnNumber: 25
                     }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                        type: "text",
                        name: "location",
                        placeholder: "Location",
                        className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      }, void 0, !1, {
                         fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
                         lineNumber: 55,
                         columnNumber: 28
                      }, this)
                    }, void 0, !1, {
                        fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
                        lineNumber: 54,
                        columnNumber: 25
                     }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "date",
                          name: "from",
                          className: "appearance-none block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
                            lineNumber: 62,
                            columnNumber: 28
                         }, this),
                        (_c = actionData == null ? void 0 : actionData.errors) != null && _c.from ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "py-1 text-red-700 text-sm",
                          children: actionData == null ? void 0 : actionData.errors.from
                        }, void 0, !1, {
                           fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
                           lineNumber: 66,
                           columnNumber: 31
                        }, this) : null
                      ]
                    }, void 0, !0, {
                        fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
                        lineNumber: 61,
                        columnNumber: 25
                     }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex items-center",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          name: "current",
                          type: "checkbox",
                          value: isCurrentJob,
                          onChange: () => toggleCurrentJob(!isCurrentJob),
                          className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
                            lineNumber: 72,
                            columnNumber: 28
                         }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                          htmlFor: "push-everything",
                          className: "ml-2 block text-sm font-medium text-gray-700",
                          children: "Current Job"
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
                            lineNumber: 76,
                            columnNumber: 28
                         }, this)
                      ]
                    }, void 0, !0, {
                        fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
                        lineNumber: 70,
                        columnNumber: 25
                     }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "date",
                          name: "to",
                          disabled: isCurrentJob,
                          className: "appearance-none block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
                            lineNumber: 80,
                            columnNumber: 28
                         }, this),
                        (_d = actionData == null ? void 0 : actionData.errors) != null && _d.to ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "py-1 text-red-700 text-sm",
                          children: actionData == null ? void 0 : actionData.errors.to
                        }, void 0, !1, {
                           fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
                           lineNumber: 85,
                           columnNumber: 31
                        }, this) : null
                      ]
                    }, void 0, !0, {
                        fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
                        lineNumber: 79,
                        columnNumber: 25
                     }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                        name: "description",
                        rows: 3,
                        className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                        placeholder: "Job Description"
                      }, void 0, !1, {
                         fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
                         lineNumber: 90,
                         columnNumber: 31
                      }, this)
                    }, void 0, !1, {
                        fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
                        lineNumber: 89,
                        columnNumber: 25
                     }, this)
                  ]
                }, void 0, !0, {
                    fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
                    lineNumber: 33,
                    columnNumber: 22
                 }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "px-4 py-3 bg-gray-50 text-right sm:px-6",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    type: "submit",
                    className: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                    children: "Save Experience"
                  }, void 0, !1, {
                     fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
                     lineNumber: 98,
                     columnNumber: 25
                  }, this)
                }, void 0, !1, {
                    fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
                    lineNumber: 97,
                    columnNumber: 22
                 }, this)
              ]
            }, void 0, !0, {
               fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
               lineNumber: 32,
               columnNumber: 19
            }, this)
          }, void 0, !1, {
             fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
             lineNumber: 31,
             columnNumber: 16
          }, this)
        }, void 0, !1, {
           fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
           lineNumber: 30,
           columnNumber: 13
        }, this)
      }, void 0, !1, {
          fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
          lineNumber: 29,
          columnNumber: 10
       }, this)
    ]
  }, void 0, !0, {
     fileName: "app/routes/dashboard/__dashboard/experience/new.tsx",
     lineNumber: 23,
     columnNumber: 7
  }, this);
}

// app/routes/dashboard/__dashboard/education/new.tsx
var new_exports2 = {};
__export(new_exports2, {
  action: () => action6,
  default: () => Experience3
});
var import_react14 = require("react"), import_react15 = require("@remix-run/react"), import_node10 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), action6 = async ({ request }) => {
   let { errors, data } = await processExp(request);
  if (errors)
    return (0, import_node10.json)({ errors });
  let education = await createEducation(request, data);
  return (0, import_node10.redirect)("/dashboard/educations");
};
function Experience3() {
  var _a, _b, _c, _d;
  let actionData = (0, import_react15.useActionData)(), [isCurrentJob, toggleCurrentJob] = (0, import_react14.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "md:flex md:items-center md:justify-between mx-9",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex-1 min-w-0",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "text-3xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate",
            children: "Add Education"
          }, void 0, !1, {
             fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
             lineNumber: 28,
             columnNumber: 16
          }, this)
        }, void 0, !1, {
           fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
           lineNumber: 27,
           columnNumber: 13
        }, this)
      }, void 0, !1, {
          fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
          lineNumber: 26,
          columnNumber: 10
       }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "mt-10 sm:mt-5 lg:max-w-3xl",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react15.Form, {
            method: "post",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "shadow overflow-hidden sm:rounded-md",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "px-4 py-5 bg-white sm:p-6 space-y-5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "text",
                          name: "school",
                          placeholder: "* School or Bootcamp",
                          className: "font-bold font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
                            lineNumber: 37,
                            columnNumber: 28
                         }, this),
                        (_a = actionData == null ? void 0 : actionData.errors) != null && _a.school ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "py-1 text-red-700 text-sm",
                          children: actionData == null ? void 0 : actionData.errors.school
                        }, void 0, !1, {
                           fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
                           lineNumber: 42,
                           columnNumber: 31
                        }, this) : null
                      ]
                    }, void 0, !0, {
                        fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
                        lineNumber: 36,
                        columnNumber: 25
                     }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "text",
                          name: "degree",
                          placeholder: "* Degree or Certificate",
                          className: "font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
                            lineNumber: 47,
                            columnNumber: 28
                         }, this),
                        (_b = actionData == null ? void 0 : actionData.errors) != null && _b.degree ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "py-1 text-red-700 text-sm",
                          children: actionData == null ? void 0 : actionData.errors.degree
                        }, void 0, !1, {
                           fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
                           lineNumber: 52,
                           columnNumber: 31
                        }, this) : null
                      ]
                    }, void 0, !0, {
                        fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
                        lineNumber: 46,
                        columnNumber: 25
                     }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                        type: "text",
                        name: "fieldofstudy",
                        placeholder: "Field Of Study",
                        className: "font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      }, void 0, !1, {
                         fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
                         lineNumber: 57,
                         columnNumber: 28
                      }, this)
                    }, void 0, !1, {
                        fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
                        lineNumber: 56,
                        columnNumber: 25
                     }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "date",
                          name: "from",
                          className: "font-bold appearance-none block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
                            lineNumber: 63,
                            columnNumber: 28
                         }, this),
                        (_c = actionData == null ? void 0 : actionData.errors) != null && _c.from ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "py-1 text-red-700 text-sm",
                          children: actionData == null ? void 0 : actionData.errors.from
                        }, void 0, !1, {
                           fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
                           lineNumber: 67,
                           columnNumber: 31
                        }, this) : null
                      ]
                    }, void 0, !0, {
                        fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
                        lineNumber: 62,
                        columnNumber: 25
                     }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex items-center",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          name: "current",
                          type: "checkbox",
                          value: isCurrentJob,
                          onChange: () => toggleCurrentJob(!isCurrentJob),
                          className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
                            lineNumber: 73,
                            columnNumber: 28
                         }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                          htmlFor: "push-everything",
                          className: "ml-2 block text-sm font-medium text-gray-700",
                          children: "Current School or Bootcamp"
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
                            lineNumber: 76,
                            columnNumber: 28
                         }, this)
                      ]
                    }, void 0, !0, {
                        fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
                        lineNumber: 71,
                        columnNumber: 25
                     }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "date",
                          name: "to",
                          disabled: isCurrentJob,
                          className: "font-bold appearance-none block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
                            lineNumber: 83,
                            columnNumber: 28
                         }, this),
                        (_d = actionData == null ? void 0 : actionData.errors) != null && _d.to ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "py-1 text-red-700 text-sm",
                          children: actionData == null ? void 0 : actionData.errors.to
                        }, void 0, !1, {
                           fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
                           lineNumber: 88,
                           columnNumber: 31
                        }, this) : null
                      ]
                    }, void 0, !0, {
                        fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
                        lineNumber: 82,
                        columnNumber: 25
                     }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                        name: "description",
                        rows: 3,
                        className: "font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                        placeholder: "Program Description"
                      }, void 0, !1, {
                         fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
                         lineNumber: 93,
                         columnNumber: 28
                      }, this)
                    }, void 0, !1, {
                        fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
                        lineNumber: 92,
                        columnNumber: 25
                     }, this)
                  ]
                }, void 0, !0, {
                    fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
                    lineNumber: 35,
                    columnNumber: 22
                 }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "px-4 py-3 bg-gray-50 text-right sm:px-6",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    type: "submit",
                    className: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                    children: "Add Education"
                  }, void 0, !1, {
                     fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
                     lineNumber: 101,
                     columnNumber: 25
                  }, this)
                }, void 0, !1, {
                    fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
                    lineNumber: 100,
                    columnNumber: 22
                 }, this)
              ]
            }, void 0, !0, {
               fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
               lineNumber: 34,
               columnNumber: 19
            }, this)
          }, void 0, !1, {
             fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
             lineNumber: 33,
             columnNumber: 16
          }, this)
        }, void 0, !1, {
           fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
           lineNumber: 32,
           columnNumber: 13
        }, this)
      }, void 0, !1, {
          fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
          lineNumber: 31,
          columnNumber: 10
       }, this)
    ]
  }, void 0, !0, {
     fileName: "app/routes/dashboard/__dashboard/education/new.tsx",
     lineNumber: 25,
     columnNumber: 7
  }, this);
}

// app/routes/dashboard/__dashboard/edit-profile.tsx
var edit_profile_exports = {};
__export(edit_profile_exports, {
  default: () => Experience4,
  loader: () => loader7
});
var import_react16 = require("@remix-run/react");
var import_node11 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader7 = async ({ request }) => await isAuthenticated(request) ? (0, import_node11.json)({ profile: await getProfile(request) }) : (0, import_node11.redirect)("/");
function Experience4() {
  let { profile } = (0, import_react16.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "md:flex md:items-center md:justify-between mx-9",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex-1 min-w-0",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "text-3xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate",
            children: "Edit Your Profile"
          }, void 0, !1, {
            fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
            lineNumber: 23,
            columnNumber: 16
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
        lineNumber: 21,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "mt-10 sm:mt-5 lg:max-w-3xl",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Form, {
            method: "post",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "shadow overflow-hidden sm:rounded-md",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "px-4 py-5 bg-white sm:p-6 space-y-5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-3",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
                          id: "status",
                          name: "status",
                          autoComplete: "status",
                          defaultValue: profile.status,
                          className: "mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                              value: "0",
                              children: "* Select Professional Status"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                              lineNumber: 36,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                              value: "Developer",
                              children: "Developer"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                              lineNumber: 37,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                              value: "Junior Developer",
                              children: "Junior Developer"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                              lineNumber: 38,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                              value: "Senior Developer",
                              children: "Senior Developer"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                              lineNumber: 39,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                              value: "Manager",
                              children: "Manager"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                              lineNumber: 40,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                              value: "Student",
                              children: "Student or Learning"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                              lineNumber: 41,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                              value: "Instructor",
                              children: "Instructor or Teacher"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                              lineNumber: 42,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                              value: "Intern",
                              children: "Intern"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                              lineNumber: 43,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                              value: "Other",
                              children: "Other"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                              lineNumber: 44,
                              columnNumber: 31
                            }, this)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                          lineNumber: 33,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", {
                          className: "text-gray-600 ml-2",
                          children: "Give us an idea of where you are at in your career"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                          lineNumber: 46,
                          columnNumber: 28
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                      lineNumber: 32,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "text",
                          name: "company",
                          placeholder: "Company",
                          defaultValue: profile.company,
                          className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                          lineNumber: 51,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", {
                          className: "text-gray-600 ml-2",
                          children: "Could be your own company or one you work for"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                          lineNumber: 56,
                          columnNumber: 28
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                      lineNumber: 50,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "text",
                          name: "website",
                          placeholder: "Website",
                          defaultValue: profile.website,
                          className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                          lineNumber: 62,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", {
                          className: "text-gray-600 ml-2",
                          children: "Could be your own or a company website"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                          lineNumber: 67,
                          columnNumber: 28
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                      lineNumber: 61,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "text",
                          name: "location",
                          placeholder: "Location",
                          defaultValue: profile.location,
                          className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                          lineNumber: 71,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", {
                          className: "text-gray-600 ml-2",
                          children: "City & state suggested (eg. Boston, MA)"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                          lineNumber: 76,
                          columnNumber: 28
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                      lineNumber: 70,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "text",
                          name: "skills",
                          placeholder: "* Skills",
                          defaultValue: profile.skills.join(", "),
                          className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                          lineNumber: 81,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          className: "mt-2 text-sm text-red-600",
                          id: "email-error",
                          children: "Please add at least one skill"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                          lineNumber: 86,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", {
                          className: "text-gray-600 ml-2",
                          children: "Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                          lineNumber: 89,
                          columnNumber: 28
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                      lineNumber: 80,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "text",
                          name: "githubUsername",
                          placeholder: "Github username",
                          defaultValue: profile.githubUsername,
                          className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                          lineNumber: 95,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", {
                          className: "text-gray-600 ml-2",
                          children: "If you want your latest repos and a Github link, include your username"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                          lineNumber: 100,
                          columnNumber: 28
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                      lineNumber: 94,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-6 sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                          name: "bio",
                          rows: 3,
                          defaultValue: profile.bio,
                          className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                          placeholder: "A short bio of yourself"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                          lineNumber: 106,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", {
                          className: "text-gray-600 ml-2",
                          children: "Tell us a little about yourself"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                          lineNumber: 111,
                          columnNumber: 28
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                      lineNumber: 105,
                      columnNumber: 25
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                  lineNumber: 31,
                  columnNumber: 22
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "px-4 py-3 bg-gray-50 text-right sm:px-6",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    type: "submit",
                    className: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                    children: "Save Profile"
                  }, void 0, !1, {
                    fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                    lineNumber: 117,
                    columnNumber: 25
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
                  lineNumber: 116,
                  columnNumber: 22
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
              lineNumber: 30,
              columnNumber: 19
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
            lineNumber: 29,
            columnNumber: 16
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
        lineNumber: 27,
        columnNumber: 10
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/dashboard/__dashboard/edit-profile.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this);
}

// app/routes/dashboard/__dashboard/experiences.tsx
var experiences_exports = {};
__export(experiences_exports, {
  default: () => ExperienceList,
  loader: () => loader8
});
var import_react17 = require("@remix-run/react"), import_node12 = require("@remix-run/node"), import_date_fns3 = require("date-fns");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader8 = async ({ request }) => await isAuthenticated(request) ? { experience: await getExperience(request) } : (0, import_node12.redirect)("/");
function ExperienceList() {
  let { experience } = (0, import_react17.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "px-4 sm:px-6 lg:px-8",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "sm:flex sm:items-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "sm:flex-auto",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "text-xl font-semibold text-gray-900",
                children: "Experience"
              }, void 0, !1, {
                fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
                lineNumber: 26,
                columnNumber: 16
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "mt-2 text-sm text-gray-700",
                children: "A list of all your experience credentials including the Company, title and years."
              }, void 0, !1, {
                fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
                lineNumber: 27,
                columnNumber: 16
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
            lineNumber: 25,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mt-4 sm:mt-0 sm:ml-16 sm:flex-none",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.Link, {
              prefetch: "intent",
              to: "/dashboard/experience/new",
              className: "inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto",
              children: "Add Experience"
            }, void 0, !1, {
              fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
              lineNumber: 32,
              columnNumber: 16
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
            lineNumber: 31,
            columnNumber: 13
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
        lineNumber: 24,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mt-8 flex flex-col",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
                className: "min-w-full divide-y divide-gray-300",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
                    className: "bg-gray-50",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                          scope: "col",
                          className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                          children: "Company"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
                          lineNumber: 48,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                          scope: "col",
                          className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                          children: "Job Title"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
                          lineNumber: 52,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                          scope: "col",
                          className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                          children: "Years"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
                          lineNumber: 55,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                          scope: "col",
                          className: "relative py-3.5 pl-3 pr-4 sm:pr-6",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "sr-only",
                            children: "Edit"
                          }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
                            lineNumber: 59,
                            columnNumber: 31
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
                          lineNumber: 58,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                          scope: "col",
                          className: "relative py-3.5 pl-3 pr-4 sm:pr-6",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "sr-only",
                            children: "Delete"
                          }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
                            lineNumber: 62,
                            columnNumber: 31
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
                          lineNumber: 61,
                          columnNumber: 28
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
                      lineNumber: 47,
                      columnNumber: 25
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
                    lineNumber: 46,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
                    className: "bg-white",
                    children: experience && experience.map((exp, expIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                      className: expIndex % 2 === 0 ? void 0 : "bg-gray-50",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6",
                          children: exp.company
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
                          lineNumber: 69,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                          children: exp.title
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
                          lineNumber: 73,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                          children: [
                            (0, import_date_fns3.format)(new Date(exp.from), "MM/dd/yyyy"),
                            " - ",
                            " ",
                            exp.to ? (0, import_date_fns3.format)(new Date(exp.to), "MM/dd/yyyy") : "Present"
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
                          lineNumber: 74,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          className: "relative whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.Link, {
                            to: `/dashboard/experience/edit/${exp.id}`,
                            className: "text-indigo-600 hover:text-indigo-900",
                            children: [
                              "Edit",
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                className: "sr-only",
                                children: [
                                  ", ",
                                  exp.title
                                ]
                              }, void 0, !0, {
                                fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
                                lineNumber: 82,
                                columnNumber: 41
                              }, this)
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
                            lineNumber: 80,
                            columnNumber: 34
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
                          lineNumber: 78,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          className: "relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-6",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.Form, {
                            action: "/dashboard/experience/delete",
                            method: "post",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                                type: "hidden",
                                name: "expId",
                                value: exp.id
                              }, void 0, !1, {
                                fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
                                lineNumber: 88,
                                columnNumber: 37
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                                type: "submit",
                                value: "deleteExperience",
                                className: "bg-red-600 text-gray-100 py-2 px-5 rounded-md",
                                children: "Delete"
                              }, void 0, !1, {
                                fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
                                lineNumber: 89,
                                columnNumber: 37
                              }, this)
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
                            lineNumber: 87,
                            columnNumber: 34
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
                          lineNumber: 85,
                          columnNumber: 31
                        }, this)
                      ]
                    }, exp.id, !0, {
                      fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
                      lineNumber: 68,
                      columnNumber: 28
                    }, this))
                  }, void 0, !1, {
                    fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
                    lineNumber: 66,
                    columnNumber: 25
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
                lineNumber: 45,
                columnNumber: 22
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
              lineNumber: 44,
              columnNumber: 19
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
            lineNumber: 43,
            columnNumber: 16
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
        lineNumber: 41,
        columnNumber: 10
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/dashboard/__dashboard/experiences.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this);
}

// app/routes/dashboard/__dashboard/educations.tsx
var educations_exports = {};
__export(educations_exports, {
  default: () => EducationList,
  loader: () => loader9
});
var import_react18 = require("@remix-run/react"), import_node13 = require("@remix-run/node"), import_date_fns4 = require("date-fns");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader9 = async ({ request }) => await isAuthenticated(request) ? { education: await getEducation(request) } : (0, import_node13.redirect)("/");
function EducationList() {
  let { education } = (0, import_react18.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "px-4 sm:px-6 lg:px-8",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "sm:flex sm:items-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "sm:flex-auto",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "text-xl font-semibold text-gray-900",
                children: "Education Credentials"
              }, void 0, !1, {
                  fileName: "app/routes/dashboard/__dashboard/educations.tsx",
                  lineNumber: 25,
                  columnNumber: 16
               }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "mt-2 text-sm text-gray-700",
                children: "A list of your education credentials including their school, degree, and years."
              }, void 0, !1, {
                  fileName: "app/routes/dashboard/__dashboard/educations.tsx",
                  lineNumber: 26,
                  columnNumber: 16
               }, this)
            ]
          }, void 0, !0, {
              fileName: "app/routes/dashboard/__dashboard/educations.tsx",
              lineNumber: 24,
              columnNumber: 13
           }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mt-4 sm:mt-0 sm:ml-16 sm:flex-none",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Link, {
              to: "/dashboard/education/new",
              className: "inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto",
              children: "Add Education"
            }, void 0, !1, {
               fileName: "app/routes/dashboard/__dashboard/educations.tsx",
               lineNumber: 31,
               columnNumber: 16
            }, this)
          }, void 0, !1, {
              fileName: "app/routes/dashboard/__dashboard/educations.tsx",
              lineNumber: 30,
              columnNumber: 13
           }, this)
        ]
      }, void 0, !0, {
          fileName: "app/routes/dashboard/__dashboard/educations.tsx",
          lineNumber: 23,
          columnNumber: 10
       }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mt-8 flex flex-col",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
                className: "min-w-full divide-y divide-gray-300",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
                    className: "bg-gray-50",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                          scope: "col",
                          className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                          children: "School"
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/educations.tsx",
                            lineNumber: 46,
                            columnNumber: 28
                         }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                          scope: "col",
                          className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                          children: "Degree"
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/educations.tsx",
                            lineNumber: 50,
                            columnNumber: 28
                         }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                          scope: "col",
                          className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                          children: "Years"
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/educations.tsx",
                            lineNumber: 53,
                            columnNumber: 28
                         }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                          scope: "col",
                          className: "relative py-3.5 pl-3 pr-4 sm:pr-6",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "sr-only",
                            children: "Edit"
                          }, void 0, !1, {
                             fileName: "app/routes/dashboard/__dashboard/educations.tsx",
                             lineNumber: 57,
                             columnNumber: 31
                          }, this)
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/educations.tsx",
                            lineNumber: 56,
                            columnNumber: 28
                         }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                          scope: "col",
                          className: "relative py-3.5 pl-3 pr-4 sm:pr-6",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "sr-only",
                            children: "Delete"
                          }, void 0, !1, {
                             fileName: "app/routes/dashboard/__dashboard/educations.tsx",
                             lineNumber: 60,
                             columnNumber: 31
                          }, this)
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/educations.tsx",
                            lineNumber: 59,
                            columnNumber: 28
                         }, this)
                      ]
                    }, void 0, !0, {
                       fileName: "app/routes/dashboard/__dashboard/educations.tsx",
                       lineNumber: 45,
                       columnNumber: 25
                    }, this)
                  }, void 0, !1, {
                      fileName: "app/routes/dashboard/__dashboard/educations.tsx",
                      lineNumber: 44,
                      columnNumber: 25
                   }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
                    className: "bg-white",
                    children: education && education.map((edu, eduIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                      className: eduIndex % 2 === 0 ? void 0 : "bg-gray-50",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6",
                          children: edu.school
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/educations.tsx",
                            lineNumber: 67,
                            columnNumber: 31
                         }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                          children: edu.degree
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/educations.tsx",
                            lineNumber: 71,
                            columnNumber: 31
                         }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                          children: [
                            (0, import_date_fns4.format)(new Date(edu.from), "MM/dd/yyyy"),
                            " - ",
                            " ",
                            edu.to ? (0, import_date_fns4.format)(new Date(edu.to), "MM/dd/yyyy") : "Present"
                          ]
                        }, void 0, !0, {
                            fileName: "app/routes/dashboard/__dashboard/educations.tsx",
                            lineNumber: 72,
                            columnNumber: 31
                         }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          className: "relative whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Link, {
                            to: `/dashboard/education/edit/${edu.id}`,
                            className: "text-indigo-600 hover:text-indigo-900",
                            children: [
                              "Edit",
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                className: "sr-only",
                                children: [
                                  ", ",
                                  edu.degree
                                ]
                              }, void 0, !0, {
                                  fileName: "app/routes/dashboard/__dashboard/educations.tsx",
                                  lineNumber: 80,
                                  columnNumber: 41
                               }, this)
                            ]
                          }, void 0, !0, {
                             fileName: "app/routes/dashboard/__dashboard/educations.tsx",
                             lineNumber: 78,
                             columnNumber: 34
                          }, this)
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/educations.tsx",
                            lineNumber: 76,
                            columnNumber: 31
                         }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                          className: "relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-6",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Form, {
                            action: "/dashboard/education/delete",
                            method: "post",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                                type: "hidden",
                                name: "eduId",
                                value: edu.id
                              }, void 0, !1, {
                                  fileName: "app/routes/dashboard/__dashboard/educations.tsx",
                                  lineNumber: 86,
                                  columnNumber: 37
                               }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                                type: "submit",
                                value: "deleteEducation",
                                className: "bg-red-600 text-gray-100 py-2 px-5 rounded-md",
                                children: "Delete"
                              }, void 0, !1, {
                                  fileName: "app/routes/dashboard/__dashboard/educations.tsx",
                                  lineNumber: 87,
                                  columnNumber: 37
                               }, this)
                            ]
                          }, void 0, !0, {
                             fileName: "app/routes/dashboard/__dashboard/educations.tsx",
                             lineNumber: 85,
                             columnNumber: 34
                          }, this)
                        }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/educations.tsx",
                            lineNumber: 83,
                            columnNumber: 31
                         }, this)
                      ]
                    }, edu.degree, !0, {
                       fileName: "app/routes/dashboard/__dashboard/educations.tsx",
                       lineNumber: 66,
                       columnNumber: 28
                    }, this))
                  }, void 0, !1, {
                      fileName: "app/routes/dashboard/__dashboard/educations.tsx",
                      lineNumber: 64,
                      columnNumber: 25
                   }, this)
                ]
              }, void 0, !0, {
                 fileName: "app/routes/dashboard/__dashboard/educations.tsx",
                 lineNumber: 43,
                 columnNumber: 22
              }, this)
            }, void 0, !1, {
               fileName: "app/routes/dashboard/__dashboard/educations.tsx",
               lineNumber: 42,
               columnNumber: 19
            }, this)
          }, void 0, !1, {
             fileName: "app/routes/dashboard/__dashboard/educations.tsx",
             lineNumber: 41,
             columnNumber: 16
          }, this)
        }, void 0, !1, {
           fileName: "app/routes/dashboard/__dashboard/educations.tsx",
           lineNumber: 40,
           columnNumber: 13
        }, this)
      }, void 0, !1, {
          fileName: "app/routes/dashboard/__dashboard/educations.tsx",
          lineNumber: 39,
          columnNumber: 10
       }, this)
    ]
  }, void 0, !0, {
     fileName: "app/routes/dashboard/__dashboard/educations.tsx",
     lineNumber: 22,
     columnNumber: 7
  }, this);
}

// app/routes/dashboard/__dashboard/profile.tsx
var profile_exports = {};
__export(profile_exports, {
  default: () => ProfileShow,
  loader: () => loader10
});
var import_node14 = require("@remix-run/node"), import_react_fontawesome = require("@fortawesome/react-fontawesome"), import_free_brands_svg_icons = require("@fortawesome/free-brands-svg-icons"), import_free_solid_svg_icons = require("@fortawesome/free-solid-svg-icons"), import_react19 = require("@remix-run/react");
var import_date_fns5 = require("date-fns");

// app/models/github.server.ts
var getUserRepos = async (githubUsername) => {
  let response = await fetch(
    `https://api.github.com/users/${githubUsername}
                     /repos?per_page=5&sort=created:asc&client_id=${process.env.GITHUB_CLIENTID}
                     &client_secret=${process.env.GITHUB_SECRET}`
  );
  return response.status !== 200 ? { repos: null } : { repos: await response.json() };
};

// app/routes/dashboard/__dashboard/profile.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader10 = async ({ request }) => {
  let userId = await authenticatedUser(request);
  if (!userId)
    return (0, import_node14.redirect)("/");
  let profile = await getProfileWIthAll(userId);
  if (!profile)
    return (0, import_node14.redirect)("/dashboard/create-profile");
  let { repos } = await getUserRepos(profile.githubUsername);
  return (0, import_node14.json)({ profile, repos });
};
function ProfileShow() {
  let { profile, repos } = (0, import_react19.useLoaderData)(), renderExperience = (exp) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "list-inside space-y-1 mb-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-teal-600 font-semibold",
        children: exp.company
      }, void 0, !1, {
        fileName: "app/routes/dashboard/__dashboard/profile.tsx",
        lineNumber: 30,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-gray-700 font-semibold text-sm",
        children: [
          "Duration: ",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "text-gray-800 font-normal text-sm",
            children: [
              (0, import_date_fns5.format)(new Date(exp.from), "MMMM yyyy"),
              " - ",
              exp.to === null ? "Present" : (0, import_date_fns5.format)(new Date(exp.to), "MMMM yyyy")
            ]
          }, void 0, !0, {
            fileName: "app/routes/dashboard/__dashboard/profile.tsx",
            lineNumber: 33,
            columnNumber: 13
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/dashboard/__dashboard/profile.tsx",
        lineNumber: 31,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-sm font-semibold text-gray-700",
        children: [
          "Position:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "text-sm text-gray-600 font-normal",
            children: [
              "  ",
              exp.title
            ]
          }, void 0, !0, {
            fileName: "app/routes/dashboard/__dashboard/profile.tsx",
            lineNumber: 41,
            columnNumber: 13
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/dashboard/__dashboard/profile.tsx",
        lineNumber: 40,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-sm font-semibold text-gray-700",
        children: [
          "Description:",
          "  ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "font-normal",
            children: exp.description
          }, void 0, !1, {
            fileName: "app/routes/dashboard/__dashboard/profile.tsx",
            lineNumber: 46,
            columnNumber: 13
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/dashboard/__dashboard/profile.tsx",
        lineNumber: 45,
        columnNumber: 10
      }, this)
    ]
  }, exp.id, !0, {
    fileName: "app/routes/dashboard/__dashboard/profile.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this), renderEducation = (edu) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "list-inside space-y-1 mb-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-teal-600 font-semibold",
        children: [
          edu.degree,
          " in ",
          edu.fieldofstudy
        ]
      }, void 0, !0, {
        fileName: "app/routes/dashboard/__dashboard/profile.tsx",
        lineNumber: 55,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-sm font-semibold text-gray-700",
        children: edu.school
      }, void 0, !1, {
        fileName: "app/routes/dashboard/__dashboard/profile.tsx",
        lineNumber: 56,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-gray-700 text-sm",
        children: [
          (0, import_date_fns5.format)(new Date(edu.from), "MM/dd/yy"),
          " - ",
          edu.to === null ? "Present" : (0, import_date_fns5.format)(new Date(edu.to), "MM/dd/yy")
        ]
      }, void 0, !0, {
        fileName: "app/routes/dashboard/__dashboard/profile.tsx",
        lineNumber: 57,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-sm font-semibold text-gray-700",
        children: [
          "Description:",
          "  ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "font-normal",
            children: edu.description
          }, void 0, !1, {
            fileName: "app/routes/dashboard/__dashboard/profile.tsx",
            lineNumber: 63,
            columnNumber: 13
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/dashboard/__dashboard/profile.tsx",
        lineNumber: 62,
        columnNumber: 10
      }, this)
    ]
  }, edu.id, !0, {
    fileName: "app/routes/dashboard/__dashboard/profile.tsx",
    lineNumber: 54,
    columnNumber: 7
  }, this);
  return profile ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "bg-gray-100",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "container mx-auto mb-5 px-5",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "md:flex no-wrap md:-mx-2 ",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "w-full md:w-3/12 md:mx-2",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "bg-white p-3 border-t-4 border-green-400",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "image overflow-hidden",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    className: "h-auto w-full mx-auto",
                    src: profile.user.avatar,
                    alt: ""
                  }, void 0, !1, {
                    fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                    lineNumber: 101,
                    columnNumber: 25
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                  lineNumber: 100,
                  columnNumber: 22
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                  className: "text-gray-900 font-bold text-xl leading-8 my-1 text-center",
                  children: profile.user.name
                }, void 0, !1, {
                  fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                  lineNumber: 106,
                  columnNumber: 22
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                  className: "text-gray-600 font-lg text-semibold leading-6 text-center",
                  children: [
                    profile.status,
                    " at ",
                    profile.company
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                  lineNumber: 107,
                  columnNumber: 22
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "text-center mt-2 space-x-3 text-xl",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, {
                      icon: import_free_solid_svg_icons.faGlobe,
                      className: "text-blue-500"
                    }, void 0, !1, {
                      fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                      lineNumber: 111,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, {
                      icon: import_free_brands_svg_icons.faFacebookF,
                      className: "text-blue-700"
                    }, void 0, !1, {
                      fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                      lineNumber: 112,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, {
                      icon: import_free_brands_svg_icons.faYoutube,
                      className: "text-red-700"
                    }, void 0, !1, {
                      fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                      lineNumber: 113,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, {
                      icon: import_free_brands_svg_icons.faTwitter,
                      className: "text-blue-500"
                    }, void 0, !1, {
                      fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                      lineNumber: 114,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, {
                      icon: import_free_brands_svg_icons.faInstagram,
                      className: "text-instagramColor"
                    }, void 0, !1, {
                      fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                      lineNumber: 115,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, {
                      icon: import_free_brands_svg_icons.faLinkedin,
                      className: "text-blue-600"
                    }, void 0, !1, {
                      fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                      lineNumber: 116,
                      columnNumber: 25
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                  lineNumber: 110,
                  columnNumber: 22
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                  className: "bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                      className: "flex items-center py-3 text-blue-700 underline underline-offset-4",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react19.Link, {
                        to: "/dashboard/edit-profile",
                        children: "Edit Profile"
                      }, void 0, !1, {
                        fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                        lineNumber: 123,
                        columnNumber: 28
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                      lineNumber: 122,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                      className: "flex items-center py-3",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          children: "Member since"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                          lineNumber: 126,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          className: "ml-auto",
                          children: (0, import_date_fns5.format)(new Date(profile.user.date), "MMM dd, yyyy")
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                          lineNumber: 127,
                          columnNumber: 28
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                      lineNumber: 125,
                      columnNumber: 25
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                  lineNumber: 120,
                  columnNumber: 22
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/dashboard/__dashboard/profile.tsx",
              lineNumber: 99,
              columnNumber: 19
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/__dashboard/profile.tsx",
            lineNumber: 97,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "w-full md:w-9/12 mx-2 h-64",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "bg-white p-3 shadow-sm rounded-sm",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex items-center space-x-2 font-semibold text-gray-900 leading-8",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "text-green-500",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                          className: "h-5",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                            lineNumber: 144,
                            columnNumber: 33
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                          lineNumber: 142,
                          columnNumber: 29
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                        lineNumber: 141,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "tracking-wide",
                        children: "About"
                      }, void 0, !1, {
                        fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                        lineNumber: 148,
                        columnNumber: 25
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                    lineNumber: 140,
                    columnNumber: 22
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "text-gray-700",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "text-sm px-4 py-2",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "font-semibold",
                          children: "Bio"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                          lineNumber: 152,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          className: "text-sm text-gray-500 hover:text-gray-600 leading-6",
                          children: profile.bio
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                          lineNumber: 153,
                          columnNumber: 28
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                      lineNumber: 151,
                      columnNumber: 25
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                    lineNumber: 150,
                    columnNumber: 22
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                lineNumber: 139,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "my-4"
              }, void 0, !1, {
                fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                lineNumber: 159,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "w-6/12 mr-4  p-3 shadow-sm rounded-sm bg-white",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "text-green-500",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                              className: "h-5",
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor",
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              }, void 0, !1, {
                                fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                                lineNumber: 171,
                                columnNumber: 41
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                              lineNumber: 168,
                              columnNumber: 37
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                            lineNumber: 167,
                            columnNumber: 33
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "tracking-wide",
                            children: "Experience"
                          }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                            lineNumber: 175,
                            columnNumber: 28
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                        lineNumber: 166,
                        columnNumber: 25
                      }, this),
                      profile.experience.length > 0 ? profile.experience.map((exp) => renderExperience(exp)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-700 text-sm",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "font-semibold",
                          children: "No experience added"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                          lineNumber: 182,
                          columnNumber: 31
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                        lineNumber: 181,
                        columnNumber: 28
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                    lineNumber: 165,
                    columnNumber: 22
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "w-6/12 p-3 shadow-sm rounded-sm bg-white",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "text-green-500",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                              className: "h-5",
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                  fill: "#fff",
                                  d: "M12 14l9-5-9-5-9 5 9 5z"
                                }, void 0, !1, {
                                  fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                                  lineNumber: 193,
                                  columnNumber: 41
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                  fill: "#fff",
                                  d: "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                }, void 0, !1, {
                                  fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                                  lineNumber: 194,
                                  columnNumber: 41
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "2",
                                  d: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                }, void 0, !1, {
                                  fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                                  lineNumber: 196,
                                  columnNumber: 41
                                }, this)
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                              lineNumber: 190,
                              columnNumber: 37
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                            lineNumber: 189,
                            columnNumber: 33
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "tracking-wide",
                            children: "Education"
                          }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                            lineNumber: 200,
                            columnNumber: 28
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                        lineNumber: 188,
                        columnNumber: 25
                      }, this),
                      profile.education.length > 0 ? profile.education.map((edu) => renderEducation(edu)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-700 text-sm",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "font-semibold",
                          children: "No education added"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                          lineNumber: 207,
                          columnNumber: 31
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                        lineNumber: 206,
                        columnNumber: 28
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                    lineNumber: 187,
                    columnNumber: 22
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                lineNumber: 163,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "bg-white p-3 shadow-sm rounded-sm mt-5",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex items-center space-x-2 font-semibold text-gray-900 leading-8",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "text-green-500",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                          className: "h-5",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                            lineNumber: 220,
                            columnNumber: 33
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                          lineNumber: 218,
                          columnNumber: 29
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                        lineNumber: 217,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "tracking-wide",
                        children: "Github repos"
                      }, void 0, !1, {
                        fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                        lineNumber: 224,
                        columnNumber: 25
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                    lineNumber: 216,
                    columnNumber: 22
                  }, this),
                  repos && repos.length > 0 ? repos.map((repo) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex justify-between border",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex flex-col m-3 ml-4 text-sm",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                            href: repo.html_url,
                            className: "text-blueGreen font-semibold",
                            children: repo.name
                          }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                            lineNumber: 231,
                            columnNumber: 34
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                            className: "mt-4",
                            children: repo.description
                          }, void 0, !1, {
                            fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                            lineNumber: 232,
                            columnNumber: 34
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                        lineNumber: 230,
                        columnNumber: 31
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex flex-col space-y-1 text-xs text-center m-3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "bg-blueGreen text-gray-200 p-1",
                            children: [
                              "Stars: ",
                              repo.stargazers_count
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                            lineNumber: 235,
                            columnNumber: 34
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "bg-darkColor text-gray-200 p-1",
                            children: [
                              "Watchers: ",
                              repo.watchers_count
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                            lineNumber: 236,
                            columnNumber: 34
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "bg-gray-200 p-1",
                            children: [
                              "Forks: ",
                              repo.forks
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                            lineNumber: 237,
                            columnNumber: 34
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                        lineNumber: 234,
                        columnNumber: 31
                      }, this)
                    ]
                  }, repo.id, !0, {
                    fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                    lineNumber: 229,
                    columnNumber: 28
                  }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "text-gray-700 text-sm",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "font-semibold",
                      children: "No Github Profile Found"
                    }, void 0, !1, {
                      fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                      lineNumber: 242,
                      columnNumber: 28
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                    lineNumber: 241,
                    columnNumber: 25
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/dashboard/__dashboard/profile.tsx",
                lineNumber: 215,
                columnNumber: 19
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/dashboard/__dashboard/profile.tsx",
            lineNumber: 136,
            columnNumber: 16
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/dashboard/__dashboard/profile.tsx",
        lineNumber: 95,
        columnNumber: 13
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/dashboard/__dashboard/profile.tsx",
      lineNumber: 94,
      columnNumber: 10
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/dashboard/__dashboard/profile.tsx",
    lineNumber: 93,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "px-4 sm:px-6 lg:px-8 mb-7 lg:w-10/12",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "sm:flex flex-col",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex items-center",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_fontawesome.FontAwesomeIcon, {
              icon: import_free_solid_svg_icons.faUser,
              className: "text-lg"
            }, void 0, !1, {
              fileName: "app/routes/dashboard/__dashboard/profile.tsx",
              lineNumber: 75,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              className: "ml-2 text-xl font-semibold text-gray-900",
              children: "Create Your Profile"
            }, void 0, !1, {
              fileName: "app/routes/dashboard/__dashboard/profile.tsx",
              lineNumber: 76,
              columnNumber: 19
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/dashboard/__dashboard/profile.tsx",
          lineNumber: 74,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "mt-4 ml-4 sm:flex-none",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react19.Link, {
            to: "/dashboard/create-profile",
            className: "inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white font-semibold shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 sm:w-auto",
            children: "Create Profile"
          }, void 0, !1, {
            fileName: "app/routes/dashboard/__dashboard/profile.tsx",
            lineNumber: 80,
            columnNumber: 19
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/dashboard/__dashboard/profile.tsx",
          lineNumber: 79,
          columnNumber: 16
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/dashboard/__dashboard/profile.tsx",
      lineNumber: 73,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/dashboard/__dashboard/profile.tsx",
    lineNumber: 72,
    columnNumber: 10
  }, this);
}

// app/routes/dashboard/__dashboard/index.tsx
var dashboard_exports2 = {};
__export(dashboard_exports2, {
  default: () => DashboardIndex,
  loader: () => loader11
});
var import_react20 = require("@remix-run/react"), import_node15 = require("@remix-run/node"), import_date_fns6 = require("date-fns"), import_react_fontawesome2 = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons2 = require("@fortawesome/free-solid-svg-icons");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader11 = async ({ request }) => {
  let userId = await authenticatedUser(request);
  if (!userId)
    return (0, import_node15.redirect)("/");
  let user = await getUserALl(userId);
  return (0, import_node15.json)({ user });
};
function DashboardIndex() {
  let { user } = (0, import_react20.useLoaderData)(), profile = user.profile, experience = profile == null ? void 0 : profile.experience, education = profile == null ? void 0 : profile.education;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      profile ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "px-4 sm:px-6 lg:px-8 mb-7 lg:w-10/12",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "sm:flex flex-col",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex items-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_fontawesome2.FontAwesomeIcon, {
                  icon: import_free_solid_svg_icons2.faUser,
                  className: "text-lg"
                }, void 0, !1, {
                  fileName: "app/routes/dashboard/__dashboard/index.tsx",
                  lineNumber: 32,
                  columnNumber: 22
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                  className: "ml-2 text-xl font-semibold text-gray-900",
                  children: "Create Your Profile"
                }, void 0, !1, {
                  fileName: "app/routes/dashboard/__dashboard/index.tsx",
                  lineNumber: 33,
                  columnNumber: 22
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/dashboard/__dashboard/index.tsx",
              lineNumber: 31,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-4 ml-4 sm:flex-none",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react20.Link, {
                to: "/dashboard/create-profile",
                className: "inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white font-semibold shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 sm:w-auto",
                children: "Create Profile"
              }, void 0, !1, {
                fileName: "app/routes/dashboard/__dashboard/index.tsx",
                lineNumber: 37,
                columnNumber: 22
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/dashboard/__dashboard/index.tsx",
              lineNumber: 36,
              columnNumber: 19
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/dashboard/__dashboard/index.tsx",
          lineNumber: 30,
          columnNumber: 16
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/dashboard/__dashboard/index.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "px-4 sm:px-6 lg:px-8 mb-7 lg:w-10/12",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "sm:flex sm:items-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "sm:flex-auto",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                  className: "text-xl font-semibold text-gray-900",
                  children: "Experience Credentials"
                }, void 0, !1, {
                  fileName: "app/routes/dashboard/__dashboard/index.tsx",
                  lineNumber: 52,
                  columnNumber: 19
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/dashboard/__dashboard/index.tsx",
                lineNumber: 51,
                columnNumber: 16
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mt-4 sm:mt-0 sm:ml-16 sm:flex-none"
              }, void 0, !1, {
                fileName: "app/routes/dashboard/__dashboard/index.tsx",
                lineNumber: 54,
                columnNumber: 16
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/dashboard/__dashboard/index.tsx",
            lineNumber: 50,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mt-8 flex flex-col",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
                    className: "min-w-full divide-y divide-gray-300",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
                        className: "bg-gray-50",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                              children: "Company"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/index.tsx",
                              lineNumber: 64,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                              children: "Job Title"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/index.tsx",
                              lineNumber: 68,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                              children: "Years"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/index.tsx",
                              lineNumber: 71,
                              columnNumber: 31
                            }, this)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/dashboard/__dashboard/index.tsx",
                          lineNumber: 63,
                          columnNumber: 28
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/dashboard/__dashboard/index.tsx",
                        lineNumber: 62,
                        columnNumber: 28
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
                        className: "bg-white",
                        children: experience && experience.length > 0 ? experience.map((exp, expIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                          className: expIndex % 2 === 0 ? void 0 : "bg-gray-50",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6",
                              children: exp.company
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/index.tsx",
                              lineNumber: 79,
                              columnNumber: 34
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                              children: exp.title
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/index.tsx",
                              lineNumber: 84,
                              columnNumber: 34
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                              children: [
                                (0, import_date_fns6.format)(new Date(exp.from), "MM/dd/yyyy"),
                                " - ",
                                " ",
                                exp.to ? (0, import_date_fns6.format)(new Date(exp.to), "MM/dd/yyyy") : "Present"
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/dashboard/__dashboard/index.tsx",
                              lineNumber: 85,
                              columnNumber: 34
                            }, this)
                          ]
                        }, exp.title, !0, {
                          fileName: "app/routes/dashboard/__dashboard/index.tsx",
                          lineNumber: 78,
                          columnNumber: 31
                        }, this)) : null
                      }, void 0, !1, {
                        fileName: "app/routes/dashboard/__dashboard/index.tsx",
                        lineNumber: 76,
                        columnNumber: 28
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/dashboard/__dashboard/index.tsx",
                    lineNumber: 61,
                    columnNumber: 25
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/dashboard/__dashboard/index.tsx",
                  lineNumber: 60,
                  columnNumber: 22
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/dashboard/__dashboard/index.tsx",
                lineNumber: 59,
                columnNumber: 19
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/dashboard/__dashboard/index.tsx",
              lineNumber: 58,
              columnNumber: 16
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/__dashboard/index.tsx",
            lineNumber: 57,
            columnNumber: 13
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/dashboard/__dashboard/index.tsx",
        lineNumber: 49,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "px-4 sm:px-6 lg:px-8 lg:w-10/12",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "sm:flex sm:items-center",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "sm:flex-auto",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "text-xl font-semibold text-gray-900",
                children: "Education Credentials"
              }, void 0, !1, {
                fileName: "app/routes/dashboard/__dashboard/index.tsx",
                lineNumber: 102,
                columnNumber: 19
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/dashboard/__dashboard/index.tsx",
              lineNumber: 101,
              columnNumber: 16
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/__dashboard/index.tsx",
            lineNumber: 100,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mt-8 flex flex-col",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
                    className: "min-w-full divide-y divide-gray-300",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
                        className: "bg-gray-50",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                              children: "School"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/index.tsx",
                              lineNumber: 112,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                              children: "Degree"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/index.tsx",
                              lineNumber: 116,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                              children: "Years"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/index.tsx",
                              lineNumber: 119,
                              columnNumber: 31
                            }, this)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/dashboard/__dashboard/index.tsx",
                          lineNumber: 111,
                          columnNumber: 28
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/dashboard/__dashboard/index.tsx",
                        lineNumber: 110,
                        columnNumber: 28
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
                        className: "bg-white",
                        children: education && education.length > 0 ? education.map((edu, eduIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                          className: eduIndex % 2 === 0 ? void 0 : "bg-gray-50",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6",
                              children: edu.school
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/index.tsx",
                              lineNumber: 127,
                              columnNumber: 34
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                              children: edu.degree
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard/__dashboard/index.tsx",
                              lineNumber: 131,
                              columnNumber: 34
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                              children: [
                                (0, import_date_fns6.format)(new Date(edu.from), "MM/dd/yyyy"),
                                " - ",
                                " ",
                                edu.to ? (0, import_date_fns6.format)(new Date(edu.to), "MM/dd/yyyy") : "Present"
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/dashboard/__dashboard/index.tsx",
                              lineNumber: 132,
                              columnNumber: 34
                            }, this)
                          ]
                        }, edu.degree, !0, {
                          fileName: "app/routes/dashboard/__dashboard/index.tsx",
                          lineNumber: 126,
                          columnNumber: 31
                        }, this)) : null
                      }, void 0, !1, {
                        fileName: "app/routes/dashboard/__dashboard/index.tsx",
                        lineNumber: 124,
                        columnNumber: 28
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/dashboard/__dashboard/index.tsx",
                    lineNumber: 109,
                    columnNumber: 25
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/dashboard/__dashboard/index.tsx",
                  lineNumber: 108,
                  columnNumber: 22
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/dashboard/__dashboard/index.tsx",
                lineNumber: 107,
                columnNumber: 19
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/dashboard/__dashboard/index.tsx",
              lineNumber: 106,
              columnNumber: 16
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/__dashboard/index.tsx",
            lineNumber: 105,
            columnNumber: 13
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/dashboard/__dashboard/index.tsx",
        lineNumber: 99,
        columnNumber: 10
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/dashboard/__dashboard/index.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this);
}

// app/routes/posts/$postId.delete.tsx
var postId_delete_exports = {};
__export(postId_delete_exports, {
  action: () => action7,
  loader: () => loader12
});
var import_node16 = require("@remix-run/node");

// app/models/comment.server.ts
var createComment = async (userId, postId, text) => prisma.post.update({
  where: { id: postId },
  data: {
    comments: {
      create: {
        text,
        user: {
          connect: { id: userId }
        }
      }
    }
  },
  include: {
    comments: {
      select: {
        id: !0,
        text: !0,
        date: !0,
        user: {
          select: {
            name: !0,
            avatar: !0
          }
        }
      }
    }
  }
}), getComments = async (postId) => prisma.post.findUnique({
  where: { id: postId },
  include: {
    user: {
      select: {
        id: !0,
        name: !0,
        avatar: !0
      }
    },
    comments: {
      select: {
        id: !0,
        text: !0,
        date: !0,
        user: {
          select: {
            name: !0,
            avatar: !0
          }
        }
      }
    }
  }
}), deleteCommentById = (commentId) => prisma.comment.delete({
  where: { id: commentId }
});

// app/routes/posts/$postId.delete.tsx
var loader12 = ({ params }) => (0, import_node16.redirect)(`/posts/${params.postId}`), action7 = async ({ request, params }) => {
  let postId = params.postId, commentId = (await request.formData()).get("commentId");
  return commentId ? (await deleteCommentById(commentId.toString()), (0, import_node16.redirect)(`/posts/${postId}`)) : (0, import_node16.redirect)(`/posts/${postId}`);
};

// app/routes/profiles/$profileId.tsx
var profileId_exports = {};
__export(profileId_exports, {
  default: () => ProfileShow2,
  loader: () => loader13
});
var import_node17 = require("@remix-run/node"), import_react21 = require("@remix-run/react"), import_date_fns7 = require("date-fns"), import_react_fontawesome3 = require("@fortawesome/react-fontawesome"), import_free_solid_svg_icons3 = require("@fortawesome/free-solid-svg-icons"), import_free_brands_svg_icons2 = require("@fortawesome/free-brands-svg-icons");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader13 = async ({ params }) => {
  let profileId = params.profileId, profile = await getProfileWithAllById(profileId), { repos } = await getUserRepos(profile.githubUsername);
  return (0, import_node17.json)({ profile, repos });
};
function ProfileShow2() {
  let { profile, repos } = (0, import_react21.useLoaderData)(), renderExperience = (exp) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "list-inside space-y-1 mb-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-teal-600 font-semibold",
        children: exp.company
      }, void 0, !1, {
        fileName: "app/routes/profiles/$profileId.tsx",
        lineNumber: 29,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-gray-700 font-semibold text-sm",
        children: [
          "Duration: ",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "text-gray-800 font-normal text-sm",
            children: [
              (0, import_date_fns7.format)(new Date(exp.from), "MMMM yyyy"),
              " - ",
              exp.to === null ? "Present" : (0, import_date_fns7.format)(new Date(exp.to), "MMMM yyyy")
            ]
          }, void 0, !0, {
            fileName: "app/routes/profiles/$profileId.tsx",
            lineNumber: 32,
            columnNumber: 13
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/profiles/$profileId.tsx",
        lineNumber: 30,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-sm font-semibold text-gray-700",
        children: [
          "Position:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "text-sm text-gray-600 font-normal",
            children: [
              "  ",
              exp.title
            ]
          }, void 0, !0, {
            fileName: "app/routes/profiles/$profileId.tsx",
            lineNumber: 40,
            columnNumber: 13
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/profiles/$profileId.tsx",
        lineNumber: 39,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-sm font-semibold text-gray-700",
        children: [
          "Description:",
          "  ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "font-normal",
            children: exp.description
          }, void 0, !1, {
            fileName: "app/routes/profiles/$profileId.tsx",
            lineNumber: 45,
            columnNumber: 13
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/profiles/$profileId.tsx",
        lineNumber: 44,
        columnNumber: 10
      }, this)
    ]
  }, exp.id, !0, {
    fileName: "app/routes/profiles/$profileId.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this), renderEducation = (edu) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "list-inside space-y-1 mb-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-teal-600 font-semibold",
        children: [
          edu.degree,
          " in ",
          edu.fieldofstudy
        ]
      }, void 0, !0, {
        fileName: "app/routes/profiles/$profileId.tsx",
        lineNumber: 54,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-sm font-semibold text-gray-700",
        children: edu.school
      }, void 0, !1, {
        fileName: "app/routes/profiles/$profileId.tsx",
        lineNumber: 55,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-gray-700 text-sm",
        children: [
          (0, import_date_fns7.format)(new Date(edu.from), "MM/dd/yy"),
          " - ",
          edu.to === null ? "Present" : (0, import_date_fns7.format)(new Date(edu.to), "MM/dd/yy")
        ]
      }, void 0, !0, {
        fileName: "app/routes/profiles/$profileId.tsx",
        lineNumber: 56,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-sm font-semibold text-gray-700",
        children: [
          "Description:",
          "  ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "font-normal",
            children: edu.description
          }, void 0, !1, {
            fileName: "app/routes/profiles/$profileId.tsx",
            lineNumber: 62,
            columnNumber: 13
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/profiles/$profileId.tsx",
        lineNumber: 61,
        columnNumber: 10
      }, this)
    ]
  }, edu.id, !0, {
    fileName: "app/routes/profiles/$profileId.tsx",
    lineNumber: 53,
    columnNumber: 7
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "bg-gray-100",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "container mx-auto mb-5 px-5",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "md:flex no-wrap md:-mx-2 ",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "w-full md:w-3/12 md:mx-2",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "bg-white p-3 border-t-4 border-green-400",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "image overflow-hidden",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    className: "h-auto w-full mx-auto",
                    src: profile.user.avatar,
                    alt: ""
                  }, void 0, !1, {
                    fileName: "app/routes/profiles/$profileId.tsx",
                    lineNumber: 78,
                    columnNumber: 25
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/profiles/$profileId.tsx",
                  lineNumber: 77,
                  columnNumber: 22
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                  className: "text-gray-900 font-bold text-xl leading-8 my-1 text-center",
                  children: profile.user.name
                }, void 0, !1, {
                  fileName: "app/routes/profiles/$profileId.tsx",
                  lineNumber: 83,
                  columnNumber: 22
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                  className: "text-gray-600 font-lg text-semibold leading-6 text-center",
                  children: [
                    profile.status,
                    " at ",
                    profile.company
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/profiles/$profileId.tsx",
                  lineNumber: 86,
                  columnNumber: 22
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "text-center mt-2 space-x-3 text-xl",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, {
                      icon: import_free_solid_svg_icons3.faGlobe,
                      className: "text-blue-700"
                    }, void 0, !1, {
                      fileName: "app/routes/profiles/$profileId.tsx",
                      lineNumber: 90,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, {
                      icon: import_free_brands_svg_icons2.faFacebookF,
                      className: "text-blue-700"
                    }, void 0, !1, {
                      fileName: "app/routes/profiles/$profileId.tsx",
                      lineNumber: 91,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, {
                      icon: import_free_brands_svg_icons2.faYoutube,
                      className: "text-red-700"
                    }, void 0, !1, {
                      fileName: "app/routes/profiles/$profileId.tsx",
                      lineNumber: 92,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, {
                      icon: import_free_brands_svg_icons2.faTwitter,
                      className: "text-blue-500"
                    }, void 0, !1, {
                      fileName: "app/routes/profiles/$profileId.tsx",
                      lineNumber: 93,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, {
                      icon: import_free_brands_svg_icons2.faInstagram,
                      className: "text-instagramColor"
                    }, void 0, !1, {
                      fileName: "app/routes/profiles/$profileId.tsx",
                      lineNumber: 94,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_fontawesome3.FontAwesomeIcon, {
                      icon: import_free_brands_svg_icons2.faLinkedin,
                      className: "text-blue-600"
                    }, void 0, !1, {
                      fileName: "app/routes/profiles/$profileId.tsx",
                      lineNumber: 95,
                      columnNumber: 25
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/profiles/$profileId.tsx",
                  lineNumber: 89,
                  columnNumber: 22
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                  className: "bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                      className: "flex items-center py-3",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          children: "Status"
                        }, void 0, !1, {
                          fileName: "app/routes/profiles/$profileId.tsx",
                          lineNumber: 102,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          className: "ml-auto",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "bg-green-500 py-1 px-2 rounded text-white text-sm",
                            children: "Active"
                          }, void 0, !1, {
                            fileName: "app/routes/profiles/$profileId.tsx",
                            lineNumber: 104,
                            columnNumber: 31
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/profiles/$profileId.tsx",
                          lineNumber: 103,
                          columnNumber: 28
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/profiles/$profileId.tsx",
                      lineNumber: 101,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                      className: "flex items-center py-3",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          children: "Member since"
                        }, void 0, !1, {
                          fileName: "app/routes/profiles/$profileId.tsx",
                          lineNumber: 108,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          className: "ml-auto",
                          children: (0, import_date_fns7.format)(new Date(profile.user.date), "MMM dd, yyyy")
                        }, void 0, !1, {
                          fileName: "app/routes/profiles/$profileId.tsx",
                          lineNumber: 109,
                          columnNumber: 28
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/profiles/$profileId.tsx",
                      lineNumber: 107,
                      columnNumber: 25
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/profiles/$profileId.tsx",
                  lineNumber: 99,
                  columnNumber: 22
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/profiles/$profileId.tsx",
              lineNumber: 76,
              columnNumber: 19
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/profiles/$profileId.tsx",
            lineNumber: 74,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "w-full md:w-9/12 mx-2 h-64",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "bg-white p-3 shadow-sm rounded-sm",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex items-center space-x-2 font-semibold text-gray-900 leading-8",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "text-green-500",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                          className: "h-5",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          }, void 0, !1, {
                            fileName: "app/routes/profiles/$profileId.tsx",
                            lineNumber: 126,
                            columnNumber: 33
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/profiles/$profileId.tsx",
                          lineNumber: 124,
                          columnNumber: 29
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/profiles/$profileId.tsx",
                        lineNumber: 123,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "tracking-wide",
                        children: "About"
                      }, void 0, !1, {
                        fileName: "app/routes/profiles/$profileId.tsx",
                        lineNumber: 130,
                        columnNumber: 25
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/profiles/$profileId.tsx",
                    lineNumber: 122,
                    columnNumber: 22
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "text-gray-700",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "text-sm px-4 py-2",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "font-semibold",
                          children: "Bio"
                        }, void 0, !1, {
                          fileName: "app/routes/profiles/$profileId.tsx",
                          lineNumber: 134,
                          columnNumber: 28
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          className: "text-sm text-gray-500 hover:text-gray-600 leading-6",
                          children: profile.bio
                        }, void 0, !1, {
                          fileName: "app/routes/profiles/$profileId.tsx",
                          lineNumber: 135,
                          columnNumber: 28
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/profiles/$profileId.tsx",
                      lineNumber: 133,
                      columnNumber: 25
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/profiles/$profileId.tsx",
                    lineNumber: 132,
                    columnNumber: 22
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/profiles/$profileId.tsx",
                lineNumber: 121,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "my-4"
              }, void 0, !1, {
                fileName: "app/routes/profiles/$profileId.tsx",
                lineNumber: 143,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "w-6/12 mr-4  p-3 shadow-sm rounded-sm bg-white",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "text-green-500",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                              className: "h-5",
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor",
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              }, void 0, !1, {
                                fileName: "app/routes/profiles/$profileId.tsx",
                                lineNumber: 155,
                                columnNumber: 41
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/profiles/$profileId.tsx",
                              lineNumber: 152,
                              columnNumber: 37
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/profiles/$profileId.tsx",
                            lineNumber: 151,
                            columnNumber: 33
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "tracking-wide",
                            children: "Experience"
                          }, void 0, !1, {
                            fileName: "app/routes/profiles/$profileId.tsx",
                            lineNumber: 159,
                            columnNumber: 28
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/profiles/$profileId.tsx",
                        lineNumber: 150,
                        columnNumber: 25
                      }, this),
                      profile.experience.length > 0 ? profile.experience.map((exp) => renderExperience(exp)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-700 text-sm",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "font-semibold",
                          children: "No experience added"
                        }, void 0, !1, {
                          fileName: "app/routes/profiles/$profileId.tsx",
                          lineNumber: 166,
                          columnNumber: 31
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/profiles/$profileId.tsx",
                        lineNumber: 165,
                        columnNumber: 28
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/profiles/$profileId.tsx",
                    lineNumber: 149,
                    columnNumber: 22
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "w-6/12 p-3 shadow-sm rounded-sm bg-white",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "text-green-500",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                              className: "h-5",
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                  fill: "#fff",
                                  d: "M12 14l9-5-9-5-9 5 9 5z"
                                }, void 0, !1, {
                                  fileName: "app/routes/profiles/$profileId.tsx",
                                  lineNumber: 177,
                                  columnNumber: 41
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                  fill: "#fff",
                                  d: "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                }, void 0, !1, {
                                  fileName: "app/routes/profiles/$profileId.tsx",
                                  lineNumber: 178,
                                  columnNumber: 41
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "2",
                                  d: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                }, void 0, !1, {
                                  fileName: "app/routes/profiles/$profileId.tsx",
                                  lineNumber: 180,
                                  columnNumber: 41
                                }, this)
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/profiles/$profileId.tsx",
                              lineNumber: 174,
                              columnNumber: 37
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/profiles/$profileId.tsx",
                            lineNumber: 173,
                            columnNumber: 33
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "tracking-wide",
                            children: "Education"
                          }, void 0, !1, {
                            fileName: "app/routes/profiles/$profileId.tsx",
                            lineNumber: 184,
                            columnNumber: 28
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/profiles/$profileId.tsx",
                        lineNumber: 172,
                        columnNumber: 25
                      }, this),
                      profile.education.length > 0 ? profile.education.map((edu) => renderEducation(edu)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-700 text-sm",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "font-semibold",
                          children: "No education added"
                        }, void 0, !1, {
                          fileName: "app/routes/profiles/$profileId.tsx",
                          lineNumber: 191,
                          columnNumber: 31
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/profiles/$profileId.tsx",
                        lineNumber: 190,
                        columnNumber: 28
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/profiles/$profileId.tsx",
                    lineNumber: 171,
                    columnNumber: 22
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/profiles/$profileId.tsx",
                lineNumber: 147,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "bg-white p-3 shadow-sm rounded-sm mt-5",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex items-center space-x-2 font-semibold text-gray-900 leading-8",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "text-green-500",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                          className: "h-5",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          }, void 0, !1, {
                            fileName: "app/routes/profiles/$profileId.tsx",
                            lineNumber: 204,
                            columnNumber: 33
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/profiles/$profileId.tsx",
                          lineNumber: 202,
                          columnNumber: 29
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/profiles/$profileId.tsx",
                        lineNumber: 201,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "tracking-wide",
                        children: "Github repos"
                      }, void 0, !1, {
                        fileName: "app/routes/profiles/$profileId.tsx",
                        lineNumber: 208,
                        columnNumber: 25
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/profiles/$profileId.tsx",
                    lineNumber: 200,
                    columnNumber: 22
                  }, this),
                  repos && repos.length > 0 ? repos.map((repo) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex justify-between border",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex flex-col m-3 ml-4 text-sm",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                            href: repo.html_url,
                            className: "text-blueGreen font-semibold",
                            children: repo.name
                          }, void 0, !1, {
                            fileName: "app/routes/profiles/$profileId.tsx",
                            lineNumber: 214,
                            columnNumber: 34
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                            className: "mt-4",
                            children: repo.description
                          }, void 0, !1, {
                            fileName: "app/routes/profiles/$profileId.tsx",
                            lineNumber: 215,
                            columnNumber: 34
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/profiles/$profileId.tsx",
                        lineNumber: 213,
                        columnNumber: 31
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex flex-col space-y-1 text-xs text-center m-3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "bg-blueGreen text-gray-200 p-1",
                            children: [
                              "Stars: ",
                              repo.stargazers_count
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/profiles/$profileId.tsx",
                            lineNumber: 218,
                            columnNumber: 34
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "bg-darkColor text-gray-200 p-1",
                            children: [
                              "Watchers: ",
                              repo.watchers_count
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/profiles/$profileId.tsx",
                            lineNumber: 219,
                            columnNumber: 34
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "bg-gray-200 p-1",
                            children: [
                              "Forks: ",
                              repo.forks
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/profiles/$profileId.tsx",
                            lineNumber: 220,
                            columnNumber: 34
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/profiles/$profileId.tsx",
                        lineNumber: 217,
                        columnNumber: 31
                      }, this)
                    ]
                  }, repo.id, !0, {
                    fileName: "app/routes/profiles/$profileId.tsx",
                    lineNumber: 212,
                    columnNumber: 28
                  }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "text-gray-700 py-4",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "font-semibold",
                      children: "No Github Profile Found"
                    }, void 0, !1, {
                      fileName: "app/routes/profiles/$profileId.tsx",
                      lineNumber: 225,
                      columnNumber: 28
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/profiles/$profileId.tsx",
                    lineNumber: 224,
                    columnNumber: 25
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/profiles/$profileId.tsx",
                lineNumber: 199,
                columnNumber: 19
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/profiles/$profileId.tsx",
            lineNumber: 118,
            columnNumber: 16
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/profiles/$profileId.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/profiles/$profileId.tsx",
      lineNumber: 71,
      columnNumber: 10
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/profiles/$profileId.tsx",
    lineNumber: 70,
    columnNumber: 7
  }, this);
}

// app/routes/posts/delete-post.tsx
var delete_post_exports = {};
__export(delete_post_exports, {
  action: () => action8
});
var import_node18 = require("@remix-run/node");

// app/models/post.server.ts
var createPost = async (user, text) => prisma.user.update({
  where: { id: user.id },
  data: {
    posts: {
      create: {
        text
      }
    }
  },
  include: {
    posts: {
      include: {
        comments: !0,
        likes: !0
      }
    }
  }
}), getPostsWithCount = async () => prisma.post.findMany({
  orderBy: {
    date: "desc"
  },
  include: {
    user: {
      select: {
        id: !0,
        name: !0,
        avatar: !0
      }
    },
    _count: {
      select: {
        comments: !0,
        likes: !0
      }
    }
  }
}), deletePostById = (postId) => prisma.post.delete({
  where: {
    id: postId
  }
});

// app/routes/posts/delete-post.tsx
var action8 = async ({ request }) => {
  let postId = (await request.formData()).get("postId");
  if (!postId)
    return (0, import_node18.redirect)("/posts");
  try {
    await deletePostById(postId.toString());
  } catch (err) {
    console.log(err);
  }
  return (0, import_node18.redirect)("/posts");
};

// app/routes/__auth/register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action9,
  default: () => Register,
  loader: () => loader14
});
var import_react22 = require("@remix-run/react"), import_node19 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader14 = async ({ request }) => await isAuthenticated(request) ? (0, import_node19.redirect)("/dashboard") : null, action9 = async ({ request }) => {
  let fieldNames = ["name", "email", "password", "password2"], errorMessages = {
    name: "Name should not be empty",
    email: "Email must not be empty",
    password: "Password is required",
    password2: "Password confirmation is required"
  }, { errors, data } = await processFormData(request, fieldNames, errorMessages), { name, email, password, password2 } = data;
  if (errors)
    return (0, import_node19.json)({ errors });
  if (password !== password2)
    return (0, import_node19.json)({ errors: { password2: "Password does not match!" } });
  let user = await createUser(name, email, password);
  return createUserSession(user.id, request, "/dashboard");
};
function Register() {
  var _a, _b, _c, _d;
  let actionData = (0, import_react22.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col justify-center sm:px-6 lg:px-8",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "sm:mx-auto sm:w-full sm:max-w-md",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
          className: "mt-6 text-center text-3xl font-extrabold text-gray-900",
          children: "Create account"
        }, void 0, !1, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 42,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mt-8 sm:mx-auto sm:w-full sm:max-w-lg",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react22.Form, {
            method: "post",
            className: "space-y-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mt-1",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "text",
                    placeholder: "Name",
                    name: "name",
                    className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  }, void 0, !1, {
                    fileName: "app/routes/__auth/register.tsx",
                    lineNumber: 50,
                    columnNumber: 22
                  }, this),
                  (_a = actionData == null ? void 0 : actionData.errors) != null && _a.name ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "pt-1 text-red-700 text-sm",
                    children: actionData.errors.name
                  }, void 0, !1, {
                    fileName: "app/routes/__auth/register.tsx",
                    lineNumber: 57,
                    columnNumber: 25
                  }, this) : null
                ]
              }, void 0, !0, {
                fileName: "app/routes/__auth/register.tsx",
                lineNumber: 49,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mt-1",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "email",
                    placeholder: "Email Address",
                    name: "email",
                    className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  }, void 0, !1, {
                    fileName: "app/routes/__auth/register.tsx",
                    lineNumber: 61,
                    columnNumber: 22
                  }, this),
                  (_b = actionData == null ? void 0 : actionData.errors) != null && _b.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "py-1 text-red-700 text-sm",
                    children: actionData.errors.email
                  }, void 0, !1, {
                    fileName: "app/routes/__auth/register.tsx",
                    lineNumber: 69,
                    columnNumber: 25
                  }, this) : null,
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", {
                    children: " For a profile image, we recommend using a Gravatar email "
                  }, void 0, !1, {
                    fileName: "app/routes/__auth/register.tsx",
                    lineNumber: 71,
                    columnNumber: 22
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__auth/register.tsx",
                lineNumber: 60,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mt-1",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "password",
                    placeholder: "Password",
                    name: "password",
                    className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  }, void 0, !1, {
                    fileName: "app/routes/__auth/register.tsx",
                    lineNumber: 76,
                    columnNumber: 22
                  }, this),
                  (_c = actionData == null ? void 0 : actionData.errors) != null && _c.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "pt-1 text-red-700 text-sm",
                    children: actionData.errors.password
                  }, void 0, !1, {
                    fileName: "app/routes/__auth/register.tsx",
                    lineNumber: 84,
                    columnNumber: 25
                  }, this) : null
                ]
              }, void 0, !0, {
                fileName: "app/routes/__auth/register.tsx",
                lineNumber: 75,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mt-1",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "password",
                    placeholder: "Confirm Password",
                    name: "password2",
                    className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  }, void 0, !1, {
                    fileName: "app/routes/__auth/register.tsx",
                    lineNumber: 88,
                    columnNumber: 22
                  }, this),
                  (_d = actionData == null ? void 0 : actionData.errors) != null && _d.password2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "pt-1 text-red-700 text-sm",
                    children: actionData.errors.password2
                  }, void 0, !1, {
                    fileName: "app/routes/__auth/register.tsx",
                    lineNumber: 95,
                    columnNumber: 25
                  }, this) : null
                ]
              }, void 0, !0, {
                fileName: "app/routes/__auth/register.tsx",
                lineNumber: 87,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                type: "submit",
                className: "bg-blueGreen text-lightColor w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-medium focus:outline-none hover:bg-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-300",
                children: "Register"
              }, void 0, !1, {
                fileName: "app/routes/__auth/register.tsx",
                lineNumber: 98,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "text-center text-sm text-gray-500",
                children: [
                  "Already have an account?",
                  "  ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react22.Link, {
                    to: "/login",
                    className: "underline text-blue-500",
                    children: "Sign In"
                  }, void 0, !1, {
                    fileName: "app/routes/__auth/register.tsx",
                    lineNumber: 106,
                    columnNumber: 22
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__auth/register.tsx",
                lineNumber: 104,
                columnNumber: 19
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/register.tsx",
            lineNumber: 48,
            columnNumber: 16
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 46,
        columnNumber: 10
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__auth/register.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this);
}

// app/routes/profiles/index.tsx
var profiles_exports = {};
__export(profiles_exports, {
  default: () => IndexProfiles,
  loader: () => loader15
});
var import_outline2 = require("@heroicons/react/outline"), import_node20 = require("@remix-run/node"), import_react23 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader15 = async () => {
  let profiles = await getProfiles();
  return (0, import_node20.json)({ profiles });
};
function IndexProfiles() {
  let { profiles } = (0, import_react23.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex justify-center w-screen",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "md:mx-8 lg:mx-14 sm:w-3/4 lg:w-2/3",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "md:flex md:items-center md:justify-between mb-4",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex-1 min-w-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                className: "text-3xl font-bold leading-7 text-blueGreen sm:text-3xl sm:truncate",
                children: "Developers"
              }, void 0, !1, {
                fileName: "app/routes/profiles/index.tsx",
                lineNumber: 23,
                columnNumber: 22
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/profiles/index.tsx",
              lineNumber: 22,
              columnNumber: 19
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/profiles/index.tsx",
            lineNumber: 21,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex-1 min-w-0 mb-5",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              className: "text-xl leading-7 text-gray-700 sm:text-2xl sm:truncate",
              children: "Browse and connect with developers"
            }, void 0, !1, {
              fileName: "app/routes/profiles/index.tsx",
              lineNumber: 28,
              columnNumber: 19
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/profiles/index.tsx",
            lineNumber: 27,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "",
            children: profiles.map((profile) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex w-full p-4 mb-3 bg-gray-200 border-2 border-gray-300 rounded-lg",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "ml-2 mr-4 sm:mr-7",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.Link, {
                    to: `/profiles/${profile.id}`,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                      src: profile.user.avatar,
                      alt: "Avatar",
                      className: " w-14 h-14 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gray-400 rounded-full"
                    }, void 0, !1, {
                      fileName: "app/routes/profiles/index.tsx",
                      lineNumber: 41,
                      columnNumber: 31
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/profiles/index.tsx",
                    lineNumber: 40,
                    columnNumber: 28
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/profiles/index.tsx",
                  lineNumber: 39,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "sm:w-6/12 lg:w-7/12 flex flex-col ml-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react23.Link, {
                      to: `/profiles/${profile.id}`,
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-lg font-semibold mt-4 text-left",
                        children: profile.user.name
                      }, void 0, !1, {
                        fileName: "app/routes/profiles/index.tsx",
                        lineNumber: 48,
                        columnNumber: 31
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/profiles/index.tsx",
                      lineNumber: 47,
                      columnNumber: 28
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex mt-2",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "text-sm font-semibold text-gray-500 pt-2",
                        children: [
                          profile.status,
                          " at ",
                          profile.company
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/profiles/index.tsx",
                        lineNumber: 52,
                        columnNumber: 28
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/profiles/index.tsx",
                      lineNumber: 51,
                      columnNumber: 28
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/profiles/index.tsx",
                  lineNumber: 46,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col justify-center lg:mr-12 py-2 text-teal-600 font-semibold text-sm",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                    className: "flex flex-col justify-center",
                    children: profile.skills.map((skill) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                      className: "flex items-center",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline2.CheckIcon, {
                          className: "w-5 h-5 mr-1"
                        }, void 0, !1, {
                          fileName: "app/routes/profiles/index.tsx",
                          lineNumber: 63,
                          columnNumber: 37
                        }, this),
                        skill
                      ]
                    }, skill, !0, {
                      fileName: "app/routes/profiles/index.tsx",
                      lineNumber: 62,
                      columnNumber: 34
                    }, this))
                  }, void 0, !1, {
                    fileName: "app/routes/profiles/index.tsx",
                    lineNumber: 60,
                    columnNumber: 28
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/profiles/index.tsx",
                  lineNumber: 58,
                  columnNumber: 25
                }, this)
              ]
            }, profile.id, !0, {
              fileName: "app/routes/profiles/index.tsx",
              lineNumber: 37,
              columnNumber: 22
            }, this))
          }, void 0, !1, {
            fileName: "app/routes/profiles/index.tsx",
            lineNumber: 35,
            columnNumber: 16
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/profiles/index.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/profiles/index.tsx",
      lineNumber: 19,
      columnNumber: 10
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/profiles/index.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this);
}

// app/routes/__auth/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action10
});
var import_node21 = require("@remix-run/node");
var action10 = async ({ request }) => (0, import_node21.redirect)("/", {
  headers: {
    "set-Cookie": await destroySession(request)
  }
});

// app/routes/posts/$postId.tsx
var postId_exports = {};
__export(postId_exports, {
  action: () => action11,
  default: () => Post,
  loader: () => loader16
});
var import_react24 = require("@remix-run/react"), import_node22 = require("@remix-run/node");
var import_moment = __toESM(require("moment")), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader16 = async ({ request, params }) => {
  let postId = params.postId, postWithComments = await getComments(postId);
  return (0, import_node22.json)({
    post: postWithComments,
    userId: await authenticatedUser(request)
  });
}, action11 = async ({ request, params }) => {
  let postId = params.postId, userId = await authenticatedUser(request);
  if (!userId)
    return (0, import_node22.json)({ errors: { post: "You must login or register to create a post" } });
  let text = (await request.formData()).get("text");
  return !text || text.toString().length < 6 ? (0, import_node22.json)({ errors: { post: "Post must be at least 6 characters" } }) : (await createComment(userId, postId, text.toString()), (0, import_node22.redirect)(`/posts/${postId}`));
};
function Post() {
  var _a;
  let { post, userId } = (0, import_react24.useLoaderData)(), actionData = (0, import_react24.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex justify-center w-screen h-screen px-4 text-gray-700",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col w-full max-w-screen-lg -mt-1",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react24.Link, {
          to: "/posts",
          className: "max-w-fit flex items-center text-gray-700 h-8 px-3 text-sm rounded bg-gray-300 hover:bg-gray-400",
          children: "Back to posts"
        }, void 0, !1, {
          fileName: "app/routes/posts/$postId.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col flex-grow border-l border-r border-gray-300 mt-3",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex-grow h-0 overflow-auto border-t",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex w-full px-8 py-3 border-b border-gray-300",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col items-center ml-4 mr-5 mt-6",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex-shrink-0",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                        src: post.user.avatar,
                        alt: "Avatar",
                        className: "w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20 rounded-full"
                      }, void 0, !1, {
                        fileName: "app/routes/posts/$postId.tsx",
                        lineNumber: 56,
                        columnNumber: 28
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/posts/$postId.tsx",
                      lineNumber: 55,
                      columnNumber: 25
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/posts/$postId.tsx",
                    lineNumber: 54,
                    columnNumber: 22
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col flex-grow ml-4",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "font-semibold mt-4 text-left",
                        children: post.user.name
                      }, void 0, !1, {
                        fileName: "app/routes/posts/$postId.tsx",
                        lineNumber: 61,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        className: "mt-1",
                        children: post.text
                      }, void 0, !1, {
                        fileName: "app/routes/posts/$postId.tsx",
                        lineNumber: 63,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex mt-2",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          className: "ml-1 text-xsm font-semibold text-gray-500 pt-1",
                          children: (0, import_moment.default)(post.date).fromNow()
                        }, void 0, !1, {
                          fileName: "app/routes/posts/$postId.tsx",
                          lineNumber: 66,
                          columnNumber: 28
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/posts/$postId.tsx",
                        lineNumber: 64,
                        columnNumber: 25
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/posts/$postId.tsx",
                    lineNumber: 60,
                    columnNumber: 22
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/posts/$postId.tsx",
                lineNumber: 53,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex w-full py-4 pr-3 border-b-4 border-gray-300",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col flex-grow ml-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "w-full bg-blueGreen font-semibold text-lg text-gray-50 mb-3 px-3 py-1 rounded-sm",
                      children: "Leave a comment"
                    }, void 0, !1, {
                      fileName: "app/routes/posts/$postId.tsx",
                      lineNumber: 75,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react24.Form, {
                      method: "post",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                          name: "text",
                          rows: 4,
                          className: "font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blueGreen focus:border-blueGreen sm:text-sm",
                          placeholder: "Comment on this post"
                        }, void 0, !1, {
                          fileName: "app/routes/posts/$postId.tsx",
                          lineNumber: 80,
                          columnNumber: 28
                        }, this),
                        (_a = actionData == null ? void 0 : actionData.errors) != null && _a.post ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "py-1 text-red-700 text-sm",
                          children: actionData == null ? void 0 : actionData.errors.post
                        }, void 0, !1, {
                          fileName: "app/routes/posts/$postId.tsx",
                          lineNumber: 85,
                          columnNumber: 31
                        }, this) : null,
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "flex justify-between mt-2",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                            className: "flex items-center text-gray-50 h-8 px-3 text-sm rounded bg-gray-600 hover:bg-gray-700",
                            children: "Submit"
                          }, void 0, !1, {
                            fileName: "app/routes/posts/$postId.tsx",
                            lineNumber: 88,
                            columnNumber: 31
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/posts/$postId.tsx",
                          lineNumber: 87,
                          columnNumber: 28
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/posts/$postId.tsx",
                      lineNumber: 79,
                      columnNumber: 25
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/posts/$postId.tsx",
                  lineNumber: 74,
                  columnNumber: 22
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/posts/$postId.tsx",
                lineNumber: 73,
                columnNumber: 19
              }, this),
              post.comments.length > 0 ? post.comments.map((comment) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex w-full p-4 border-b border-gray-300",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col items-center ml mr-5 mt-1",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex-shrink-0",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                          src: comment.user.avatar,
                          alt: "Avatar",
                          className: "w-12 h-12 w-12 h-12 sm:w-14 sm:h-14 rounded-full"
                        }, void 0, !1, {
                          fileName: "app/routes/posts/$postId.tsx",
                          lineNumber: 101,
                          columnNumber: 37
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/posts/$postId.tsx",
                        lineNumber: 100,
                        columnNumber: 34
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "font-semibold text-sm mt-4 text-right",
                        children: comment.user.name
                      }, void 0, !1, {
                        fileName: "app/routes/posts/$postId.tsx",
                        lineNumber: 104,
                        columnNumber: 34
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/posts/$postId.tsx",
                    lineNumber: 99,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col flex-grow ml-4",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        className: "mt-1",
                        children: comment.text
                      }, void 0, !1, {
                        fileName: "app/routes/posts/$postId.tsx",
                        lineNumber: 107,
                        columnNumber: 34
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex mt-2",
                        children: [
                          post.user.id === userId ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react24.Form, {
                            action: `/posts/${post.id}/delete`,
                            method: "post",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                                type: "hidden",
                                name: "commentId",
                                value: comment.id
                              }, void 0, !1, {
                                fileName: "app/routes/posts/$postId.tsx",
                                lineNumber: 111,
                                columnNumber: 43
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                className: "pr-3 bg-gray-50 text-right",
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                                  type: "submit",
                                  value: "deleteComment",
                                  className: "inline-flex justify-center py-1.5 px-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-300",
                                  children: "Delete"
                                }, void 0, !1, {
                                  fileName: "app/routes/posts/$postId.tsx",
                                  lineNumber: 113,
                                  columnNumber: 46
                                }, this)
                              }, void 0, !1, {
                                fileName: "app/routes/posts/$postId.tsx",
                                lineNumber: 112,
                                columnNumber: 43
                              }, this)
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/posts/$postId.tsx",
                            lineNumber: 110,
                            columnNumber: 40
                          }, this) : null,
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "text-xsm font-semibold text-gray-500 pt-2",
                            children: (0, import_moment.default)(new Date(comment.date)).fromNow(!0)
                          }, void 0, !1, {
                            fileName: "app/routes/posts/$postId.tsx",
                            lineNumber: 123,
                            columnNumber: 37
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/posts/$postId.tsx",
                        lineNumber: 108,
                        columnNumber: 34
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/posts/$postId.tsx",
                    lineNumber: 106,
                    columnNumber: 31
                  }, this)
                ]
              }, comment.text, !0, {
                fileName: "app/routes/posts/$postId.tsx",
                lineNumber: 98,
                columnNumber: 28
              }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                className: "font-semibold text-lg p-6",
                children: "No comments for this post!"
              }, void 0, !1, {
                fileName: "app/routes/posts/$postId.tsx",
                lineNumber: 132,
                columnNumber: 25
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/posts/$postId.tsx",
            lineNumber: 51,
            columnNumber: 16
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/posts/$postId.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/posts/$postId.tsx",
      lineNumber: 43,
      columnNumber: 10
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/posts/$postId.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this);
}

// app/routes/__auth/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action12,
  default: () => Login,
  loader: () => loader17
});
var import_react25 = require("@remix-run/react");
var import_node23 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader17 = async ({ request }) => {
  let session = await getSession(request);
  if (session.has("token"))
    return (0, import_node23.redirect)("/dashboard");
  let data = { error: session.get("error") };
  return (0, import_node23.json)(data, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session)
    }
  });
}, action12 = async ({ request }) => {
  let session = await getSession(request), fieldNames = ["email", "password"], errorMessages = {
    email: "Email is required",
    password: "Password is required"
  }, { errors, data } = await processFormData(request, fieldNames, errorMessages), { email, password } = data;
  if (errors)
    return (0, import_node23.json)({ errors });
  let userId = await validateCredentials(email, password);
  return userId === null ? (session.flash("error", "Invalid username or password"), (0, import_node23.redirect)("/login", {
    headers: { "Set-Cookie": await sessionStorage.commitSession(session) }
  })) : createUserSession(userId, request, "/dashboard");
};
function Login() {
  var _a, _b;
  let { error } = (0, import_react25.useLoaderData)(), actionData = (0, import_react25.useActionData)(), transition = (0, import_react25.useTransition)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col justify-center py-2 sm:px-6 lg:px-8",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "sm:mx-auto sm:w-full sm:max-w-md",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
          className: "mt-6 text-center text-3xl font-extrabold text-gray-900",
          children: "Sign in to your account"
        }, void 0, !1, {
          fileName: "app/routes/__auth/login.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 60,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mt-8 sm:mx-auto sm:w-full sm:max-w-lg",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react25.Form, {
            className: "space-y-6 xl:space-y-8",
            method: "post",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                    htmlFor: "email",
                    className: "block text-sm font-medium text-gray-700",
                    children: "Email address"
                  }, void 0, !1, {
                    fileName: "app/routes/__auth/login.tsx",
                    lineNumber: 70,
                    columnNumber: 22
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "mt-1",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                        id: "email",
                        name: "email",
                        type: "email",
                        autoComplete: "email",
                        className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      }, void 0, !1, {
                        fileName: "app/routes/__auth/login.tsx",
                        lineNumber: 74,
                        columnNumber: 25
                      }, this),
                      (_a = actionData == null ? void 0 : actionData.errors) != null && _a.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "py-1 text-red-700 text-sm",
                        children: actionData == null ? void 0 : actionData.errors.email
                      }, void 0, !1, {
                        fileName: "app/routes/__auth/login.tsx",
                        lineNumber: 82,
                        columnNumber: 28
                      }, this) : null
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__auth/login.tsx",
                    lineNumber: 73,
                    columnNumber: 22
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 69,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                    htmlFor: "password",
                    className: "block text-sm font-medium text-gray-700",
                    children: "Password"
                  }, void 0, !1, {
                    fileName: "app/routes/__auth/login.tsx",
                    lineNumber: 88,
                    columnNumber: 22
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "mt-1",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                        id: "password",
                        name: "password",
                        type: "password",
                        autoComplete: "current-password",
                        className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      }, void 0, !1, {
                        fileName: "app/routes/__auth/login.tsx",
                        lineNumber: 92,
                        columnNumber: 25
                      }, this),
                      (_b = actionData == null ? void 0 : actionData.errors) != null && _b.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "py-1 text-red-700 text-sm",
                        children: actionData == null ? void 0 : actionData.errors.password
                      }, void 0, !1, {
                        fileName: "app/routes/__auth/login.tsx",
                        lineNumber: 100,
                        columnNumber: 28
                      }, this) : null
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__auth/login.tsx",
                    lineNumber: 91,
                    columnNumber: 22
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "pt-2 text-red-700",
                    role: "alert",
                    children: error
                  }, void 0, !1, {
                    fileName: "app/routes/__auth/login.tsx",
                    lineNumber: 103,
                    columnNumber: 22
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 87,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  type: "submit",
                  disabled: transition.submission,
                  className: "bg-blueGreen text-white w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-medium focus:outline-none hover:bg-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-300",
                  children: "Login"
                }, void 0, !1, {
                  fileName: "app/routes/__auth/login.tsx",
                  lineNumber: 106,
                  columnNumber: 22
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 105,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "text-center text-sm text-gray-500",
                children: [
                  "Don't have an account?",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react25.Link, {
                    to: "/register",
                    className: "text-blue-500",
                    children: "Register"
                  }, void 0, !1, {
                    fileName: "app/routes/__auth/login.tsx",
                    lineNumber: 118,
                    columnNumber: 22
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 116,
                columnNumber: 19
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 68,
            columnNumber: 16
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__auth/login.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 66,
        columnNumber: 10
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__auth/login.tsx",
    lineNumber: 59,
    columnNumber: 7
  }, this);
}

// app/routes/posts/index.tsx
var posts_exports = {};
__export(posts_exports, {
  action: () => action13,
  default: () => PostsIndex,
  loader: () => loader18
});
var import_react26 = require("react"), import_react27 = require("@remix-run/react"), import_node24 = require("@remix-run/node");
var import_moment2 = __toESM(require("moment")), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader18 = async ({ request }) => {
  let posts = await getPostsWithCount();
  return (0, import_node24.json)({
    posts,
    userId: await authenticatedUser(request)
  });
}, action13 = async ({ request }) => {
  let userId = await authenticatedUser(request);
  if (!userId)
    return (0, import_node24.json)({ errors: { post: "You must login or register to create a post" } });
  let user = await getUserById(userId);
  if (!user)
    throw new Error("User not found");
  let text = (await request.formData()).get("text");
  return !text || text.toString().length < 6 ? (0, import_node24.json)({ errors: { post: "Post must be at least 6 characters" } }) : (await createPost(user, text.toString()), (0, import_node24.redirect)("/posts"));
};
function PostsIndex() {
  var _a;
  let { posts, userId } = (0, import_react27.useLoaderData)(), actionData = (0, import_react27.useActionData)(), isAdding = (0, import_react27.useTransition)().state === "submitting", ref = (0, import_react26.useRef)(null), formRef = (0, import_react26.useRef)(null), [liked, setLiked] = (0, import_react26.useState)(!1), handleClick = () => {
    setLiked(!liked);
  };
  return (0, import_react26.useEffect)(() => {
    var _a2;
    isAdding || (_a2 = formRef.current) == null || _a2.reset();
  }, [isAdding]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex justify-center w-screen h-screen px-4 text-gray-700",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex w-full max-w-screen-lg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col flex-grow border-l border-r border-gray-300",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "md:flex md:items-center md:justify-between mx-9",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex-1 min-w-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                className: "text-3xl font-bold leading-7 text-blueGreen sm:text-4xl sm:truncate",
                children: "Posts"
              }, void 0, !1, {
                fileName: "app/routes/posts/index.tsx",
                lineNumber: 74,
                columnNumber: 22
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/posts/index.tsx",
              lineNumber: 73,
              columnNumber: 19
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/posts/index.tsx",
            lineNumber: 72,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex-grow h-0 overflow-auto",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex w-full p-8 border-b-4 border-gray-300",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col flex-grow ml-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "w-full bg-blueGreen font-semibold text-lg text-gray-50 mb-3 px-3 py-1 rounded-sm",
                      children: "Say something..."
                    }, void 0, !1, {
                      fileName: "app/routes/posts/index.tsx",
                      lineNumber: 80,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Form, {
                      ref: formRef,
                      method: "post",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                          name: "text",
                          rows: 4,
                          className: "font-bold appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blueGreen focus:border-blueGreen sm:text-sm",
                          placeholder: "Create a post"
                        }, void 0, !1, {
                          fileName: "app/routes/posts/index.tsx",
                          lineNumber: 85,
                          columnNumber: 28
                        }, this),
                        (_a = actionData == null ? void 0 : actionData.errors) != null && _a.post ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "py-1 text-red-700 text-sm",
                          children: actionData == null ? void 0 : actionData.errors.post
                        }, void 0, !1, {
                          fileName: "app/routes/posts/index.tsx",
                          lineNumber: 90,
                          columnNumber: 31
                        }, this) : null,
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "flex justify-between mt-2",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                            disabled: isAdding,
                            name: "_action",
                            value: "createPost",
                            type: "submit",
                            className: "flex items-center text-gray-50 h-8 px-3 text-sm rounded bg-gray-600 hover:bg-gray-700",
                            children: "Submit"
                          }, void 0, !1, {
                            fileName: "app/routes/posts/index.tsx",
                            lineNumber: 93,
                            columnNumber: 31
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/posts/index.tsx",
                          lineNumber: 92,
                          columnNumber: 28
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/posts/index.tsx",
                      lineNumber: 84,
                      columnNumber: 25
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/posts/index.tsx",
                  lineNumber: 79,
                  columnNumber: 22
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/posts/index.tsx",
                lineNumber: 78,
                columnNumber: 19
              }, this),
              posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex w-full p-4 border-b border-gray-300",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex-shrink-0",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                      src: post.user.avatar,
                      alt: "Avatar",
                      className: "w-12 h-12 w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-full"
                    }, void 0, !1, {
                      fileName: "app/routes/posts/index.tsx",
                      lineNumber: 107,
                      columnNumber: 28
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/posts/index.tsx",
                    lineNumber: 106,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col flex-grow ml-4",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex text-sm pb-2",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "font-semibold",
                            children: post.user.name
                          }, void 0, !1, {
                            fileName: "app/routes/posts/index.tsx",
                            lineNumber: 113,
                            columnNumber: 31
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "ml-4 font-semibold text-gray-500",
                            children: (0, import_moment2.default)(post.date).fromNow(!0)
                          }, void 0, !1, {
                            fileName: "app/routes/posts/index.tsx",
                            lineNumber: 114,
                            columnNumber: 31
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/posts/index.tsx",
                        lineNumber: 112,
                        columnNumber: 28
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          className: "my-1",
                          children: post.text
                        }, void 0, !1, {
                          fileName: "app/routes/posts/index.tsx",
                          lineNumber: 120,
                          columnNumber: 31
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/posts/index.tsx",
                        lineNumber: 119,
                        columnNumber: 28
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex mt-2",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            onClick: handleClick,
                            className: "cursor-pointer px-3 pt-1 bg-gray-200 rounded",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                              className: "flex items-center cursor-pointer",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                                  ref,
                                  className: "fa fa-heart text-red w-6 h-5 pt-0.5 pr-1  "
                                }, void 0, !1, {
                                  fileName: "app/routes/posts/index.tsx",
                                  lineNumber: 128,
                                  columnNumber: 37
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                  className: "text-center",
                                  children: post._count.likes > 0 && post._count.likes
                                }, void 0, !1, {
                                  fileName: "app/routes/posts/index.tsx",
                                  lineNumber: 129,
                                  columnNumber: 37
                                }, this)
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/posts/index.tsx",
                              lineNumber: 127,
                              columnNumber: 34
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/posts/index.tsx",
                            lineNumber: 125,
                            columnNumber: 31
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Link, {
                            to: `/posts/${post.id}`,
                            className: "mx-4 bg-gray-50 text-right",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                              className: "inline-flex justify-center py-1.5 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blueGreen hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-300",
                              children: [
                                "Discussion",
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                  className: "ml-1 bg-gray-200 rounded-xl px-1 pb-0.5 text-gray-600 text-xsm",
                                  children: post._count.comments
                                }, void 0, !1, {
                                  fileName: "app/routes/posts/index.tsx",
                                  lineNumber: 137,
                                  columnNumber: 37
                                }, this)
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/posts/index.tsx",
                              lineNumber: 134,
                              columnNumber: 34
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/posts/index.tsx",
                            lineNumber: 133,
                            columnNumber: 31
                          }, this),
                          userId === post.user.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react27.Form, {
                            ref: formRef,
                            action: "/posts/delete-post",
                            method: "post",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                                type: "hidden",
                                name: "postId",
                                value: post.id
                              }, void 0, !1, {
                                fileName: "app/routes/posts/index.tsx",
                                lineNumber: 144,
                                columnNumber: 37
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                className: "pr-3 bg-gray-50 text-right",
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                                  type: "submit",
                                  disabled: isAdding,
                                  name: "_action",
                                  value: "deletePost",
                                  className: "inline-flex justify-center py-1.5 px-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none",
                                  children: "Delete"
                                }, void 0, !1, {
                                  fileName: "app/routes/posts/index.tsx",
                                  lineNumber: 146,
                                  columnNumber: 40
                                }, this)
                              }, void 0, !1, {
                                fileName: "app/routes/posts/index.tsx",
                                lineNumber: 145,
                                columnNumber: 37
                              }, this)
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/posts/index.tsx",
                            lineNumber: 143,
                            columnNumber: 34
                          }, this) : null
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/posts/index.tsx",
                        lineNumber: 124,
                        columnNumber: 28
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/posts/index.tsx",
                    lineNumber: 111,
                    columnNumber: 25
                  }, this)
                ]
              }, post.id, !0, {
                fileName: "app/routes/posts/index.tsx",
                lineNumber: 105,
                columnNumber: 22
              }, this))
            ]
          }, void 0, !0, {
            fileName: "app/routes/posts/index.tsx",
            lineNumber: 77,
            columnNumber: 16
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/posts/index.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/posts/index.tsx",
      lineNumber: 70,
      columnNumber: 10
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/posts/index.tsx",
    lineNumber: 69,
    columnNumber: 7
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader19
});
var import_react28 = require("@remix-run/react"), import_node25 = require("@remix-run/node"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader19 = async ({ request }) => (0, import_node25.json)({ user: await isAuthenticated(request) });
function Index() {
  let { user } = (0, import_react28.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
      className: "pt-20 h-5/6",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 47,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "max-w-7xl mx-auto sm:px-6 lg:px-8",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "relative shadow-xl sm:rounded-2xl sm:overflow-hidden",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "absolute inset-0",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                        className: "h-full w-full object-cover",
                        src: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100",
                        alt: "People working on laptops"
                      }, void 0, !1, {
                        fileName: "app/routes/index.tsx",
                        lineNumber: 51,
                        columnNumber: 28
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "absolute inset-0 bg-indigo-700 mix-blend-multiply"
                      }, void 0, !1, {
                        fileName: "app/routes/index.tsx",
                        lineNumber: 56,
                        columnNumber: 28
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 50,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "h-full relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                        className: "text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "inline-block text-white",
                            children: "Connect with"
                          }, void 0, !1, {
                            fileName: "app/routes/index.tsx",
                            lineNumber: 60,
                            columnNumber: 31
                          }, this),
                          " ",
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "inline-block text-indigo-200",
                            children: "Developers"
                          }, void 0, !1, {
                            fileName: "app/routes/index.tsx",
                            lineNumber: 61,
                            columnNumber: 31
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/index.tsx",
                        lineNumber: 59,
                        columnNumber: 28
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center",
                        children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react28.Link, {
                          to: "login",
                          className: "flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8",
                          children: "Dashboard"
                        }, void 0, !1, {
                          fileName: "app/routes/index.tsx",
                          lineNumber: 66,
                          columnNumber: 34
                        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react28.Link, {
                              to: "login",
                              className: "font-semibold mr-5 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8",
                              children: "Login"
                            }, void 0, !1, {
                              fileName: "app/routes/index.tsx",
                              lineNumber: 74,
                              columnNumber: 37
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react28.Link, {
                              to: "/register",
                              className: "font-semibold flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8",
                              children: "Register"
                            }, void 0, !1, {
                              fileName: "app/routes/index.tsx",
                              lineNumber: 79,
                              columnNumber: 44
                            }, this)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/index.tsx",
                          lineNumber: 73,
                          columnNumber: 34
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/index.tsx",
                        lineNumber: 64,
                        columnNumber: 28
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 58,
                    columnNumber: 25
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/index.tsx",
                lineNumber: 49,
                columnNumber: 22
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 48,
              columnNumber: 19
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 46,
          columnNumber: 16
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 43,
      columnNumber: 10
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = {
   version: "f16c3e09",
   entry: {
      module: "/build/entry.client-FJVRV73T.js",
      imports: ["/build/_shared/chunk-KZ663W32.js", "/build/_shared/chunk-SMWPKSDY.js"]
   },
   routes: {
      root: {
         id: "root",
         parentId: void 0,
         path: "",
         index: void 0,
         caseSensitive: void 0,
         module: "/build/root-IOZFLRTE.js",
         imports: ["/build/_shared/chunk-TF35UPAM.js"],
         hasAction: !1,
         hasLoader: !0,
         hasCatchBoundary: !1,
         hasErrorBoundary: !0
      },
      "routes/__auth/login": {
         id: "routes/__auth/login",
         parentId: "root",
         path: "login",
         index: void 0,
         caseSensitive: void 0,
         module: "/build/routes/__auth/login-OECH4FZV.js",
         imports: ["/build/_shared/chunk-ENKIADX3.js", "/build/_shared/chunk-O5SOJ3II.js"],
         hasAction: !0,
         hasLoader: !0,
         hasCatchBoundary: !1,
         hasErrorBoundary: !1
      },
      "routes/__auth/logout": {
         id: "routes/__auth/logout",
         parentId: "root",
         path: "logout",
         index: void 0,
         caseSensitive: void 0,
         module: "/build/routes/__auth/logout-GZBFO4HC.js",
         imports: void 0,
         hasAction: !0,
         hasLoader: !1,
         hasCatchBoundary: !1,
         hasErrorBoundary: !1
      },
      "routes/__auth/register": {
         id: "routes/__auth/register",
         parentId: "root",
         path: "register",
         index: void 0,
         caseSensitive: void 0,
         module: "/build/routes/__auth/register-USSEFJUT.js",
         imports: ["/build/_shared/chunk-ENKIADX3.js", "/build/_shared/chunk-O5SOJ3II.js"],
         hasAction: !0,
         hasLoader: !0,
         hasCatchBoundary: !1,
         hasErrorBoundary: !1
      },
      "routes/dashboard/__dashboard": {
         id: "routes/dashboard/__dashboard",
         parentId: "root",
         path: "dashboard/",
         index: void 0,
         caseSensitive: void 0,
         module: "/build/routes/dashboard/__dashboard-PQCIFM6N.js",
         imports: ["/build/_shared/chunk-QBKUEEND.js", "/build/_shared/chunk-ENKIADX3.js"],
         hasAction: !1,
         hasLoader: !0,
         hasCatchBoundary: !1,
         hasErrorBoundary: !1
      },
      "routes/dashboard/__dashboard/create-profile": {
         id: "routes/dashboard/__dashboard/create-profile",
         parentId: "routes/dashboard/__dashboard",
         path: "create-profile",
         index: void 0,
         caseSensitive: void 0,
         module: "/build/routes/dashboard/__dashboard/create-profile-67NG3XCN.js",
         imports: ["/build/_shared/chunk-MQDMLQQO.js", "/build/_shared/chunk-TF35UPAM.js"],
         hasAction: !0,
         hasLoader: !1,
         hasCatchBoundary: !1,
         hasErrorBoundary: !1
      },
      "routes/dashboard/__dashboard/edit-profile": {
         id: "routes/dashboard/__dashboard/edit-profile",
         parentId: "routes/dashboard/__dashboard",
         path: "edit-profile",
         index: void 0,
         caseSensitive: void 0,
         module: "/build/routes/dashboard/__dashboard/edit-profile-WC77XCWU.js",
         imports: ["/build/_shared/chunk-MQDMLQQO.js", "/build/_shared/chunk-TF35UPAM.js"],
         hasAction: !1,
         hasLoader: !0,
         hasCatchBoundary: !1,
         hasErrorBoundary: !1
      },
      "routes/dashboard/__dashboard/education/delete": {
         id: "routes/dashboard/__dashboard/education/delete",
         parentId: "routes/dashboard/__dashboard",
         path: "education/delete",
         index: void 0,
         caseSensitive: void 0,
         module: "/build/routes/dashboard/__dashboard/education/delete-LK7MQTOC.js",
         imports: void 0,
         hasAction: !0,
         hasLoader: !0,
         hasCatchBoundary: !1,
         hasErrorBoundary: !1
      },
      "routes/dashboard/__dashboard/education/edit/$educationId": {
         id: "routes/dashboard/__dashboard/education/edit/$educationId",
         parentId: "routes/dashboard/__dashboard",
         path: "education/edit/:educationId",
         index: void 0,
         caseSensitive: void 0,
         module: "/build/routes/dashboard/__dashboard/education/edit/$educationId-UAQESMQ7.js",
         imports: ["/build/_shared/chunk-LCID5XWU.js", "/build/_shared/chunk-R3RO4OTF.js", "/build/_shared/chunk-TF35UPAM.js"],
         hasAction: !1,
         hasLoader: !0,
         hasCatchBoundary: !1,
         hasErrorBoundary: !1
      },
      "routes/dashboard/__dashboard/education/new": {
         id: "routes/dashboard/__dashboard/education/new",
         parentId: "routes/dashboard/__dashboard",
         path: "education/new",
         index: void 0,
         caseSensitive: void 0,
         module: "/build/routes/dashboard/__dashboard/education/new-GCQ2QDCM.js",
         imports: ["/build/_shared/chunk-O5SOJ3II.js", "/build/_shared/chunk-LCID5XWU.js"],
         hasAction: !0,
         hasLoader: !1,
         hasCatchBoundary: !1,
         hasErrorBoundary: !1
      },
      "routes/dashboard/__dashboard/educations": {
         id: "routes/dashboard/__dashboard/educations",
         parentId: "routes/dashboard/__dashboard",
         path: "educations",
         index: void 0,
         caseSensitive: void 0,
         module: "/build/routes/dashboard/__dashboard/educations-NACE63JH.js",
         imports: ["/build/_shared/chunk-LCID5XWU.js", "/build/_shared/chunk-R3RO4OTF.js", "/build/_shared/chunk-TF35UPAM.js"],
         hasAction: !1,
         hasLoader: !0,
         hasCatchBoundary: !1,
         hasErrorBoundary: !1
      },
      "routes/dashboard/__dashboard/experience/delete": {
         id: "routes/dashboard/__dashboard/experience/delete",
         parentId: "routes/dashboard/__dashboard",
         path: "experience/delete",
         index: void 0,
         caseSensitive: void 0,
         module: "/build/routes/dashboard/__dashboard/experience/delete-RGV3SVV7.js",
         imports: void 0,
         hasAction: !0,
         hasLoader: !0,
         hasCatchBoundary: !1,
         hasErrorBoundary: !1
      },
      "routes/dashboard/__dashboard/experience/edit/$experienceId": {
         id: "routes/dashboard/__dashboard/experience/edit/$experienceId",
         parentId: "routes/dashboard/__dashboard",
         path: "experience/edit/:experienceId",
         index: void 0,
         caseSensitive: void 0,
         module: "/build/routes/dashboard/__dashboard/experience/edit/$experienceId-AVUFQJX4.js",
         imports: ["/build/_shared/chunk-O5SOJ3II.js", "/build/_shared/chunk-AVEI5MXU.js", "/build/_shared/chunk-R3RO4OTF.js", "/build/_shared/chunk-TF35UPAM.js"],
         hasAction: !0,
         hasLoader: !0,
         hasCatchBoundary: !1,
         hasErrorBoundary: !1
      },
      "routes/dashboard/__dashboard/experience/new": {
         id: "routes/dashboard/__dashboard/experience/new",
         parentId: "routes/dashboard/__dashboard",
         path: "experience/new",
         index: void 0,
         caseSensitive: void 0,
         module: "/build/routes/dashboard/__dashboard/experience/new-Q7JYQ5AE.js",
         imports: ["/build/_shared/chunk-O5SOJ3II.js", "/build/_shared/chunk-AVEI5MXU.js"],
         hasAction: !0,
         hasLoader: !1,
         hasCatchBoundary: !1,
         hasErrorBoundary: !1
      },
      "routes/dashboard/__dashboard/experiences": {
         id: "routes/dashboard/__dashboard/experiences",
         parentId: "routes/dashboard/__dashboard",
         path: "experiences",
         index: void 0,
         caseSensitive: void 0,
         module: "/build/routes/dashboard/__dashboard/experiences-NDQDGRFJ.js",
         imports: ["/build/_shared/chunk-AVEI5MXU.js", "/build/_shared/chunk-R3RO4OTF.js", "/build/_shared/chunk-TF35UPAM.js"],
         hasAction: !1,
         hasLoader: !0,
         hasCatchBoundary: !1,
         hasErrorBoundary: !1
      },
      "routes/dashboard/__dashboard/index": {
         id: "routes/dashboard/__dashboard/index",
         parentId: "routes/dashboard/__dashboard",
         path: void 0,
         index: !0,
         caseSensitive: void 0,
         module: "/build/routes/dashboard/__dashboard/index-XYP3CA3D.js",
         imports: ["/build/_shared/chunk-AMVGLWOM.js", "/build/_shared/chunk-R3RO4OTF.js", "/build/_shared/chunk-TF35UPAM.js"],
         hasAction: !1,
         hasLoader: !0,
         hasCatchBoundary: !1,
         hasErrorBoundary: !1
      },
      "routes/dashboard/__dashboard/profile": {
         id: "routes/dashboard/__dashboard/profile",
         parentId: "routes/dashboard/__dashboard",
         path: "profile",
         index: void 0,
         caseSensitive: void 0,
         module: "/build/routes/dashboard/__dashboard/profile-VUZHKCTB.js",
         imports: ["/build/_shared/chunk-NCMAT42P.js", "/build/_shared/chunk-AMVGLWOM.js", "/build/_shared/chunk-R3RO4OTF.js", "/build/_shared/chunk-MQDMLQQO.js", "/build/_shared/chunk-TF35UPAM.js"],
         hasAction: !1,
         hasLoader: !0,
         hasCatchBoundary: !1,
         hasErrorBoundary: !1
      },
      "routes/index": {
         id: "routes/index",
         parentId: "root",
         path: void 0,
         index: !0,
         caseSensitive: void 0,
         module: "/build/routes/index-OIODPH4E.js",
         imports: void 0,
         hasAction: !1,
         hasLoader: !0,
         hasCatchBoundary: !1,
         hasErrorBoundary: !1
      },
      "routes/posts/$postId": {
         id: "routes/posts/$postId",
         parentId: "root",
         path: "posts/:postId",
         index: void 0,
         caseSensitive: void 0,
         module: "/build/routes/posts/$postId-TE57AS7E.js",
         imports: ["/build/_shared/chunk-BAE6T5G7.js"],
         hasAction: !0,
         hasLoader: !0,
         hasCatchBoundary: !1,
         hasErrorBoundary: !1
      },
      "routes/posts/$postId.delete": {
         id: "routes/posts/$postId.delete",
         parentId: "root",
         path: "posts/:postId/delete",
         index: void 0,
         caseSensitive: void 0,
         module: "/build/routes/posts/$postId.delete-GQTMURJ6.js",
         imports: void 0,
         hasAction: !0,
         hasLoader: !0,
         hasCatchBoundary: !1,
         hasErrorBoundary: !1
      },
      "routes/posts/delete-post": {
         id: "routes/posts/delete-post",
         parentId: "root",
         path: "posts/delete-post",
         index: void 0,
         caseSensitive: void 0,
         module: "/build/routes/posts/delete-post-DRJVTCFF.js",
         imports: void 0,
         hasAction: !0,
         hasLoader: !1,
         hasCatchBoundary: !1,
         hasErrorBoundary: !1
      },
      "routes/posts/index": {
         id: "routes/posts/index",
         parentId: "root",
         path: "posts",
         index: !0,
         caseSensitive: void 0,
         module: "/build/routes/posts/index-6NYQOW7M.js",
         imports: ["/build/_shared/chunk-BAE6T5G7.js", "/build/_shared/chunk-ENKIADX3.js"],
         hasAction: !0,
         hasLoader: !0,
         hasCatchBoundary: !1,
         hasErrorBoundary: !1
      },
      "routes/profiles/$profileId": {
         id: "routes/profiles/$profileId",
         parentId: "root",
         path: "profiles/:profileId",
         index: void 0,
         caseSensitive: void 0,
         module: "/build/routes/profiles/$profileId-7RPUATEO.js",
         imports: ["/build/_shared/chunk-NCMAT42P.js", "/build/_shared/chunk-AMVGLWOM.js", "/build/_shared/chunk-R3RO4OTF.js", "/build/_shared/chunk-MQDMLQQO.js"],
         hasAction: !1,
         hasLoader: !0,
         hasCatchBoundary: !1,
         hasErrorBoundary: !1
      },
      "routes/profiles/index": {
         id: "routes/profiles/index",
         parentId: "root",
         path: "profiles",
         index: !0,
         caseSensitive: void 0,
         module: "/build/routes/profiles/index-MC2QWMPH.js",
         imports: ["/build/_shared/chunk-QBKUEEND.js", "/build/_shared/chunk-MQDMLQQO.js"],
         hasAction: !1,
         hasLoader: !0,
         hasCatchBoundary: !1,
         hasErrorBoundary: !1
      }
   },
   url: "/build/manifest-F16C3E09.js"
};

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/dashboard/__dashboard": {
    id: "routes/dashboard/__dashboard",
    parentId: "root",
    path: "dashboard/",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/dashboard/__dashboard/experience/edit/$experienceId": {
    id: "routes/dashboard/__dashboard/experience/edit/$experienceId",
    parentId: "routes/dashboard/__dashboard",
    path: "experience/edit/:experienceId",
    index: void 0,
    caseSensitive: void 0,
    module: experienceId_exports
  },
  "routes/dashboard/__dashboard/education/edit/$educationId": {
    id: "routes/dashboard/__dashboard/education/edit/$educationId",
    parentId: "routes/dashboard/__dashboard",
    path: "education/edit/:educationId",
    index: void 0,
    caseSensitive: void 0,
    module: educationId_exports
  },
  "routes/dashboard/__dashboard/experience/delete": {
    id: "routes/dashboard/__dashboard/experience/delete",
    parentId: "routes/dashboard/__dashboard",
    path: "experience/delete",
    index: void 0,
    caseSensitive: void 0,
    module: delete_exports
  },
  "routes/dashboard/__dashboard/education/delete": {
    id: "routes/dashboard/__dashboard/education/delete",
    parentId: "routes/dashboard/__dashboard",
    path: "education/delete",
    index: void 0,
    caseSensitive: void 0,
    module: delete_exports2
  },
  "routes/dashboard/__dashboard/create-profile": {
    id: "routes/dashboard/__dashboard/create-profile",
    parentId: "routes/dashboard/__dashboard",
    path: "create-profile",
    index: void 0,
    caseSensitive: void 0,
    module: create_profile_exports
  },
  "routes/dashboard/__dashboard/experience/new": {
    id: "routes/dashboard/__dashboard/experience/new",
    parentId: "routes/dashboard/__dashboard",
    path: "experience/new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/dashboard/__dashboard/education/new": {
    id: "routes/dashboard/__dashboard/education/new",
    parentId: "routes/dashboard/__dashboard",
    path: "education/new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports2
  },
  "routes/dashboard/__dashboard/edit-profile": {
    id: "routes/dashboard/__dashboard/edit-profile",
    parentId: "routes/dashboard/__dashboard",
    path: "edit-profile",
    index: void 0,
    caseSensitive: void 0,
    module: edit_profile_exports
  },
  "routes/dashboard/__dashboard/experiences": {
    id: "routes/dashboard/__dashboard/experiences",
    parentId: "routes/dashboard/__dashboard",
    path: "experiences",
    index: void 0,
    caseSensitive: void 0,
    module: experiences_exports
  },
  "routes/dashboard/__dashboard/educations": {
    id: "routes/dashboard/__dashboard/educations",
    parentId: "routes/dashboard/__dashboard",
    path: "educations",
    index: void 0,
    caseSensitive: void 0,
    module: educations_exports
  },
  "routes/dashboard/__dashboard/profile": {
    id: "routes/dashboard/__dashboard/profile",
    parentId: "routes/dashboard/__dashboard",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: profile_exports
  },
  "routes/dashboard/__dashboard/index": {
    id: "routes/dashboard/__dashboard/index",
    parentId: "routes/dashboard/__dashboard",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: dashboard_exports2
  },
  "routes/posts/$postId.delete": {
    id: "routes/posts/$postId.delete",
    parentId: "root",
    path: "posts/:postId/delete",
    index: void 0,
    caseSensitive: void 0,
    module: postId_delete_exports
  },
  "routes/profiles/$profileId": {
    id: "routes/profiles/$profileId",
    parentId: "root",
    path: "profiles/:profileId",
    index: void 0,
    caseSensitive: void 0,
    module: profileId_exports
  },
  "routes/posts/delete-post": {
    id: "routes/posts/delete-post",
    parentId: "root",
    path: "posts/delete-post",
    index: void 0,
    caseSensitive: void 0,
    module: delete_post_exports
  },
  "routes/__auth/register": {
    id: "routes/__auth/register",
    parentId: "root",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/profiles/index": {
    id: "routes/profiles/index",
    parentId: "root",
    path: "profiles",
    index: !0,
    caseSensitive: void 0,
    module: profiles_exports
  },
  "routes/__auth/logout": {
    id: "routes/__auth/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/posts/$postId": {
    id: "routes/posts/$postId",
    parentId: "root",
    path: "posts/:postId",
    index: void 0,
    caseSensitive: void 0,
    module: postId_exports
  },
  "routes/__auth/login": {
    id: "routes/__auth/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/posts/index": {
    id: "routes/posts/index",
    parentId: "root",
    path: "posts",
    index: !0,
    caseSensitive: void 0,
    module: posts_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
