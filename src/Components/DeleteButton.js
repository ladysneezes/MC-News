import React from "react";

const DeleteButton = props => {
  const { comment_id, removeAComment, user, author } = props;
  return (
    <>
      <button
        className="waves-effect waves-light btn"
        disabled={user !== author}
        onClick={() => removeAComment(comment_id)}
      >
        Delete
      </button>
    </>
  );
};

export default DeleteButton;
