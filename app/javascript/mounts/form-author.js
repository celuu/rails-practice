import React from "react";
import { createRoot } from "react-dom/client";
import { AuthorForm } from "../components/AuthorForm.jsx";

export function mountAuthorForm() {
  const el = document.getElementById("form-author");
  if (el) {
    const author = JSON.parse(el.dataset.author || "{}");
    const root = createRoot(el);
    root.render(<AuthorForm author={author} />);
  }
}
