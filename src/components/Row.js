import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./row.css";
import YouTube from "react-youtube";
import { Typography } from "@material-ui/core";

function Row({ title, fetchURL, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/w185/";
  //A snippet of code which runs when props changes.

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      //console.log(res.data.results);
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      //console.log(movie);
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=acf0a46c4b8431cdbc95e10c7c33e974`
        )
        .then((res) => {
          //console.log(res);
          //console.log(res.data.results[0].id);
          //console.log(res.data.results[0].key);
          setTrailerUrl(res.data.results[0].key);
        });
    }
  };

  const getMoviePoster = (movie, isLarge) => {
    if (movie.poster_path) {
      return base_url + movie.poster_path;
    } else if (movie.backdrop_path) {
      return base_url + movie.backdrop_path;
    }
  };

  return (
    <div className="row">
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>

      <div className="row__posters">
        {movies.map((movie) => {
          if (movie.poster_path || movie.backdrop_path) {
            return (
              <img
                key={movie.id}
                onClick={() => {
                  handleClick(movie);
                }}
                className={`row__poster ${isLarge && "row__posterLarge"}`}
                src={getMoviePoster(movie, isLarge)}
                alt={movie.name}
              ></img>
            );
          } else {
            return false;
          }
        })}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}
    </div>
  );
}

export default Row;

// if (trailerUrl) {
//   setTrailerUrl("");
// } else {
//   setTrailerUrl(urlParams.get("v"));
// }
