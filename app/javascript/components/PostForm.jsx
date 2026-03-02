import React from "react";

export const PostForm = ({ post }) => {
  const isEdit = !!post?.id;
  const action = isEdit ? `/posts/${post.id}` : "/posts";
  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content || "";

  return (
    <form action={action} method="post">
      <input type="hidden" name="authenticity_token" value={csrfToken} />
      {isEdit && <input type="hidden" name="_method" value="patch" />}
      <h2>Title</h2>
      <input name="post[title]" defaultValue={post?.title ?? ""} />
      <h2>Body</h2>
      <input name="post[body]" defaultValue={post?.body ?? ""} />
      <button type="submit">{isEdit ? "Update" : "Create"} Post</button>
    </form>
  );
};
