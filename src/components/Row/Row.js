import React, { useState } from "react";
import "./row.css";
import YouTube from "react-youtube";
import { Typography } from "@material-ui/core";
import { useFetchMoviesList } from '../../hooks/useFetchMoviesList'
import MovieBlock from "../MovieBlock";

function Row({ title, fetchURL, isLarge }) {

  const [trailerUrl, setTrailerUrl] = useState("");

  const { isLoading, error, data: movies, isFetching } = useFetchMoviesList(title, fetchURL)

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  if (isLoading || isFetching) return <span>Loading..</span>
  return (
    <div className="row">
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>

      <div className="row__posters">
        {movies.map((movie) => {
          if (movie.poster_path || movie.backdrop_path) {
            return <MovieBlock key={movie.id} movie={movie} isLarge={isLarge} setTrailerUrl={setTrailerUrl} trailerUrl={movie.id} title={title} />
          } else {
            return false;
          }
        })}
      </div>

      {trailerUrl && (
        <YouTube
          className="youtube__popup"
          videoId={trailerUrl}
          opts={opts}
        ></YouTube>
      )}
    </div>
  );
}

export default Row;
