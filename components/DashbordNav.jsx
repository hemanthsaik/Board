import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashbordNav = () => {
  const navItems = [
    {
      id: 0,
      name: "Dashboard",
      src: "/assets/icons/dashboard_icon.svg",
      link: "/dashboard",
    },
    {
      id: 1,
      name: "Transactions",
      src: "/assets/icons/transaction_icon.svg",
      link: "/dashboard/transaction",
    },
    {
      id: 2,
      name: "Schedules",
      src: "/assets/icons/schedule_icon.svg",
      link: "/dashboard/schedule",
    },
    {
      id: 3,
      name: "Users",
      src: "/assets/icons/user_icon.svg",
      link: "/dashboard/users",
    },
    {
      id: 4,
      name: "Settings",
      src: "/assets/icons/setting_icon.svg",
      link: "/dashboard/setting",
    },
  ];
  return (
    <div className="w-1/5 py-[60px] px-[50px] bg-black text-white rounded-[30px] hidden lg:block">
      <div className="h-full flex i flex-col justify-between">
        <div className="flex flex-col gap-14">
          <h1 className="text-3xl font-bold">Board.</h1>
          <div className="flex flex-col gap-7">
            {navItems.map((nav) => (
              <Link
                key={nav.id}
                href={nav.link}
                className="flex gap-3 text-sm font-light"
              >
                <Image src={nav.src} width={15} height={15} /> {nav.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="text-xs font-light flex flex-col gap-3">
          <Link href="/dashbord/help">Help</Link>
          <Link href="/dashbord/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default DashbordNav;
