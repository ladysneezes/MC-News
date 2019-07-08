import React from "react";

const Error = props => {
  const { error } = props;

  if (error && error.response.data.msg) {
    return (
      <p>
        {error.response.status}: {error.response.data.msg}
      </p>
    );
  } else if (error && error.message) {
    return <p>{error.message}</p>;
  } else {
    return <p>404 Page not found</p>;
  }
};

export default Error;
