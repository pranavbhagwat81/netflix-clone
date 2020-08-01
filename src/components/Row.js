import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./row.css";

function Row({ title, fetchURL, isLarge }) {
  console.log(fetchURL);

  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  //A snippet of code which runs when props changes.

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      console.log(res.data.results);
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
              key={movie.id}
              className={`row__poster ${isLarge && "row__posterLarge"}`}
              src={`${base_url}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            ></img>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
