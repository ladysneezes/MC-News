import React from "react";
import Voter from "./Voter";
import DeleteButton from "./DeleteButton";
import { distanceInWordsToNow } from "date-fns";

const CommentCard = ({ comment, user, removeAComment }) => {
  const { comment_id, author, votes, body, created_at } = comment;
  return (
    <section key={comment_id}>
      <p>{body}</p>
      Author: {author}
      <br />
      <p>Posted {distanceInWordsToNow(created_at, new Date())} ago</p>
      <Voter comment_id={comment_id} votes={votes} />
      {user === author ? (
        <>
          <br />
          <DeleteButton
            removeAComment={removeAComment}
            comment_id={comment_id}
            user={user}
            author={author}
          />
        </>
      ) : (
        <br />
      )}
    </section>
  );
};

export default CommentCard;
