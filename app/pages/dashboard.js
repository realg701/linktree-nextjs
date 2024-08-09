import React, { useEffect } from "react";
import MyHead from "@/components/MyHead";
import LinkBox from "@/components/LinkBox";

const dashboard = () => {
  useEffect(() => {
    if (!localStorage.getItem("LinkTreeToken")) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <>
      <MyHead
        title="Dashboard"
        description="Welcome to LinkTree, where we you keep all your links in one place"
        image="https://typefinance.com/typefinance-dp.jpg"
        url="https://typefinance.com"
      />
      <h1 className="text-center text-gray-800 text-2xl">Dashboard</h1>
      <div className="">
        <main>
          <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            <LinkBox
              lbTitle="Links"
              lbNumber="65"
              lbSvg="nextjs"
              lbTheme="red"
            />
            <LinkBox
              lbTitle="Growth"
              lbNumber="30%"
              lbSvg="nextjs"
              lbTheme="blue"
            />
            <LinkBox
              lbTitle="Links"
              lbNumber="65"
              lbSvg="nextjs"
              lbTheme="lime"
            />
            <LinkBox
              lbTitle="Links"
              lbNumber="65"
              lbSvg="nextjs"
              lbTheme="amber"
            />
          </section>
          <section></section>
        </main>
      </div>
    </>
  );
};

export default dashboard;
