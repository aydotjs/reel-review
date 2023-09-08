import React from "react";
import { useState } from "react";
import tempMovieData from "./MovieData";
import tempWatchedData from "./WatchedMovieData";
import Button from "./Button";
import Movie from "./Movie";
import Summary from "./Summary";
import WatchedMovies from "./WatchedMovies";
const Main = () => {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  // Average of different parameters
  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  // Average of imdb rating
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  // Average of user rating
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  // Average of runtime rating
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  const handleIsOpen1 = () => {
    setIsOpen1((open) => !open);
  };
  const handleIsOpen2 = () => {
    setIsOpen2((open) => !open);
  };

  return (
    <main className="main">
      <div className="box">
        <Button isOpen={isOpen1} onOpen={handleIsOpen1} />
        {isOpen1 && (
          <ul className="list">
            <Movie movies={movies} />
          </ul>
        )}
      </div>

      <div className="box">
       <Button isOpen={isOpen2} onOpen={handleIsOpen2}/>
        {isOpen2 && (
          <>
            <Summary
              avgImdbRating={avgImdbRating}
              avgUserRating={avgUserRating}
              avgRuntime={avgRuntime}
              watchedMovies={watched}
            />
            <ul className="list">
              <WatchedMovies watched={watched}/>
            </ul>
          </>
        )}
      </div>
    </main>
  );
};

export default Main;
