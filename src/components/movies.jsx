import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    // Initializing our state object FYI this is not the good way to initialize
    // showed in componenets life cycle hooks
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    // creating a new array which will not contain the passed movie element
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies }); // setting the movies object to new movies object ie. overwriting
    // if both are same you need not to repeat the same name twice
  };

  render() {
    const { length: count } = this.state.movies; // Using object destucturing helps in refactoring the code
    // CONDITIONAL RENDERING
    if (count === 0) return <p>There are no movies in the database.</p>;

    return (
      <React.Fragment>
        <p>Showing {count} movies in the database.</p>

        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* so we need the rows dynamically so using getMovies()*/}
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
