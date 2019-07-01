import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";
import { distanceInWordsToNow } from "date-fns";

const ArticleCard = ({ article, singleArticle }) => {
  return (
    <section key={article.article_id}>
      <div className="row">
        <div className="col s12 m10 offset-m1 ">
          <div className="card blue lighten-5">
            <div className="card-content blue-grey-text text-darken-4">
              <span className="card-title">
                <h4>
                  {singleArticle ? (
                    article.title
                  ) : (
                    <Link to={`/articles/${article.article_id}`}>
                      {article.title}
                    </Link>
                  )}
                </h4>
              </span>
              <p>
                {`Posted ${distanceInWordsToNow(
                  article.created_at,
                  new Date()
                )} ago by `}
                <Link to={`/users/${article.author}`}>{article.author}</Link>
                <br />
                Topic: {article.topic}
                <br />
                Comment Count: {article.comment_count}
              </p>
            </div>
            <div className="card-action">
              <Voter
                article_id={article.article_id}
                votes={article.votes}
                isArticle={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleCard;
