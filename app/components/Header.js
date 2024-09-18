import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "@geist-ui/core";
import UserContext from "@/context/userContext";
import Loader from "./Loader";

const Header = () => {
  const [loading, setLoading] = React.useState(true);
  const handleLogout = () => {
    localStorage.removeItem("LinkTreeToken");
    localStorage.removeItem("userHandle");
    localStorage.removeItem("ally-supports-cache");
    setUserData({});
    return (window.location.href = "/login");
  };

  const { userData, setUserData } = React.useContext(UserContext);
  const { name, role, avatar, handle } = userData;

  React.useEffect(() => {
    if (!localStorage.getItem("LinkTreeToken"))
      return (window.location.href = "/login");
    setLoading(true);
    fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL ||
        "https://linktree-nextjs-server.vercel.app/"
      }data/dashboard`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          tokenMail: localStorage.getItem("LinkTreeToken"),
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") return toast.error("Error");
        setUserData(data.userData);
        localStorage.setItem("userHandle", data.userData.handle);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setInterval(() => {
          window.location.reload();
        }, 10000);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <Loader loaderState="Loading..." />
        </div>
      ) : (
        <header className="flex flex-row justify-between items-start">
          <div className="flex flex-row gap-2 p-3">
            <Tooltip
              text={"Edit Links"}
              type="dark"
              placement="bottomStart"
              leaveDelay={0}
              hideArrow
            >
              <Link
                href={"/edit/links"}
                className="inline-flex w-auto px-3 py-3 mb-3 border rounded-md border-purple-500 text-purple-500 font-bold hover:text-purple-800 hover:bg-purple-100"
              >
                <Image
                  src={"/svg/edit.svg"}
                  width={24}
                  height={24}
                  alt="Edit Links"
                />
                <span className="hidden md:block ml-2">Edit Links</span>
              </Link>
            </Tooltip>
            <Tooltip
              text={"Edit Profile"}
              type="dark"
              placement="bottom"
              leaveDelay={0}
              hideArrow
            >
              <Link
                href={"/edit/profile"}
                className="inline-flex w-auto px-3 py-3 mb-3 border rounded-md border-red-500 text-red-500 font-bold hover:text-red-800 hover:bg-red-100"
              >
                <Image
                  src={"/svg/avatar.svg"}
                  width={24}
                  height={24}
                  alt="Edit Profile"
                />
                <span className="hidden md:block ml-2">Edit Profile</span>
              </Link>
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
              <Link href={`/${handle}`}>
                <div className="inline-flex items-center w-auto px-3 py-2 mb-3 border rounded-md bg-gray-200 hover:bg-gray-300">
                  <div className="flex flex-col text-xs text-right mr-2">
                    <span className="font-bold">{name || "@" + handle}</span>
                    <span>{role} Pack</span>
                  </div>
                  <div className="user-img rounded-full overflow-hidden">
                    <img src={avatar} width={32} height={32} alt={handle} />
                  </div>
                </div>
              </Link>
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
      )}
    </>
  );
};

export default Header;
