import { Tooltip } from "@geist-ui/core";
import Image from "next/image";
import Link from "next/link";

const DashboardButton = () => {
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
            alt="dashboard"
            style={{ padding: 2 }}
          />
        </Tooltip>
      </Link>
    </>
  );
};

export default DashboardButton;
