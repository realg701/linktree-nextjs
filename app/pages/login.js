import React, { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import styles from "../styles/apply.module.css";
import MyHead from "@/components/MyHead";
import Image from "next/image";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Backend Call
    fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast("You are logged in");
          localStorage.setItem("LinkTreeToken", data.token);
        }
        if (data.status === "not found") {
          toast.error("User not found");
        }
      })
      .catch((error) => console.log(error));
    // setEmail("");
    // setPassword("");
  };

  return (
    <>
      <MyHead
        title="Login"
        description="Welcome to LinkTree, where we you keep all your links in one place"
        image="https://typefinance.com/typefinance-dp.jpg"
        url="https://typefinance.com"
      />
      <section
        className={
          styles.background + " min-h-screen flex justify-center items-center"
        }
      >
        <div className="main">
          <div className="content bg-white px-4 py-5 rounded-2xl shadow-lg border-2">
            <h1 className="text-2xl font-bold text-center">
              You're now amoung top creators
            </h1>
            <p className="text-center">Access your dashboard</p>
            <p className="text-center py-5 font-bold text-gray-500">
              Start building your Hub 👇
            </p>
            <form
              onSubmit={handleLogin}
              className="flex flex-col gap-4 mt-5 text-lg"
            >
              <span className="flex flex-row px-3 py-2 rounded-md shadow-md border-2">
                <Image
                  src="/svg/mail.svg"
                  alt="Social handle"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <input
                  className="focus:outline-none"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </span>

              <input
                className="px-3 py-2 rounded-md focus:outline-none shadow-md border-2"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="w-full mt-6 py-2 rounded-lg cursor-pointer bg-indigo-600 text-white"
                type="submit"
                value="Login"
              />
            </form>
          </div>
          <h4 className="mt-3 text-center text-white">
            New here?{" "}
            <Link className="font-bold text-red-400" href={"/apply"}>
              Apply
            </Link>
          </h4>
        </div>
      </section>
    </>
  );
};

export default Login;
