import { createRoot } from "react-dom/client";
import React from "react";
import { PostShow } from "../components/PostShow.jsx";
import { CreateComment } from "../components/CreateComment.jsx";

export function mountEditComment() {
  const el = document.getElementById("comment-form");
  if (el) {
    const comment = JSON.parse(el.dataset.comment || "[]");
    const post = JSON.parse(el.dataset.post || "[]");
    const root = createRoot(el);
    root.render(<CreateComment comment={comment} postId={post.id} />);
  }
}
