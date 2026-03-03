import React, { useEffect, useState } from "react";

export const AuthorForm = ({ author }) => {
  const isEdit = !!author?.id;
  const action = isEdit ? `/authors/${author.id}` : "/authors";
  const csrfToken =
    document.querySelector('meta[name="csrf-token"]')?.content || "";

  const [name, setName] = useState(author?.name ?? "");
  const [postId, setPostId] = useState(author?.post_id ?? "");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setName(author?.name ?? "");
    setPostId(author?.post_id ?? "");
  }, [author?.id, author?.name, author?.post_id]);

  useEffect(() => {
    fetch("/posts.json")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Failed to fetch posts:", err));
  }, []);

  return (
    <form action={action} method="post">
      <input type="hidden" name="authenticity_token" value={csrfToken} />
      {isEdit && <input type="hidden" name="_method" value="patch" />}
      <h2>Name</h2>
      <input
        name="author[name]"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select
        name="author[post_id]"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      >
        <option value="">Select a post</option>
        {posts.map((post) => (
          <option key={post.id} value={post.id}>
            {post.title}
          </option>
        ))}
      </select>
      <button type="submit">{isEdit ? "Update" : "Create"}</button>
    </form>
  );
};
