import React from "react";

export const CreateComment = ({ comment, postId }) => {
  const isEdit = !!comment?.id;
  const action = isEdit
    ? `/posts/${postId}/comments/${comment.id}`
    : `/posts/${postId}/comments`;
  const csrfToken =
    document.querySelector('meta[name="csrf-token"]')?.content || "";

  return (
    <>
      <form action={action} method="post">
        <input type="hidden" name="authenticity_token" value={csrfToken} />
        {isEdit && <input type="hidden" name="_method" value="patch" />}
        <input
          name="comment[text]"
          defaultValue={comment?.text}
          placeholder="Add a comment..."
        />
        <button type="submit">{isEdit ? "Update" : "Create"}</button>
      </form>

      {isEdit && (
        <form action={action} method="post" style={{ display: "inline" }}>
          <input type="hidden" name="authenticity_token" value={csrfToken} />
          <input type="hidden" name="_method" value="delete" />
          <button type="submit">Delete</button>
        </form>
      )}
    </>
  );
};