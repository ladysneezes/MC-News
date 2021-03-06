import React, { Component } from "react";
import * as api from "../api";
import Error from "./Error";

class AddCommentForm extends Component {
  state = { userInput: "" };
  render() {
    const { error } = this.state;

    if (error) return <Error error={error} />;

    return (
      <form onSubmit={this.handleCommentFormSubmit}>
        <div className="container">
          <div className="row">
            <div className="col s10 offset-s1">
              <input
                placeholder="What do you think?"
                value={this.state.userInput}
                onChange={this.handleInputChange}
                required
              />
            </div>
          </div>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
      </form>
    );
  }

  handleCommentFormSubmit = event => {
    event.preventDefault();
    const { user, article_id, addAComment } = this.props;
    const body = this.state.userInput;

    api
      .postComment(article_id, user, body)
      .then(comment => {
        addAComment(comment);
        this.setState({ userInput: "" });
      })
      .catch(error => this.setState({ error }));
  };

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({ userInput: value });
  };
}

export default AddCommentForm;
