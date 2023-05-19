import DashbordNav from "@/components/DashbordNav";
import React from "react";

const DashbordLayout = ({ children }) => {
  return (
    <main className="flex p-4 max-w-screen-xl mx-auto h-screen gap-14">
      <DashbordNav />
      <div className="w-4/5 h-full p-3">{children}</div>
    </main>
  );
};

export default DashbordLayout;
