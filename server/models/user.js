import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String },
    bio: { type: String },
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
      facebook: { type: String },
      twitter: { type: String },
      instagram: { type: String },
      youtube: { type: String },
      tiktok: { type: String },
      linkedin: { type: String },
      github: { type: String },
    },
  },
  { collection: "user-data-linktree" },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
