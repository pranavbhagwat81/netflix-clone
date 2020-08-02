import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import noposter from "../assets/noposter.jpg";
import { Typography } from "@material-ui/core";

function Row({ title, fetchURL, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original/";
  //A snippet of code which runs when props changes.

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      console.log(res.data.results);
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
      movieTrailer(
        movie?.name ||
          movie?.original_title ||
          movie?.title ||
          movie?.name ||
          movie?.original_name,
        { multi: true }
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          //setTrailerUrl("lX3vT_Gm_HE");
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => {
          console.log(err);
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
