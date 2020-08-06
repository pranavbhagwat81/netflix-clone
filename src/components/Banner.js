import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.css";
import nobanner from "../assets/nobanner.jpg";
import { Typography } from "@material-ui/core";

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(requests.fetchTopRated).then((res) => {
      let index = Math.floor(Math.random() * res.data.results.length);
      //console.log(res.data.results[index]);
      setMovie(res.data.results[index]);
    });
  }, []);

  const truncate = (str, length, ending) => {
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

  const getBannerImage = (movie) => {
    if (movie?.backdrop_path || movie?.poster_path) {
      return `url('https://image.tmdb.org/t/p/original${
        movie?.backdrop_path || movie?.poster_path
      }')`;
    } else {
      return `url(${nobanner})`;
    }
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: getBannerImage(movie),
      }}
    >
      <div className="banner__contents">
        <Typography className="banner__title" variant="h2" gutterBottom>
          {movie?.name || movie?.title || movie?.original_name}
        </Typography>
        <div className="banner__buttons">
          {/*
          <Typography
            onClick={() => {
              handleClick(movie);
            }}
            variant="button"
            gutterBottom
            className="banner__button"
          >
            Play
          </Typography>
           <Typography variant="button" gutterBottom className="banner__button">
            My List
          </Typography> */}
        </div>
        {/* <Typography
          variant="subtitle2"
          gutterBottom
          className="banner__description"
        >
          {truncate(movie?.overview, 150)}
        </Typography> */}
      </div>
      <div className="banner--bottom"></div>
    </header>
  );
}

export default Banner;
