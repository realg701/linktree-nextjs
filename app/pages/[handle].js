import React from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Link from "next/link";
import MyHead from "@/components/MyHead";
import Loader from "@/components/Loader";
import LinkTree from "@/components/LinkTree";
import SocialTree from "@/components/SocialTree";
import ShareButton from "@/components/ShareButton";
import DashboardButton from "@/components/DashboardButton";
import UserContext from "@/context/userContext";

const Handle = () => {
  const router = useRouter();
  const { userData } = React.useContext(UserContext);
  const [data, setData] = React.useState({});
  const [userFound, setUserFound] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [social, setSocial] = React.useState({
    facebook: "",
    twitter: "",
    instagram: "",
    youtube: "",
    tiktok: "",
    linkedin: "",
    github: "",
  });

  React.useEffect(() => {
    if (router.query?.handle) {
      fetch(
        `${
          process.env.NEXT_PUBLIC_BASE_URL ||
          "https://linktree-nextjs-server.vercel.app/"
        }get/${router.query.handle}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "error") {
            setLoading(false);
            return toast.error("User not available");
          }
          if (data.status === "success") {
            setData(data.userData);
            setSocial(data.socials);
            setUserFound(true);
            setLoading(false);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [router.query]);

  return (
    <>
      <MyHead
        title={router.query.handle || "Loading..."}
        description="Welcome to LinkTree, where we you keep all your links in one place"
        image="https://typefinance.com/typefinance-dp.jpg"
        url="https://typefinance.com"
      />
      {loading ? (
        <Loader loaderState="Loading..." />
      ) : (
        <>
          {userFound ? (
            <>
              <ShareButton />
              {userData.handle && <DashboardButton />}
              <LinkTree data={data} handle={router.query.handle} />
              <SocialTree social={social} />
            </>
          ) : (
            <>
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
                  <Link
                    className="text-indigo-500 hover:text-indigo-800"
                    href={"/"}
                  >
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
            </>
          )}
        </>
      )}
    </>
  );
};

export default Handle;
