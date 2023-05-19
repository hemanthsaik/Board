"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Profile = ({ image }) => {
  const [toogleDropdown, setToogleDropdown] = useState(false);
  console.log(toogleDropdown);
  return (
    <div>
      {image && (
        <div className="relative inline-block text-left">
          <Image
            src={image}
            className=" border border-gray-200 rounded-full cursor-pointer"
            width={40}
            height={40}
            alt="profile"
            onClick={() => setToogleDropdown((prev) => !prev)}
          />
        </div>
      )}

      {toogleDropdown && (
        <div className="absolute right-10 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="w-full flex flex-col p-4">
            <Link
              href="/profile"
              className="text-center w-full"
              onClick={() => setToogleDropdown(false)}
            >
              My Profile
            </Link>
            <button
              type="button"
              className="mt-5 w-full bg-black text-white py-1 rounded-lg hover:border hover:border-black hover:bg-white hover:text-black"
              onClick={() => {
                setToogleDropdown(false);
                signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;

// return(<div className="sm:hidden flex relative">
//         { (
//           <div className="flex">
//             <Image
//               src={session?.user.image}
//               width={37}
//               height={37}
//               className="rounded-full cursor-pointer"
//               alt="profile"
//               onClick={() => setToogleDropdown((prev) => !prev)}
//             />
//             {toogleDropdown && (
{
  /* <div className="dropdown">
  <Link
    href="/profile"
    className="dropdown_link"
    onClick={() => setToogleDropdown(false)}
  >
    My Profile
  </Link>
  <Link
    href="/create-prompt"
    className="dropdown_link"
    onClick={() => setToogleDropdown(false)}
  >
    Create Prompt
  </Link>
  <button
    type="button"
    className="mt-5 w-full black_btn"
    onClick={() => {
      setToogleDropdown(false);
      signOut();
    }}
  >
    Sign Out
  </button> */
}
// </div>;
//             )}
//           </div>
// })
