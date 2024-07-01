import { useState, useEffect } from "react";

export default function WatchedContainer({movies}) {
  const [watchedMovies, setWatchedMovies] = useState([]);

  useEffect(() => {
    if (movies && movies.length > 0) {
      let cpyWatchedMovies = movies.filter((movieItem) => movieItem.isWatched);
      setWatchedMovies(cpyWatchedMovies);
    }
  }, [movies]);

  return (
    <div className="watched-container">
      <div className="watched-title-bar">
        <input type="text" value={`Watched Movies`} readOnly />
      </div>

      <div className="watched-movies-list">
        <ul>
          {watchedMovies.map((watchedMovie, index) => (
            <div className="watched-movie">
              <li key={index}>{watchedMovie.title}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
