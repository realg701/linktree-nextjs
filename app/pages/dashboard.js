import React, { useEffect, useState } from "react";
import MyHead from "@/components/MyHead";
import LinkBox from "@/components/LinkBox";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { data } from "autoprefixer";

const dashboard = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  useEffect(() => {
    if (!localStorage.getItem("LinkTreeToken")) return router.push("/login");

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
        <Header router={router} />
        <main>
          <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            <LinkBox
              lbTitle="Links"
              lbNumber="13&#x1F517;"
              lbSvg="url"
              lbTheme="bg-red-500"
            />
            <LinkBox
              lbTitle="Growth"
              lbNumber="30%&#x1F4C8;"
              lbSvg="growth"
              lbTheme="bg-blue-500"
            />
            <LinkBox
              lbTitle="Growth Down"
              lbNumber="3.5%&#x1F4C9;	"
              lbSvg="loss"
              lbTheme="bg-lime-500"
            />
            <LinkBox
              lbTitle="Booming Links"
              lbNumber="65%&#x26D3;&#xFE0F;	"
              lbSvg="link"
              lbTheme="bg-amber-500"
            />
          </section>
          <section></section>
        </main>
      </div>
    </>
  );
};

export default dashboard;
