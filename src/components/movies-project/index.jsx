import { useEffect, useState } from "react";
import GenreContainer from "./genre-container";
import "./movies-project.css";
import WatchedContainer from "./watched-container";

export default function MovieProject() {
  const [movies, setMovies] = useState([]);

  function addMovie(movie) {
    let cpyMovies = [...movies, movie];
    setMovies(cpyMovies);
  }

  function handleMovieWatched(movie) {
    let index = movies.findIndex((item) => item.title === movie.title);
    let cpyMovies = [...movies];

    movie.isWatched = true;
    cpyMovies[index] = movie;

    setMovies(cpyMovies);
  }

  return (
    <div className="project-container">
      <GenreContainer
        genre="Action"
        addMovie={addMovie}
        movies={movies}
        handleMovieWatched={handleMovieWatched}
      ></GenreContainer>

      <GenreContainer
        genre="Romance"
        addMovie={addMovie}
        movies={movies}
        handleMovieWatched={handleMovieWatched}
      ></GenreContainer>

      <GenreContainer
        genre="Horror"
        addMovie={addMovie}
        movies={movies}
        handleMovieWatched={handleMovieWatched}
      ></GenreContainer>

      <WatchedContainer movies={movies}></WatchedContainer>
    </div>
  );
}
