import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";

class SingleUser extends Component {
  state = { articles: [], error: null };
  render() {
    const { articles } = this.state;
    return (
      <ul>
        {articles.map(article => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </ul>
    );
  }

  componentDidMount = () => {
    this.fetchArticlesByUsername(this.props.username);
  };

  fetchArticlesByUsername = username => {
    api
      .getArticles({ username })
      .then(res => this.setState({ articles: res.articles }))
      .catch(error => this.setState({ error }));
  };
}

export default SingleUser;
