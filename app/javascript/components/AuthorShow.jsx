import React, { useState } from "react";

export const AuthorShow = ({ authors = [] }) => {
  return (
    <div className="author-list">
      
      <ul>
      {authors.map((author) => (
        <li key={author.id}>
          <span>{author.name}</span>{" "}
          <p>post body: {author.post.body}</p>
          <a href={`/authors/${author.id}/edit`}>Edit</a>{" "}
          <form
            action={`/authors/${author.id}`}
            method="post"
            style={{ display: "inline" }}
          >
            <input type="hidden" name="_method" value="delete" />
            <input
              type="hidden"
              name="authenticity_token"
              value={
                document.querySelector('meta[name="csrf-token"]')?.content || ""
              }
            />
            <button type="submit">Delete</button>
          </form>
        </li>
      ))}
      </ul>
    </div>
  );
};
