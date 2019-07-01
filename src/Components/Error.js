import React from "react";

const Error = props => {
  const { error } = props;
  if (error.message) return <p>{error.message}</p>;
  else return <p>Error</p>;
};

export default Error;
