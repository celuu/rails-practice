import React from "react";

export const AuthorForm = ({ author }) => {
  const isEdit = !!author?.id;
  const action = isEdit ? `/authors/${author.id}` : "/authors";
  const csrfToken =
    document.querySelector('meta[name="csrf-token"]')?.content || "";
  return (
    <form action={action} method="post">
      <input type="hidden" name="authenticity_token" value={csrfToken} />
      {isEdit && <input type="hidden" name="_method" value="patch" />}
      <h2>Name</h2>
      <input name="author[name]" defaultValue={author?.name ?? ""} />
      <button type="submit">{isEdit? "Update" : "Create"}</button>
    </form>
  );
};
