import React, { Component } from "react";
import * as api from "../api";

class Voter extends Component {
  state = { voteChange: 0, loading: true };
  render() {
    const { votes, isArticle } = this.props;
    const { voteChange, loading } = this.state;
    return loading === true ? (
      <p>Loading...</p>
    ) : (
      <>
        {isArticle ? (
          <p className="black-text">Votes:{votes + voteChange}</p>
        ) : (
          <p className="white-text">Votes:{votes + voteChange}</p>
        )}
        <button
          id="upvote"
          disabled={voteChange > 0}
          onClick={() => this.handleVote(1)}
          className="btn waves-effect waves-light voter-button"
        >
          <span role="img" aria-label="upvote">
            👍
          </span>
        </button>
        <button
          id="downvote"
          disabled={voteChange < 0}
          onClick={() => this.handleVote(-1)}
          className="btn waves-effect waves-light voter-button"
        >
          <span role="img" aria-label="downvote">
            👎
          </span>
        </button>
      </>
    );
  }

  componentDidMount = () => {
    this.setState({ loading: false });
  };

  handleVote = increment => {
    const { article_id, comment_id } = this.props;
    this.setState(({ voteChange }) => ({
      voteChange: voteChange + increment
    }));

    if (article_id) {
      api.patchArticleVotes(article_id, increment).catch(error => {
        this.setState(({ voteChange }) => ({
          voteChange: voteChange - increment
        }));
      });
    } else if (comment_id) {
      api.patchCommentVotes(comment_id, increment).catch(error => {
        this.setState(({ voteChange }) => ({
          voteChange: voteChange - increment
        }));
      });
    }
  };
}

export default Voter;
