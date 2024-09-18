import React from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import UserContext from "@/context/userContext";
import styles from "@/styles/custom.module.css";
import Header from "@/components/Header";
import MyHead from "@/components/MyHead";
import Loader from "@/components/Loader";

const Profile = () => {
  const { userData } = React.useContext(UserContext);
  const [savingProfile, setSavingProfile] = React.useState(false);
  const [savingSocials, setSavingSocials] = React.useState(false);

  // Edit Profile State
  const [name, setName] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
  // Edit Socials State
  const [social, setSocial] = React.useState({
    facebook: "",
    twitter: "",
    instagram: "",
    youtube: "",
    tiktok: "",
    linkedin: "",
    github: "",
  });
  console.log("UseState", social);
  console.log("UseContext", userData.socials);
  // Handle Social
  const handleSocial = (e) => {
    setSocial({ ...social, [e.target.id]: e.target.value });
  };

  // Saving profile data to backend
  const saveProfile = (e) => {
    setSavingProfile(true);
    e.preventDefault();
    fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL ||
        "https://linktree-nextjs-server.vercel.app/"
      }save/profile`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          tokenMail: localStorage.getItem("LinkTreeToken"),
          name: name,
          bio: bio,
          avatar: avatar,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") return toast.error(data.error);
        setSavingProfile(false);
        toast.success("Profile saved");
      })
      .catch((error) => toast.error(error.message));
  };

  // Saving socials data to backend
  const saveSocials = (e) => {
    setSavingSocials(true);
    e.preventDefault();
    fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL ||
        "https://linktree-nextjs-server.vercel.app/"
      }save/socials`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          tokenMail: localStorage.getItem("LinkTreeToken"),
          socials: social,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") return toast.error(data.error);
        setSavingSocials(false);
        toast.success("Social saved");
      });
  };

  React.useEffect(() => {
    if (userData) {
      setName(userData.name);
      setBio(userData.bio);
      setAvatar(userData.avatar);
      setSocial(userData.socials);
    }
  }, [userData]);

  return (
    <>
      <MyHead
        title="Edit Profile"
        description="Welcome to LinkTree, where we you keep all your links in one place"
        image="https://typefinance.com/typefinance-dp.jpg"
        url="https://typefinance.com"
      />
      <Header />
      <main>
        <h1 className="px-3 text-2xl font-bold cursor-default">Edit Profile</h1>
        <section className="flex flex-col justify-center text-center gap-5 cursor-default">
          {/* Edit Profile Form */}
          <form
            onSubmit={saveProfile}
            className="w-11/12 max-w-2xl mx-auto mt-6 p-3"
          >
            <h2 className="p-3 font-bold cursor-default">Edit Your Profile</h2>
            {savingProfile ? (
              <div style={{ height: "168px" }}>
                <Loader loaderState="Saving..." loaderMargin="150px" />
              </div>
            ) : (
              <>
                <span className="flex flex-row mb-3 px-3 py-2 rounded-md shadow-lg border-2">
                  <Image
                    src="/svg/name.svg"
                    alt="Username"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <input
                    className="w-full focus:outline-none"
                    type="text"
                    placeholder="Enter name"
                    autoComplete="username"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </span>
                <span className="flex flex-row mb-3 px-3 py-2 rounded-md shadow-lg border-2">
                  <Image
                    src="/svg/bio.svg"
                    alt="Bio"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <input
                    className="w-full focus:outline-none"
                    type="text"
                    placeholder="Enter bio"
                    autoComplete="username"
                    required
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </span>
                <span className="flex flex-row mb-3 px-3 py-2 rounded-md shadow-lg border-2">
                  <img
                    src={avatar || "/svg/user.svg"}
                    alt="Avatar"
                    width={24}
                    height={24}
                    className={
                      styles.avatar +
                      " mr-2 rounded-full transition-all duration-300"
                    }
                  />
                  <input
                    className="w-full focus:outline-none"
                    type="text"
                    placeholder="Enter image link"
                    autoComplete="Avatar"
                    required
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                  />
                </span>
              </>
            )}
            <span
              className={`flex rounded-md shadow-lg hover:bg-green-700 ${
                savingProfile ? "bg-slate-600" : "bg-green-600"
              } text-white`}
            >
              <input
                className="w-full py-2"
                type="submit"
                value="Save Changes"
                disabled={savingProfile}
              />
            </span>
          </form>
          {/* Edit Socials Form */}
          <form
            onSubmit={saveSocials}
            className="w-11/12 max-w-2xl mx-auto mt-6 mb-20"
          >
            <h2 className="p-3 font-bold cursor-default">Edit Your Socials</h2>
            {savingSocials ? (
              <div style={{ height: "392px" }}>
                <Loader loaderState="Saving..." loaderMargin="280px" />
              </div>
            ) : (
              <>
                <span className="flex flex-row mb-3 px-3 py-2 rounded-md shadow-lg border-2">
                  <Image
                    src="/svg/socials/github.svg"
                    alt="GitHub"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <input
                    id="github"
                    value={social.github}
                    onChange={handleSocial}
                    className="focus:outline-none"
                    type="text"
                    placeholder="GitHub"
                  />
                </span>
                <span className="flex flex-row mb-3 px-3 py-2 rounded-md shadow-lg border-2">
                  <Image
                    src="/svg/socials/instagram.svg"
                    alt="Bio"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <input
                    id="instagram"
                    value={social.instagram}
                    onChange={handleSocial}
                    className="focus:outline-none"
                    type="text"
                    placeholder="Instagram"
                  />
                </span>
                <span className="flex flex-row mb-3 px-3 py-2 rounded-md shadow-lg border-2">
                  <Image
                    src="/svg/socials/facebook.svg"
                    alt="Social handle"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <input
                    id="facebook"
                    value={social.facebook}
                    onChange={handleSocial}
                    className="focus:outline-none"
                    type="text"
                    placeholder="Facebook"
                  />
                </span>
                <span className="flex flex-row mb-3 px-3 py-2 rounded-md shadow-lg border-2">
                  <Image
                    src="/svg/socials/twitter.svg"
                    alt="Username"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <input
                    id="twitter"
                    value={social.twitter}
                    onChange={handleSocial}
                    className="focus:outline-none"
                    type="text"
                    placeholder="Twitter"
                  />
                </span>
                <span className="flex flex-row mb-3 px-3 py-2 rounded-md shadow-lg border-2">
                  <Image
                    src="/svg/socials/youtube.svg"
                    alt="Bio"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <input
                    id="youtube"
                    value={social.youtube}
                    onChange={handleSocial}
                    className="focus:outline-none"
                    type="text"
                    placeholder="YouTube"
                  />
                </span>
                <span className="flex flex-row mb-3 px-3 py-2 rounded-md shadow-lg border-2">
                  <Image
                    src="/svg/socials/linkedin.svg"
                    alt="Social handle"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <input
                    id="linkedin"
                    value={social.linkedin}
                    onChange={handleSocial}
                    className="focus:outline-none"
                    type="text"
                    placeholder="LinkedIn"
                  />
                </span>
                <span className="flex flex-row mb-3 px-3 py-2 rounded-md shadow-lg border-2">
                  <Image
                    src="/svg/socials/tiktok.svg"
                    alt="Social handle"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <input
                    id="tiktok"
                    value={social.tiktok}
                    onChange={handleSocial}
                    className="focus:outline-none"
                    type="text"
                    placeholder="TikTok"
                  />
                </span>
              </>
            )}
            <span
              className={`flex rounded-md shadow-lg hover:bg-green-700 ${
                savingSocials ? "bg-slate-600" : "bg-green-600"
              } text-white`}
            >
              <input
                className="w-full py-2"
                type="submit"
                value="Save Changes"
                disabled={savingSocials}
              />
            </span>
          </form>
        </section>
      </main>
    </>
  );
};

export default Profile;
