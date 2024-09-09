import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
// import { ToolTip } from "./ToolTip";
import { Tooltip } from "@geist-ui/core";

const Header = ({ data }) => {
  const router = useRouter();
  // console.log(data);
  const { name, role, avatar, handle, links } = data;
  const handleLogout = () => {
    localStorage.removeItem("LinkTreeToken");
    router.push("/login");
  };

  return (
    <header className="flex flex-row justify-between items-start">
      <div className="flex flex-row gap-2 p-3">
        <Tooltip
          text={"Edit Links"}
          type="dark"
          placement="bottomStart"
          leaveDelay={0}
          hideArrow
        >
          <button className="inline-flex w-auto px-3 py-3 mb-3 border rounded-md border-purple-500 text-purple-500 font-bold hover:text-purple-800 hover:bg-purple-100">
            <Image
              src={"/svg/edit.svg"}
              width={24}
              height={24}
              alt="Edit Links"
            />
            <span className="hidden md:block ml-2">Edit Links</span>
          </button>
        </Tooltip>
        <Tooltip
          text={"Edit Profile"}
          type="dark"
          placement="bottom"
          leaveDelay={0}
          hideArrow
        >
          <button className="inline-flex w-auto px-3 py-3 mb-3 border rounded-md border-red-500 text-red-500 font-bold hover:text-red-800 hover:bg-red-100">
            <Image
              src={"/svg/avatar.svg"}
              width={24}
              height={24}
              alt="Edit Profile"
            />
            <span className="hidden md:block ml-2">Edit Profile</span>
          </button>
        </Tooltip>
      </div>
      <div className="flex flex-row gap-2 ps-0 p-3">
        <Tooltip
          text={"Account"}
          type="dark"
          placement="bottom"
          leaveDelay={0}
          hideArrow
        >
          <a href={`/${handle}`}>
            <div className="inline-flex items-center w-auto px-3 py-2 mb-3 border rounded-md bg-gray-200 hover:bg-gray-300">
              <div className="flex flex-col text-xs text-right mr-2">
                <span className="font-bold">{handle || "Mr. AnOob"}</span>
                <span className="">{role} Pack</span>
              </div>
              <div className="user-img">
                <img src={avatar} width={32} height={32} alt={handle} />
              </div>
            </div>
          </a>
        </Tooltip>
        <div className="inline-flex justify-end gap-2">
          <Tooltip
            text={"Notifications"}
            type="dark"
            placement="bottom"
            leaveDelay={0}
            hideArrow
          >
            <span className="inline-flex w-auto px-3 py-3 mb-3 border rounded-md bg-gray-200 hover:bg-gray-300">
              <Image
                src={"/svg/notify.svg"}
                width={24}
                height={24}
                alt="Notifications"
              />
            </span>
          </Tooltip>
          <Tooltip
            text={"LogOut"}
            type="dark"
            placement="bottomEnd"
            leaveDelay={0}
            hideArrow
          >
            <span className="inline-flex w-auto px-3 py-3 mb-3 border rounded-md bg-gray-200 hover:bg-gray-300">
              <Image
                onClick={handleLogout}
                src={"/svg/logout.svg"}
                width={24}
                height={24}
                alt="LogOut"
              />
            </span>
          </Tooltip>
        </div>
      </div>
    </header>
  );
};

export default Header;
