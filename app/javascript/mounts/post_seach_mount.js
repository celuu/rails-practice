import { createRoot } from "react-dom/client";
import React from "react";
import { PostSearch } from "../components/PostSearch.jsx";

export function mountPostSearch() {
  const el = document.getElementById("post-search");
  if (el) {
    const posts = JSON.parse(el.dataset.posts || "[]");
    const root = createRoot(el);
    root.render(<PostSearch posts={posts} />);
  }
}
