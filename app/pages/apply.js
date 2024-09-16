import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/apply.module.css";
import MyHead from "@/components/MyHead";

const Apply = () => {
  const router = useRouter();

  const [handle, setHandle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setLoading(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!category) return toast.error("Select category");
    setLoading(true);
    // Send userData to backend
    const userData = { handle, email, password, category };
    fetch("http://localhost:8080/api/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Apply:", data);
        if (data.status === "success") {
          toast("Registered successfully");
          localStorage.setItem("LinkTreeToken", data.token);
          setSubmitted(true);
          setLoading(false);
          router.push("/login");
        }
        if (data.status === "error") {
          toast.error("Try a different username or email");
          setLoading(false);
        }
      })
      .catch((err) => {
        toast.error("Try a different username or email");
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("LinkTreeToken")) router.push("/dashboard");
  }, []);

  return (
    <>
      <MyHead
        title="Join"
        description="Welcome to LinkTree, where we you keep all your links in one place"
        image="https://typefinance.com/typefinance-dp.jpg"
        url="https://typefinance.com"
      />
      <section
        className={styles.background + " flex justify-center items-center"}
      >
        <div className="main">
          <div className="content bg-white px-4 py-5 rounded-2xl shadow-lg border-2">
            <h1 className="text-2xl font-bold text-center">
              Join the top 1% creators
            </h1>
            <p className="text-center">Create LinkTree for your brand</p>
            <p className="text-center py-5 font-bold text-gray-500">
              Start building your Hub 👇
            </p>
            <form
              onSubmit={handleRegister}
              className="flex flex-col gap-4 mt-5 text-lg"
            >
              <span className="flex flex-row px-3 py-2 rounded-md shadow-md border-2">
                <Image
                  src="/svg/ig.svg"
                  alt="Social handle"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <input
                  className="focus:outline-none"
                  type="text"
                  placeholder="Social handle"
                  autoComplete="username"
                  required
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                />
              </span>
              <input
                className="px-3 py-2 rounded-md focus:outline-none shadow-md border-2"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="px-3 py-2 rounded-md focus:outline-none shadow-md border-2"
                type="password"
                placeholder="Set a password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <h5 className="text-center text-sm text-indigo-500">
                Account type
              </h5>
              <div className="flex flex-row mt-2 gap-2 justify-center items-center">
                <span className="flex">
                  <label className="flex flex-row gap-1">
                    <input
                      type="checkbox"
                      value="Creator"
                      checked={category === "Creator"}
                      onChange={handleCategoryChange}
                    />
                    <p className="text-sm">Creator</p>
                  </label>
                </span>
                <span className="flex">
                  <label className="flex flex-row gap-1">
                    <input
                      type="checkbox"
                      value="Brand"
                      checked={category === "Brand"}
                      onChange={handleCategoryChange}
                    />
                    <p className="text-sm">Brand</p>
                  </label>
                </span>
                <span className="flex">
                  <label className="flex flex-row gap-1">
                    <input
                      type="checkbox"
                      value="Agency"
                      checked={category === "Agency"}
                      onChange={handleCategoryChange}
                    />
                    <p className="text-sm">Agency</p>
                  </label>
                </span>
              </div>
              <input
                className={`w-full mt-6 py-2 rounded-lg cursor-pointer ${
                  loading ? "bg-slate-600" : "bg-indigo-600"
                } text-white `}
                type="submit"
                value="Apply"
                disabled={loading}
              />
            </form>
          </div>
          <h4 className="mt-3 text-center text-white">
            Already have an account?{" "}
            <Link className="font-bold text-red-400" href={"/login"}>
              Login
            </Link>
          </h4>
        </div>
      </section>
    </>
  );
};

export default Apply;
