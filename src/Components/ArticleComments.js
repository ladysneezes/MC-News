import React, { Component } from "react";
import * as api from "../api";
import CommentCard from "./CommentCard";
import { Link } from "@reach/router";
import AddCommentForm from "./AddCommentForm";
import Error from "./Error";

class ArticleComments extends Component {
  state = { comments: [], loading: true };
  render() {
    const { user, article_id } = this.props;
    const { loading, error } = this.state;

    if (error) return <Error error={error} />;

    return loading === true ? (
      <p>Loading...</p>
    ) : (
      <section>
        <Link to={`/articles/${this.props.article_id}`}>
          <button className="waves-effect waves-light btn hide-button">
            Hide Comments
            <span role="img" aria-label="hide">
              ⬆️
            </span>
          </button>
        </Link>
        <AddCommentForm
          comments={this.state.comments}
          article_id={article_id}
          user={user}
          addAComment={this.addAComment}
        />
        <ul>
          {this.state.comments.map(comment => (
            <CommentCard
              comment={comment}
              user={user}
              key={comment.comment_id}
              removeAComment={this.removeAComment}
            />
          ))}
        </ul>
      </section>
    );
  }

  componentDidMount = () => {
    api
      .getArticleComments(this.props.article_id)
      .then(comments => {
        this.setState({ comments, loading: false });
      })
      .catch(error => this.setState({ error }));
  };

  addAComment = comment => {
    this.setState({ comments: [comment, ...this.state.comments] });
  };

  removeAComment = commentToRemoveId => {
    this.setState({
      comments: this.state.comments.filter(
        comment => comment.comment_id !== commentToRemoveId
      )
    });
    api
      .deleteComment(commentToRemoveId)
      .catch(error => this.setState({ error }));
  };
}

export default ArticleComments;
