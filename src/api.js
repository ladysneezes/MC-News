import axios from "axios";

const connection = axios.create({
  baseURL: "https://mikes-nc-news.herokuapp.com/api/"
});

export const getArticles = (topic, sort_by, order) => {
  return connection
    .get("articles/", {
      params: { topic: topic, sort_by: sort_by, order: order }
    })
    .then(res => {
      return res.data;
    });
};

export const getTopics = () => {
  return connection.get("topics/").then(res => {
    return res.data;
  });
};

export const getUsers = () => {
  return connection
    .get("users/")
    .then(res => {
      return res.data;
    })
    .catch();
};

export const getArticleById = article_id => {
  return connection.get(`articles/${article_id}`).then(res => {
    return res.data.article;
  });
};

export const getArticleComments = article_id => {
  return connection.get(`articles/${article_id}/comments`).then(res => {
    return res.data.comments;
  });
};

export const patchArticleVotes = (article_id, increment) => {
  return connection
    .patch(`articles/${article_id}`, {
      inc_votes: increment
    })
    .then(({ data }) => {
      return data.article;
    });
};

export const patchCommentVotes = (comment_id, increment) => {
  return connection
    .patch(`comments/${comment_id}`, {
      inc_votes: increment
    })
    .then(({ data }) => {
      return data.comment;
    });
};

export const postComment = (article_id, username, body) => {
  return connection
    .post(`articles/${article_id}/comments`, { username: username, body: body })
    .then(({ data }) => {
      return data.comment;
    })
    .catch(error => {
      return error;
    });
};

export const postArticle = ({ author, title, body, topic }) => {
  return connection
    .post(`articles/`, {
      author: author,
      body: body,
      title: title,
      topic: topic
    })
    .then(({ data }) => {
      return data.article;
    })
    .catch(error => {
      return error; //still needs handling
    });
};

export const deleteComment = comment_id => {
  return connection.delete(`comments/${+comment_id}`).catch(error => {
    return error;
  });
};
