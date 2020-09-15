import axios from "axios";
import React from "react";
import LoadMovie from "./Movie.js";

class App extends React.Component {
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
  render() {
    const { isLoading, movies } = this.state;
    console.log(movies);
    return (
      <div>
        <h1>
          {isLoading ? (
            "is Loading.."
          ) : (
            <LoadMovie value={movies.map((each) => each.title)} />
          )}
        </h1>
      </div>
    );
  }
}

export default App;
