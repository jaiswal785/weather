import { useEffect, useState } from "react";

export default function GenreContainer({
  genre,
  addMovie,
  movies,
  handleMovieWatched,
}) {
  const [isEditable, setIsEditable] = useState(false);
  const [title, setTitle] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  function handleClick() {
    if (isEditable && title !== "") {
      addMovie({
        title: title,
        genre: genre.toLowerCase(),
        isWatched: false,
      });
      setTitle("");
    }
    setIsEditable(!isEditable);
  }

  useEffect(() => {
    if (movies && movies.length > 0) {
      let cpyFilteredMovies = movies.filter(
        (movieItem) =>
          !movieItem.isWatched &&
          movieItem.genre.toLowerCase() === genre.toLowerCase()
      );
      setFilteredMovies(cpyFilteredMovies);
    }
  }, [movies]);

  return (
    <div className="genre-container">
      <div className="genre-title-bar">
        <input
          type="text"
          readOnly={!isEditable}
          value={!isEditable ? genre : title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button onClick={handleClick}>
          {!isEditable ? "Add Title" : "Submit"}
        </button>
      </div>

      <div className="filtered-movies-list">
        <ul>
          {filteredMovies.map((filteredMovie, index) => (
            <div className="filtered-movie">
              <li key={index}>{filteredMovie.title}</li>
              <button onClick={() => handleMovieWatched(filteredMovie)}>
                Watched
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
