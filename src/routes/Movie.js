import axios from "axios";
import React from "react";
import LoadMovie from "../components/LoadMovie.js";

class Movie extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount() {
    this.getMovie();
  }
  getMovie = async () => {
    const rawMovieFile = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json"
    );
    const filteredMovieFile = rawMovieFile.data.data.movies;
    this.movieLoaded();
    this.saveMovie(filteredMovieFile);
  };
  movieLoaded = () => {
    this.setState({ isLoading: false });
  };
  saveMovie = (movies) => {
    this.setState({ movies: movies });
  };
  sendMovie = () => {
    return this.state.movies.map((movie) => (
      <LoadMovie
        title={movie.title}
        image={movie.medium_cover_image}
        summary={movie.summary}
        genres={movie.genres}
        id={movie.id}
      />
    ));
  };
  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <h1>{isLoading ? "Loading..." : this.sendMovie()}</h1>
      </div>
    );
  }
}

export default Movie;
