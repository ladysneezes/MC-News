import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";
import { distanceInWordsToNow } from "date-fns";

const ArticleCard = ({ article, singleArticle }) => {
  return (
    <section key={article.article_id}>
      <div className="row">
        <div className="col s12 m12">
          <div className="card blue lighten-5">
            <div className="card-content blue-grey-text text-darken-4">
              <span className="card-title">
                <h6>
                  {singleArticle ? (
                    article.title
                  ) : (
                    <Link to={`/articles/${article.article_id}`}>
                      {article.title}
                    </Link>
                  )}
                </h6>
              </span>
              <p>
                Author: {article.author}
                <br />
                Topic: {article.topic}
                <br />
                Comment Count: {article.comment_count}
                <br />
                Posted {distanceInWordsToNow(article.created_at, new Date())}
                ago
              </p>
            </div>
            <div className="card-action">
              <Voter article_id={article.article_id} votes={article.votes} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleCard;
