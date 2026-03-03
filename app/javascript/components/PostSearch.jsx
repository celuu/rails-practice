import React, { useState } from "react";

export const PostSearch = ({ posts = [] }) => {
  const [searchString, setSearchString] = useState("");
  const safePosts = Array.isArray(posts) ? posts : [];

  const filteredPosts = safePosts.filter((post) =>
    (post?.title || "")
      .toLowerCase()
      .includes(searchString.toLowerCase())
  );

  return (
    <div className="post-search">
      <input
        type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        placeholder="Search posts..."
      />
      {filteredPosts.length === 0 ? (
        <p>No posts found</p>
      ) : (
        <ul>
          {filteredPosts.map((post) => (
            <li key={post.id || post.title}>
              <a href={`/posts/${post.id}`}>{post.title}</a>{" "}
              <a href={`/posts/${post.id}/edit`}>Edit</a>{" "}
              <form
                action={`/posts/${post.id}`}
                method="post"
                style={{ display: "inline" }}
              >
                <input type="hidden" name="_method" value="delete" />
                <input
                  type="hidden"
                  name="authenticity_token"
                  value={
                    document.querySelector('meta[name="csrf-token"]')
                      ?.content || ""
                  }
                />
                <button type="submit">Delete</button>
              </form>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};