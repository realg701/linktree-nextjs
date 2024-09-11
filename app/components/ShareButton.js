import { Tooltip } from "@geist-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const ShareButton = () => {
  const router = useRouter();
  const copyLink = () => {
    const link = `https://linktree.com/${router.query.handle}`;
    navigator.clipboard.writeText(link);
    toast("Copied to clipboard");
  };

  return (
    <>
      <div
        className="absolute top-24 p-1 pl-2 pr-3 rounded-e-full shadow-xl bg-indigo-300 transition-all duration-300 hover:px-5 z-10"
        onClick={copyLink}
      >
        <Tooltip
          text={"Share LinkTree"}
          type="dark"
          placement="bottomStart"
          leaveDelay={0}
          hideArrow
        >
          <Image src={"/svg/share.svg"} width={40} height={40} alt="share" />
        </Tooltip>
      </div>
    </>
  );
};

export default ShareButton;
