import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("LinkTreeToken");
    router.push("/login");
  };

  return (
    <header className="flex flex-row justify-between items-start">
      <div className="flex flex-col md:flex-row md:gap-2 p-3">
        <button className="inline-flex w-full md:w-auto px-5 py-3 mb-3 border rounded-md border-purple-500 text-purple-500 font-bold hover:text-purple-800 hover:bg-purple-100">
          <Image
            className="mr-2"
            src={"/svg/edit.svg"}
            width={24}
            height={24}
          />
          Edit Links
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
      <div className="flex flex-col md:flex-row gap-2 p-3">
        <div className="inline-flex justify-center items-center rounded-md cursor-pointer bg-gray-200 hover:bg-gray-300 py-2 px-5">
          <div className="flex flex-col flex-wrap text-xs text-right mr-2">
            <span className="font-bold">Mr. Anoob</span>
            <span className="">Creator Pack</span>
          </div>
          <div className="user-img">
            <img
              className="w-10 h-10"
              src="https://cdn-icons-png.flaticon.com/512/4322/4322991.png"
              alt=""
            />
          </div>
        </div>
        <div className="inline-flex justify-end gap-2">
          <img
            className="w-12 h-14 px-3 rounded-md bg-gray-200 hover:bg-gray-300"
            src={"/svg/notify.svg"}
          />
          <img
            onClick={handleLogout}
            className="w-12 h-14 px-3 rounded-md bg-gray-200 hover:bg-gray-300"
            src={"/svg/logout.svg"}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
