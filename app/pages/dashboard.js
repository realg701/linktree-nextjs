import React, { useEffect } from "react";
import MyHead from "@/components/MyHead";

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
    </>
  );
};

export default dashboard;
