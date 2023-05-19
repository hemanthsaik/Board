"use client";
import Cards from "@/components/Card";
import Graph from "@/components/Graph";
import PiechartCard from "@/components/PiechartCard";
import Profile from "@/components/Profile";
import SheduleCard from "@/components/SheduleCard";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Dashbord = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(session, status);
  if (status === "unauthenticated") {
    router.push("/signin");
  }
  return (
    <section className="h-full flex flex-col gap-5 mx-auto text-black items-center">
      <div className="w-full flex justify-between items-center ">
        <h2>Dashbord</h2>
        <div className="flex gap-6">
          <div className="bg-white flex px-3 py-1 rounded-xl h-8 my-auto">
            <input type="text" placeholder="Search" className="outline-none" />
            <Image src="/assets/icons/search.svg" width={15} height={15} />
          </div>
          <Image src="/assets/icons/bell_icon.svg" width={20} height={20} />
          <div className="">
            <Profile image={session?.user.image} />
          </div>
        </div>
      </div>
      {/* CardList */}
      <Cards />
      {/* graph */}
      <Graph />
      <div className="w-full grid lg:grid-cols-2 gap-10">
        <PiechartCard />
        <SheduleCard />
      </div>
    </section>
  );
};

export default Dashbord;
