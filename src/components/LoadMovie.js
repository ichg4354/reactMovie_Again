import React from "react";
import { Link } from "react-router-dom";

function LoadMovie({ title, summary, image, genres, id }) {
  return (
    <div>
      <Link
        to={{
          pathname: `/detail/${id}`,
          state: {
            title: title,
            summary: summary,
          },
        }}
      >
        <h1>{title}</h1>
        <img src={image} alt={image}></img>
        <ul>
          {genres.map((each) => (
            <li>{each}</li>
          ))}
        </ul>
      </Link>
    </div>
  );
}

export default LoadMovie;
