import React from "react";
import { CreateComment } from "./CreateComment.jsx";

export const PostShow = ({ post }) => {
  return (
    <div className="post-show">
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      {post?.comments?.length > 0 && (
        <ul>
          {post.comments.map((c) => (
            <>
              <li key={c.id}>{c.text}</li>
              <a href={`/posts/${post.id}/comments/${c.id}/edit`}>Edit</a>
            </>
          ))}
        </ul>
      )}
      <CreateComment postId={post?.id} />
    </div>
  );
};