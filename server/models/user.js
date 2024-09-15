import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, default: "" },
    bio: { type: String, default: "" },
    email: { type: String, required: true, unique: true },
    avatar: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/4322/4322991.png",
    },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["Creator", "Brand", "Agency", "admin"],
      default: "Creator",
    },
    handle: { type: String, required: true, unique: true },
    links: [
      {
        url: { type: String },
        title: { type: String },
        icon: { type: String },
      },
    ],
    socialMedia: {
      facebook: { type: String, default: "" },
      twitter: { type: String, default: "" },
      instagram: { type: String, default: "" },
      youtube: { type: String, default: "" },
      tiktok: { type: String, default: "" },
      linkedin: { type: String, default: "" },
      github: { type: String, default: "" },
    },
  },
  { collection: "user-data-linktree" },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
