import React from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import UserContext from "@/context/userContext";
import MyHead from "@/components/MyHead";
import Header from "@/components/Header";
import Loader from "@/components/Loader";

const Links = () => {
  const { userData } = React.useContext(UserContext);

  const [savingLinks, setSavingLinks] = React.useState(false);
  const [links, setLinks] = React.useState([{ url: "", title: "" }]);

  // Handle Link Change
  const handleLinkChange = (index, field, value) => {
    const updatedLinks = [...links];
    const linkToUpdate = { ...updatedLinks[index], [field]: value };
    updatedLinks[index] = linkToUpdate;
    setLinks(updatedLinks);
  };

  // Handle Add Links
  const handleAddLinks = () => {
    setLinks([...links, { url: "", title: "" }]);
  };

  // Handle Remove Links
  const handleRemoveLinks = (index) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
  };

  // Saving Links to backend
  const saveLinks = (e) => {
    setSavingLinks(true);
    e.preventDefault();
    fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL ||
        "https://linktree-nextjs-server.vercel.app/"
      }save/links`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          tokenMail: localStorage.getItem("LinkTreeToken"),
          links: links,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") return toast.error(data.error);
        setSavingLinks(false);
        toast.success("Links saved");
      })
      .catch((error) => toast.error(error.message));
  };

  React.useEffect(() => {
    if (userData) setLinks(userData.links);
  }, [userData]);
  return (
    <>
      <MyHead
        title="Edit Links"
        description="Welcome to LinkTree, where we you keep all your links in one place"
        image="https://typefinance.com/typefinance-dp.jpg"
        url="https://typefinance.com"
      />
      <Header />
      <main>
        <h1 className="px-3 text-2xl font-bold cursor-default">Edit Links</h1>
        <section className="flex flex-col justify-center text-center gap-5 cursor-default">
          {/* Edit Links Form */}
          <form
            onSubmit={saveLinks}
            className="w-11/12 max-w-2xl mx-auto mt-6 mb-20"
          >
            <h2 className="p-3 font-bold cursor-default">Edit Your Links</h2>
            {savingLinks ? (
              <div style={{ height: "392px" }}>
                <Loader loaderState="Saving..." loaderMargin="280px" />
              </div>
            ) : (
              <>
                {links?.map((link, index) => (
                  <span
                    className="flex flex-row mb-3 px-3 py-2 rounded-md shadow-lg border-2 bg-slate-300"
                    key={index}
                  >
                    <Image
                      src={`/svg/socials/${
                        link?.title.toLowerCase() || "image"
                      }.svg`}
                      alt={link.title}
                      width={24}
                      height={24}
                      className="mr-2"
                    />
                    <input
                      value={link.title}
                      onChange={(e) =>
                        handleLinkChange(index, "title", e.target.value)
                      }
                      className="focus:outline-none w-1/3 mr-2 px-4 py-1 rounded-full bg-slate-400 placeholder-slate-600"
                      type="text"
                      placeholder="Title"
                    />
                    <input
                      value={link.url}
                      onChange={(e) =>
                        handleLinkChange(index, "url", e.target.value)
                      }
                      className="focus:outline-none w-full px-4 py-1 rounded-full bg-slate-100"
                      type="text"
                      placeholder="Enter url"
                    />

                    <Image
                      onClick={(e) => handleRemoveLinks(index)}
                      src="/svg/remove.svg"
                      alt="remove"
                      width={28}
                      height={28}
                      className="ml-2 hover:drop-shadow-md"
                    />
                  </span>
                ))}
              </>
            )}
            <div className="flex justify-center items-start gap-4 px-16">
              <span
                className={`w-full rounded-md shadow-lg mb-2 hover:bg-blue-700 ${
                  savingLinks ? "bg-slate-600" : "bg-blue-600"
                } text-white`}
              >
                <button
                  className="w-full py-2"
                  type="button"
                  onClick={handleAddLinks}
                  disabled={savingLinks}
                >
                  Add Link
                </button>
              </span>
              <span
                className={`w-full rounded-md shadow-lg hover:bg-green-700 ${
                  savingLinks ? "bg-slate-600" : "bg-green-600"
                } text-white`}
              >
                <input
                  className="w-full py-2"
                  type="submit"
                  value="Save Changes"
                  disabled={savingLinks}
                />
              </span>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};
export default Links;
