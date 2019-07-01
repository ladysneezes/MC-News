import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { Router } from "@reach/router";
import ArticleList from "./Components/ArticlesList";
import ArticleInfo from "./Components/ArticleInfo";
import TopicsList from "./Components/TopicsList";
import UsersList from "./Components/UsersList";
import ArticleAdder from "./Components/ArticleAdder";
import SingleUser from "./Components/SingleUser";

class App extends React.Component {
  state = { user: "grumpy19" };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Header user={user} />
        <Router>
          <ArticleList path="/" />
          <ArticleInfo user={user} path="/articles/:article_id/*" />
          <TopicsList path="/topics/*" />
          <UsersList path="/users" />
          <SingleUser path="/users/:username" />
          <ArticleAdder path="/articles" author={user} />
        </Router>
      </div>
    );
  }
}

export default App;
