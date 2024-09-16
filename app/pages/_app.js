import React from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import NProgress from "nprogress";
import { ToastContainer } from "react-toastify";
import UserContext from "@/context/userContext";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import NetworkStatusProvider from "@/components/NetworkStatusProvider";
import Loader from "@/components/Loader";
import "../styles/globals.css";
import "../public/nprogress.css";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [userData, setUserData] = React.useState({
    name: "",
    role: "",
    bio: "",
    avatar: "",
    handle: "",
    socials: "",
  });

  React.useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
      NProgress.start();
    };
    const handleComplete = () => {
      setIsLoading(false);
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <>
      <NetworkStatusProvider>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-WYTYXQXVK6`}
        />
        <Script strategy="lazyOnload">
          {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-WYTYXQXVK6', {
                    page_path: window.location.pathname,
                    });
                `}
        </Script>
        <UserContext.Provider value={{ userData, setUserData }}>
          <NavBar />
          {isLoading ? (
            <>
              <Loader loaderState="Loading..." />
              <div className="nprogress-custom-parent">
                <div className="nprogress-custom-bar" />
              </div>
            </>
          ) : (
            <Component {...pageProps} />
          )}
          {!userData.handle && <Footer />}
        </UserContext.Provider>
        <ToastContainer position="bottom-left" />
      </NetworkStatusProvider>
    </>
  );
}
