import React, { Component } from "react";
import * as api from "../api";
import Error from "./Error";

class ArticleAdder extends Component {
  state = { title: "", body: "", topic: "", topics: [], loading: true };
  render() {
    const { title, body, topics, loading, error } = this.state;

    if (error) return <Error error={error} />;

    return loading === true ? (
      <p>Loading...</p>
    ) : (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              required
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Body:
            <input
              required
              type="text"
              name="body"
              value={body}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Topic:
            {topics.map(topic => (
              <p key={topic.slug}>
                <label>
                  <input
                    name="topics_list"
                    type="radio"
                    value={topic.slug}
                    required
                  />
                  <span>{topic.slug}</span>
                </label>
              </p>
            ))}
          </label>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    api
      .postArticle({ ...this.state, ...this.props })
      .then(article => {
        this.setState({ title: "", body: "", topic: "" });
        this.props.navigate(`/articles/${article.article_id}`);
      })
      .catch(error => this.setState({ error }));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  componentDidMount = () => {
    api
      .getTopics()
      .then(res => {
        this.setState({ topics: res.topics, loading: false });
        return res.topics[0];
      })
      .then(topic => this.setState({ topic: topic.slug }));
  };
}

export default ArticleAdder;
