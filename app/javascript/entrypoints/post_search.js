import React from "react";
import { createRoot } from "react-dom/client";
import { PostSearch } from "../components/PostSearch.jsx";

let root = null;

function mount() {
  const el = document.getElementById("post-search");
  if (!el) return;

  if (root) return;

  let posts = [];
  try {
    posts = JSON.parse(el.dataset.posts || "[]") || [];
  } catch (e) {
    console.error("PostSearch: Failed to parse posts data", e);
  }

  if (!Array.isArray(posts)) posts = [];

  root = createRoot(el);
  root.render(React.createElement(PostSearch, { posts }));
}

function unmount() {
  if (root) {
    root.unmount();
    root = null;
  }
}

document.addEventListener("turbo:load", mount);
document.addEventListener("turbo:before-render", unmount);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount);
} else {
  mount();
}
