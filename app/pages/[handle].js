import React, { useEffect, useState } from "react";
import LinkTree from "@/components/LinkTree";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Link from "next/link";
import SocialTree from "@/components/SocialTree";

const Handle = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  const [userFound, setUserFound] = useState(false);
  useEffect(() => {
    if (router.query?.handle) {
      fetch(`http://localhost:8080/get/${router.query.handle}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "error") return toast.error(data.error);
          if (data.status === "success") {
            setData(data.userData);
            setUserFound(true);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [router.query]);

  if (!userFound) {
    return (
      <div className="not-found relative max-w-3xl md:w-2/3 my-0 mx-auto text-center">
        <img
          className="absolute w-32 h-32 mt-6 p-4 rounded-full left-1/2 -translate-x-1/2 bg-gray-300"
          src="/svg/avatar.svg"
          alt=""
        />
        <h2 className="pt-40 text-lg font-bold">
          Sorry, this page or user isn't available.
        </h2>
        <p>
          The link you followed may be broken, or the page may have been
          removed. Go back to{" "}
          <Link className="text-indigo-500 hover:text-indigo-800" href={"/"}>
            LinkTree
          </Link>
          .
        </p>
        <div className="p-5">
          <p className="mb-3 p-4 rounded-xl hover:translate-x-1 hover:translate-y-1 transition-all duration-500 bg-indigo-400 hover:bg-indigo-500 text-white">
            <Link href={"/apply"}>Create you own LinkTree</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <LinkTree data={data} />
      <SocialTree />
    </div>
  );
};

export default Handle;
