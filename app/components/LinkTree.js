"use client";
import React from "react";
import LinkTreeCard from "./LinkTreeCard";
import { AnimatePresence, motion } from "framer-motion";

const LinkTree = ({ data, handle }) => {
  const { name, avatar, bio, links } = data;

  return (
    <>
      <section className="relative max-w-3xl md:w-2/3 my-0 mx-auto">
        <img
          className="absolute w-32 h-32 mt-6 rounded-full left-1/2 -translate-x-1/2"
          src={avatar}
          alt="Avatar"
        />
        <h2 className="pt-40 text-center text-lg font-bold">
          {name || handle}
        </h2>
        {name && (
          <h2 className="pb-2 text-center font-medium text-gray-500">
            @{handle}
          </h2>
        )}
        <p className="text-center">{bio}</p>
        <div className="p-5">
          <AnimatePresence>
            {links.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1 + 0.5 },
                }}
              >
                <LinkTreeCard link={link} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default LinkTree;
