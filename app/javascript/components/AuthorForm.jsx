import React, { useEffect, useState } from "react";

export const AuthorForm = ({ author }) => {
  const isEdit = !!author?.id;
  const action = isEdit ? `/authors/${author.id}` : "/authors";
  const csrfToken =
    document.querySelector('meta[name="csrf-token"]')?.content || "";

    const [postIds, setPostIds] = useState([]);


    useEffect(() => {
      fetch("/posts.json")
        .then((res) => res.json())
        .then((data) => setPostIds(data.map((post) => post.id)))
        .catch((err) => console.error("Failed to fetch posts:", err));
    }, [])
  return (
    <form action={action} method="post">
      <input type="hidden" name="authenticity_token" value={csrfToken} />
      {isEdit && <input type="hidden" name="_method" value="patch" />}
      <h2>Name</h2>
      <input name="author[name]" defaultValue={author?.name ?? ""} />
      <select name="author[post_id" defaultValue={author?.post_id ?? ""}>
        {postIds.map((id) => (
          <option value={id}>{id}</option>
        ))}
      </select>
      <button type="submit">{isEdit? "Update" : "Create"}</button>
    </form>
  );
};
