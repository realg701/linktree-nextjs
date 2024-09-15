import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const SocialTree = ({ social }) => {
  console.log(social);
  const { facebook, twitter, instagram, youtube, linkedin, github, tiktok } =
    social;
  return (
    <>
      <AnimatePresence>
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 1 },
          }}
        >
          <div className="social flex flex-row justify-center items-center gap-2 p-3">
            <Link
              className="rounded-full border border-gray-700 p-1 hover:bg-zinc-300 transition-all duration-500 hover:scale-110"
              href={`https://github.com/${github}`}
              target="_blank"
            >
              <Image
                src={"/svg/socials/github.svg"}
                width={28}
                height={28}
                alt="Facebook"
              />
            </Link>
            <Link
              className="rounded-full border border-gray-700 p-1 hover:bg-zinc-300 transition-all duration-500 hover:scale-110"
              href={`https://twitter.com/${twitter}`}
              target="_blank"
            >
              <Image
                src={"/svg/socials/twitter.svg"}
                width={28}
                height={28}
                alt="Facebook"
              />
            </Link>
            <Link
              className="rounded-full border border-gray-700 p-1 hover:bg-zinc-300 transition-all duration-500 hover:scale-110"
              href={`https://facebook.com/${facebook}`}
              target="_blank"
            >
              <Image
                src={"/svg/socials/facebook.svg"}
                width={28}
                height={28}
                alt="Facebook"
              />
            </Link>
            <Link
              className="rounded-full border border-gray-700 p-1 hover:bg-zinc-300 transition-all duration-500 hover:scale-110"
              href={`https://instagram.com/${instagram}`}
              target="_blank"
            >
              <Image
                src={"/svg/socials/instagram.svg"}
                width={28}
                height={28}
                alt="Facebook"
              />
            </Link>
            <Link
              className="rounded-full border border-gray-700 p-1 hover:bg-zinc-300 transition-all duration-500 hover:scale-110"
              href={`https://youtube.com/${youtube}`}
              target="_blank"
            >
              <Image
                src={"/svg/socials/youtube.svg"}
                width={28}
                height={28}
                alt="Facebook"
              />
            </Link>
            <Link
              className="rounded-full border border-gray-700 p-1 hover:bg-zinc-300 transition-all duration-500 hover:scale-110"
              href={`https://tiktok.com/${tiktok}`}
              target="_blank"
            >
              <Image
                src={"/svg/socials/tiktok.svg"}
                width={28}
                height={28}
                alt="Facebook"
              />
            </Link>
            {linkedin && (
              <Link
                className="rounded-full border border-gray-700 p-1 hover:bg-zinc-300 transition-all duration-500 hover:scale-110"
                href={`https://linkedin.com/${linkedin}`}
                target="_blank"
              >
                <Image
                  src={"/svg/socials/linkedin.svg"}
                  width={28}
                  height={28}
                  alt="Facebook"
                />
              </Link>
            )}
          </div>
        </motion.span>
      </AnimatePresence>
    </>
  );
};

export default SocialTree;
