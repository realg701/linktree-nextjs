import React, { useEffect, useState } from "react";
import MyHead from "@/components/MyHead";
import LinkBox from "@/components/LinkBox";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const dashboard = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  useEffect(() => {
    if (!localStorage.getItem("LinkTreeToken")) router.push("/");

    fetch("http://localhost:8080/data/dashboard", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        tokenMail: localStorage.getItem("LinkTreeToken"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") return toast.error("Error");
        setData(data.userData);
        localStorage.setItem("userHandle", data.userData.handle);
        toast.success(data.message);
        console.log(data.message);
      })
      .catch((error) => console.log(error));
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
        <Header data={data} />
        <main>
          <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 cursor-default">
            <LinkBox
              lbTitle="Links"
              lbNumber={data.links}
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
      </div>
    </>
  );
};

export default dashboard;
