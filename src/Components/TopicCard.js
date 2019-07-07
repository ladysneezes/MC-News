import React from "react";
import { Link } from "@reach/router";

const TopicCard = props => {
  const { slug, description } = props.topic;
  return (
    <Link to={`/topics/${slug}`}>
      <section>
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="left-align card-title">
                  <h5>{slug.charAt(0).toUpperCase() + slug.slice(1)}</h5>
                </span>
                <div className="divider" />
                <p className="left-align comment-card-info">
                  <span className="left-align topic-description">
                    {description}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default TopicCard;
