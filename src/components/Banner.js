import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(requests.fetchNetflixOriginals).then((res) => {
      let index = Math.floor(Math.random() * res.data.results.length);
      console.log(res.data.results[index]);
      setMovie(res.data.results[index]);
    });
  }, []);

  const truncate = (str, length, ending) => {
    console.log(movie);
    console.log(str);
    if (str) {
      if (length == null) {
        length = 100;
      }
      if (ending == null) {
        ending = "...";
      }
      if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
      } else {
        return str;
      }
    }
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${
          movie?.backdrop_path || movie?.poster_path
        }')`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.name || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div class="banner--bottom"></div>
    </header>
  );
}

export default Banner;
