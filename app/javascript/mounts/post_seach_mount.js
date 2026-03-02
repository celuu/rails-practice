import React from "react";
import { PostSearch } from "../components/PostSearch";

document.addEventListener("turbo:load", () => {
  const el = document.getElementById("post-search");
  if (el) {
    const posts = JSON.parse(el.dataset.posts || "[]");
    ReactDOM.createRoot(el).render(<PostSearch posts={posts} />);
  }
});
