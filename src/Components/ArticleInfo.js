import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import { Router } from "@reach/router";
import ArticleComments from "./ArticleComments";
import ShowCommentsButton from "./ShowCommentsButton";

class ArticleInfo extends Component {
  state = { article: {} };

  render() {
    const { article_id } = this.state.article;
    const { user } = this.props;
    return (
      <section>
        <ArticleCard article={this.state.article} singleArticle={true} />
        <br />

        <p className="flow-text">{this.state.article.body}</p>

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
    api.getArticleById(this.props.article_id).then(article => {
      this.setState({ article });
    });
  };
}

export default ArticleInfo;
