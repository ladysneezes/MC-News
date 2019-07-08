import React from "react";
import { Link } from "@reach/router";

const TopicCard = props => {
  const { slug, description } = props.topic;
  const { singleTopic } = props;
  return singleTopic ? (
    <section>
      <div className="row">
        <div className="col s12 m10 offset-m1">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="left-align card-title">
                <h5>{slug}</h5>
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
  ) : (
    <section>
      <div className="row">
        <div className="col s12 m10 offset-m1">
          <Link to={`/topics/${slug}`}>
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="left-align card-title">
                  <h5>{slug}</h5>
                </span>
                <div className="divider" />
                <p className="left-align comment-card-info">
                  <span className="left-align topic-description">
                    {description}
                  </span>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopicCard;
