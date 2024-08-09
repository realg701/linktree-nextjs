import React, { useEffect } from "react";
import MyHead from "@/components/MyHead";
import LinkBox from "@/components/LinkBox";
import Header from "@/components/Header";

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

      <div className="">
        <Header />
        <main>
          <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            <LinkBox lbTitle="Links" lbNumber="65" lbSvg="url" lbTheme="red" />
            <LinkBox
              lbTitle="Growth"
              lbNumber="30%"
              lbSvg="growth"
              lbTheme="blue"
            />
            <LinkBox
              lbTitle="Links"
              lbNumber="65"
              lbSvg="loss"
              lbTheme="lime"
            />
            <LinkBox
              lbTitle="Links"
              lbNumber="65"
              lbSvg="link"
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
