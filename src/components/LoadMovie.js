import React from "react";

function LoadMovie({ title, summary, image, genres }) {
  console.log(genres);
  return (
    <div>
      <h1>{title}</h1>
      <p>{summary}</p>
      <img src={image} alt={image}></img>
      <ul>
        {genres.map((each) => (
          <li>{each}</li>
        ))}
      </ul>
    </div>
  );
}

export default LoadMovie;
