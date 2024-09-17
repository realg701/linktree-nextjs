import Image from "next/image";
import Link from "next/link";
import React from "react";

const LinkTreeCard = ({ link }) => {
  const { title, url, icon } = link;
  console.log(link);
  return (
    <>
      <span className="w-full">
        <Link
          className="flex flex-row items-center mb-3 p-2 rounded-xl hover:translate-x-1 hover:translate-y-1 transition-all duration-500 bg-indigo-400 hover:bg-indigo-500 text-white"
          href={url}
          target="_blank"
        >
          <Image
            className="bg-white rounded-full p-1 mr-5"
            src={
              icon ||
              `/svg/socials/${title.toLowerCase()}.svg` ||
              "/svg/no-image.svg"
            }
            width={50}
            height={50}
            alt={title}
          />

          <h4>{title}</h4>
        </Link>
      </span>
    </>
  );
};

export default LinkTreeCard;
