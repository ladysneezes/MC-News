import React from "react";
import { Link } from "@reach/router";

const ShowCommentsButton = props => {
  let { article_id } = props;
  return (
    <Link to={`/articles/${article_id}/comments`}>
      <button className="waves-effect waves-light btn show-button">
        Show/Add comments
        <span role="img" aria-label="show">
          ⬇️
        </span>
      </button>
    </Link>
  );
};

export default ShowCommentsButton;
