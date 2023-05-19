import React from "react";
import PieChart from "./PieChart";

const PiechartCard = () => {
  return (
    <div className="bg-white  rounded-xl px-10 py-3">
      <div className="flex justify-between">
        <h1 className="text-lg font-bold">Top products</h1>
        <p className="text-xs text-gray-400">May - June 2021</p>
      </div>
      <div className="flex gap-5">
        <div className="w-1/2 ">
          <PieChart />
        </div>
        <div className="w-1/2 ">
          <ul>
            <li className="mt-2 flex ">
              <span className="inline-block w-3 h-3 rounded-full bg-[#98D89E] mr-2 mt-2"></span>
              <div>
                <p className="text-sm font-bold">Basic Tees</p>
                <p className="text-xs text-gray-400">55%</p>
              </div>
            </li>
            <li className="mt-2 flex">
              <span className="inline-block w-3 h-3 rounded-full bg-[#F7DC7D] mr-2 mt-2"></span>
              <div>
                <p className="text-sm font-bold">Custom Short Pants</p>
                <p className="text-xs text-gray-400">31%</p>
              </div>
            </li>
            <li className="mt-2 flex">
              <span className="inline-block w-3 h-3 rounded-full bg-[#EE8484] mr-2 mt-2"></span>
              <div>
                <p className="text-sm font-bold">Super Hoodies</p>
                <p className="text-xs text-gray-400">14%</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PiechartCard;
