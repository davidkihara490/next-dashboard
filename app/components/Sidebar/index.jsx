"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import useLocalStorage from "@/app/hooks/useLocalStorage";
import ClickOutside from "../ClickOutside";
import SidebarItem from "./SidebarItem";
import { useAuth } from "@/app/context/AuthContext";

// const menuGroups = [
//   {
//     name: "MENU",
//     menuItems: [
//       {

//         label: "Dashboard",
//         route: "/dashboard",
//         role: ["admin"]
//         // children: [{ label: "eCommerce", route: "/" }],
//       },
//       {
//         label: "Categories",
//         route: "/dashboard/categories",
//       },
//       {
//         icon: (
//           <svg
//             className="fill-current"
//             width="18"
//             height="18"
//             viewBox="0 0 18 18"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M9.0002 7.79065C11.0814 7.79065 12.7689 6.1594 12.7689 4.1344C12.7689 2.1094 11.0814 0.478149 9.0002 0.478149C6.91895 0.478149 5.23145 2.1094 5.23145 4.1344C5.23145 6.1594 6.91895 7.79065 9.0002 7.79065ZM9.0002 1.7719C10.3783 1.7719 11.5033 2.84065 11.5033 4.16252C11.5033 5.4844 10.3783 6.55315 9.0002 6.55315C7.62207 6.55315 6.49707 5.4844 6.49707 4.16252C6.49707 2.84065 7.62207 1.7719 9.0002 1.7719Z"
//               fill=""
//             />
//             <path
//               d="M10.8283 9.05627H7.17207C4.16269 9.05627 1.71582 11.5313 1.71582 14.5406V16.875C1.71582 17.2125 1.99707 17.5219 2.3627 17.5219C2.72832 17.5219 3.00957 17.2407 3.00957 16.875V14.5406C3.00957 12.2344 4.89394 10.3219 7.22832 10.3219H10.8564C13.1627 10.3219 15.0752 12.2063 15.0752 14.5406V16.875C15.0752 17.2125 15.3564 17.5219 15.7221 17.5219C16.0877 17.5219 16.3689 17.2407 16.3689 16.875V14.5406C16.2846 11.5313 13.8377 9.05627 10.8283 9.05627Z"
//               fill=""
//             />
//           </svg>
//         ),
//         label: "Users",
//         route: "/dashboard/users",
//       },
//     ],
//   },
//   {
//     name: "SETTINGS",
//     menuItems: [
//       {
//         label: "Settings",
//         route: "/dashboard/settings",
//       },
//     ],
//   },
// ];


const menuItems = [
  {
    icon: "🏠", // Replace with a Flat Icon SVG
    label: "Dashboard",
    route: "/dashboard",
    role: ["admin", "superadmin"], // Accessible to both roles
  },
  {
    icon: "📂", // Replace with a Flat Icon SVG
    label: "Categories",
    route: "/dashboard/categories",
    role: ["admin"], // Accessible to admin only
  },
  {
    icon: "👤", // Replace with a Flat Icon SVG
    label: "Users",
    route: "/dashboard/users",
    role: ["admin", "superadmin"], // Accessible to both roles
  },
  {
    icon: "⚙️", // Replace with a Flat Icon SVG
    label: "Settings",
    route: "/dashboard/settings",
    role: ["superadmin"], // Accessible to superadmin only
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {

  const { user } = useAuth();
  const pathname = usePathname();
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  const filteredMenu = menuItems.filter(
    (item) => !item.roles || item.roles.includes(user?.role)
  );

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
          <Link href="/">
            <Image
              width={176}
              height={32}
              src={"/images/logo/logo.svg"}
              alt="Logo"
              priority
            />
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
            {menuItems.map((item, itemIndex) => (
              <div key={itemIndex}>
                <ul className="mb-6 flex flex-col gap-1.5">
                  <SidebarItem
                    key={itemIndex}
                    item={item}
                    pageName={pageName}
                    setPageName={setPageName}
                  />
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;