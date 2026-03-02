import React from "react";
import { createRoot } from "react-dom/client";
import { PostForm } from "../components/PostForm.jsx";

export function mountPostEdit() {
  const el = document.getElementById("post-edit");
  if (el) {
    const post = JSON.parse(el.dataset.post || "{}");
    const root = createRoot(el);
    root.render(<PostForm post={post} />);
  }
}
