import { Link, useLoaderData } from "@remix-run/react";

export default () => {
   const { user } = useLoaderData();

   const links = [
      { label: 'Developers', to: '/profiles', isActionRoute: false },
      { label: 'Posts', to: '/posts', isActionRoute: false },
      !user && { label: 'Register', to: '/register', isActionRoute: false },
      !user && { label: 'Login', to: '/login', isActionRoute: false },
      user && { label: 'Dashboard', to: '/dashboard', isActionRoute: false },
      user && { label: 'Logout', to: '/logout', isActionRoute: true }
   ];

   const linkClassName = "no-underline cursor-pointer inline-block leading-5 px-4 py-2 border border-white rounded sm:inline-block sm:mt-0 text-teal-200 mr-5 text-slate-50 hover:border-transparent hover:text-blue-800 hover:bg-white";

   const renderLink = (label: string, to: string, isActionRoute: boolean = false) => {
      if (isActionRoute) {
         return (
            <div className="inline-block" key={to}>
               <form action={to} method="post">
                  <button type="submit" className={linkClassName}>{label}</button>
               </form>
            </div>
         );
      } else {
         return (
            <Link to={to} key={to} className={linkClassName}>
               {label}
            </Link>
         );
      }
   };

   const displayLinks = links.filter(linkConfig => linkConfig)
      .map(({ label, to, isActionRoute }) => {
         return renderLink(label, to, isActionRoute);
      });

   return (
      <div className="bg-gray-800 flex justify-center fixed w-full z-50">
         <nav className="flex items-center justify-between px-6 py-3 max-w-screen-2xl w-screen">
            <Link to="/">
               <div className="flex items-center flex-shrink-0 text-white mr-6 pl-1.5 hover:cursor-pointer">
                  <span className="font-bold text-2xl">{"</> DevMeet"}</span>
               </div>
            </Link>

            <div className="w-full block sm:flex sm:items-center sm:w-auto">
               <div className="text-sm sm:flex-grow -mr-5">
                  {displayLinks}
               </div>
            </div>
         </nav>
      </div>
   );
}