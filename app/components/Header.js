import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between align-middle p-4">
      <div className="flex flex-col md:flex-row md:gap-2">
        <button className="inline-flex w-full md:w-auto px-5 py-3 mb-3 border rounded-md border-purple-500 text-purple-500 font-bold hover:text-purple-800 hover:bg-purple-100">
          <Image
            className="mr-2"
            src={"/svg/edit.svg"}
            width={24}
            height={24}
          />
          Edit LinkTree
        </button>
        <button className="inline-flex w-full md:w-auto px-5 py-3 mb-3 border rounded-md border-red-500 text-red-500 font-bold hover:text-red-800 hover:bg-red-100">
          <Image
            className="mr-2"
            src={"/svg/avatar.svg"}
            width={24}
            height={24}
          />
          Edit Profile
        </button>
      </div>
      <div className="">
        <div className="">
          <div className="flex flex-col flex-wrap text-xs">
            <span className="">Mr. Anoob</span>
            <span className="">Role Pack</span>
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4322/4322991.png"
              alt=""
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
