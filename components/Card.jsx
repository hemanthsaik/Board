import Image from "next/image";
import React from "react";

const Cards = () => {
  const cardDetails = [
    {
      id: 0,
      color: "bg-lightgreen",
      src: "/assets/icons/revanue.svg",
      name: "Total Revenues",
      details: "$2,129,430",
    },
    {
      id: 1,
      color: "bg-cream",
      src: "/assets/icons/transaction.svg",
      name: "Total Transactions",
      details: "1,520",
    },
    {
      id: 2,
      color: "bg-lightpink",
      src: "/assets/icons/like.svg",
      name: "Total Likes",
      details: "9,721",
    },
    {
      id: 3,
      color: "bg-lightvoilet",
      src: "/assets/icons/users.svg",
      name: "Total Users",
      details: "892",
    },
  ];
  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {cardDetails.map((card) => (
        <div
          key={card.id}
          className={` w-[221px] h-[120px] p-3 ${card.color} rounded-xl `}
        >
          <div className="flex justify-end">
            <Image className="" src={card.src} width={24} height={24} />
          </div>
          <p className="">{card.name}</p>
          <p className="mt-2 text-2xl font-bold">{card.details}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
