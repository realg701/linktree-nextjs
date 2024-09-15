import Link from "next/link";
import MyHead from "../components/MyHead";
import { useEffect, useState } from "react";

export default function Home() {
  const [open, setOpen] = useState("Apply");

  useEffect(() => {
    if (localStorage.getItem("LinkTreeToken")) setOpen("Dashboard");
  }, []);
  return (
    <>
      <MyHead
        title="Home"
        description="Welcome to TypeFinance, where we help you to choose the best financing for you"
        image="https://typefinance.com/typefinance-dp.jpg"
        url="https://typefinance.com"
      />

      <main className="flex flex-col justify-center items-center min-h-dvh -mt-16">
        <h1 className="text-center">
          Welcome to <br />
          <span className="text-indigo-600 font-semibold">
            NextJS Featured LinkTree
          </span>
        </h1>
        <Link
          title="Notice the page loader"
          className="bg-indigo-600 rounded-sm inline-block my-2 p-1 px-2 text-white"
          href={`/${open.toLowerCase()}`}
        >
          {open}
        </Link>
      </main>
    </>
  );
}
