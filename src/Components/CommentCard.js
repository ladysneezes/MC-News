import React from "react";
import Voter from "./Voter";
import { distanceInWordsToNow } from "date-fns";

const CommentCard = ({ comment, user, removeAComment }) => {
  const { comment_id, author, votes, body, created_at } = comment;
  return (
    <section key={comment_id}>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="left-align comment-body">{body}</span>
              <div className="divider" />
              <p className="left-align comment-card-info">
                Posted {distanceInWordsToNow(created_at, new Date())} ago by{" "}
                {author}
              </p>
              <Voter comment_id={comment_id} votes={votes} />
              <br />
              {user === author ? (
                <>
                  <button
                    className="waves-effect waves-light btn delete-button"
                    disabled={user !== author}
                    onClick={() => removeAComment(comment_id)}
                  >
                    Delete
                  </button>
                  <br />
                </>
              ) : (
                <br />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentCard;
