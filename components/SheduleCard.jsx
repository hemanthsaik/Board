import React from "react";

const SheduleCard = () => {
  return (
    <div className="bg-white rounded-xl px-10 py-3">
      <div className="flex justify-between">
        <h1 className="text-lg font-bold">Today’s schedule</h1>
        <p className="text-xs text-gray-400">See All</p>
      </div>
      <div>
        <div className="border-l-[6px] border-[#9BDD7C] pl-2 my-2">
          <p className="text-sm">Meeting with suppliers from Kuta Bali</p>
          <p className="text-xs text-gray-400 my-1">14.00-15.00</p>
          <p className="text-xs text-gray-400 my-1">
            at Sunset Road, Kuta, Bali
          </p>
        </div>
        <div className="border-l-[6px] border-[#6972C3] pl-2 my-2">
          <p className="text-sm">Check operation at Giga Factory 1</p>
          <p className="text-xs text-gray-400 my-1">18.00-20.00</p>
          <p className="text-xs text-gray-400 my-1">at Central Jakarta</p>
        </div>
      </div>
    </div>
  );
};

export default SheduleCard;
