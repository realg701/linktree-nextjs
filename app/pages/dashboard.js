import React from "react";
import MyHead from "@/components/MyHead";
import LinkBox from "@/components/LinkBox";
import Header from "@/components/Header";
import UserContext from "@/context/userContext";

const dashboard = () => {
  const { userData } = React.useContext(UserContext);

  return (
    <>
      <MyHead
        title="Dashboard"
        description="Welcome to LinkTree, where we you keep all your links in one place"
        image="https://typefinance.com/typefinance-dp.jpg"
        url="https://typefinance.com"
      />
      <Header />
      <main>
        <h1 className="px-3 text-2xl font-bold cursor-default">Dashboard</h1>
        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 cursor-default">
          <LinkBox
            lbTitle="Links"
            lbNumber={userData.links?.length}
            lbSvg="url"
            lbTheme="bg-red-500"
            lbAlt="Links"
          />
          <LinkBox
            lbTitle="Growth"
            lbNumber="30%"
            lbSvg="growth"
            lbTheme="bg-blue-500"
            lbAlt="Growth"
          />
          <LinkBox
            lbTitle="Growth Down"
            lbNumber="3.5%"
            lbSvg="loss"
            lbTheme="bg-lime-500"
            lbAlt="Growth Down"
          />
          <LinkBox
            lbTitle="Booming Links"
            lbNumber="65%"
            lbSvg="link"
            lbTheme="bg-amber-500"
            lbAlt="Booming Links"
          />
        </section>
        <section></section>
      </main>
    </>
  );
};

export default dashboard;
