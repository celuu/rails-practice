import React from "react";
import { createRoot } from "react-dom/client";
import { AuthorShow } from "../components/AuthorShow.jsx";

export function mountAuthorShow() {
  const el = document.getElementById("list-author");
  if (el) {
    const authors = JSON.parse(el.dataset.authors || "[]");
    const root = createRoot(el);
    root.render(<AuthorShow authors={authors} />);
  }
}
