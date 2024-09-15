import { Tooltip } from "@geist-ui/core";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const DashboardButton = () => {
  const router = useRouter();
  const copyLink = () => {
    const link = `https://linktree.com/${router.query.handle}`;
    navigator.clipboard.writeText(link);
    toast("Copied to clipboard");
  };

  return (
    <>
      <Link
        href={"/dashboard"}
        className="absolute top-24 right-0 pt-2  pr-2 pl-3 rounded-s-full shadow-xl bg-indigo-300 transition-all duration-300 hover:px-5 z-10"
      >
        <Tooltip
          text={"Dashboard"}
          type="dark"
          placement="bottomEnd"
          leaveDelay={0}
          hideArrow
        >
          <Image
            src={"/svg/dashboard.svg"}
            width={40}
            height={40}
            alt="share"
          />
        </Tooltip>
      </Link>
    </>
  );
};

export default DashboardButton;
