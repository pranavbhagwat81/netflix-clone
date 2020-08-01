import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./row.css";

function Row({ title, fetchURL }) {
  console.log(fetchURL);

  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  //A snippet of code which runs when props changes.

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      console.log(res.data);
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              className="row__poster"
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
            ></img>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
