import React from "react";
import Link from "next/link";
import MyHead from "@/components/MyHead";

export default function Home() {
  const [open, setOpen] = React.useState("Apply");

  React.useEffect(() => {
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
          className="inline-block my-2 p-2 px-4 font-medium rounded-md bg-indigo-600 text-white"
          href={`/${open.toLowerCase()}`}
        >
          {open}
        </Link>
      </main>
    </>
  );
}
