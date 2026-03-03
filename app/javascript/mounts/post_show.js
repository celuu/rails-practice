import { createRoot } from "react-dom/client";
import React from "react";
import { PostShow } from "../components/PostShow.jsx";

export function mountPostShow() {
  const el = document.getElementById("show-post");
  if (el) {
    const post = JSON.parse(el.dataset.post || "[]");
    const root = createRoot(el);
    root.render(<PostShow post={post} />);
  }
}
