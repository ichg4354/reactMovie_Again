import React from "react";

function Detail(props) {
  const { title, summary } = props.location.state;
  return (
    <div>
      <h1>{title}</h1>
      <h3>{summary}</h3>
    </div>
  );
}

export default Detail;
