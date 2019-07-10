import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import { Router } from "@reach/router";
import ArticleComments from "./ArticleComments";
import ShowCommentsButton from "./ShowCommentsButton";
import Error from "./Error";

class ArticleInfo extends Component {
  state = { article: {}, error: null, loading: true };

  render() {
    const { article_id } = this.state.article;
    const { user } = this.props;
    const { error, loading } = this.state;

    if (error) {
      return <Error error={error} />;
    }

    return loading === true ? (
      <p>Loading...</p>
    ) : (
      <section>
        <ArticleCard article={this.state.article} singleArticle={true} />
        <br />
        <div className="row">
          <div className="col s12 m10 offset-m1">
            <p className="flow-text left-align">{this.state.article.body}</p>
          </div>
        </div>
        <br />

        <Router>
          <ShowCommentsButton path="/" article_id={article_id} />
          <ArticleComments
            article_id={article_id}
            user={user}
            path="comments"
          />
        </Router>
      </section>
    );
  }

  componentDidMount = () => {
    api
      .getArticleById(this.props.article_id)
      .then(article => {
        this.setState({ article, loading: false });
      })
      .catch(error => this.setState({ error }));
  };
}

export default ArticleInfo;
