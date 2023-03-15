import React, { useState } from "react";
import requests from "../requests";
import "./Banner.css";
import nobanner from "../assets/nobanner.jpg";
import { Typography } from "@material-ui/core";
import { useFetchMoviesList } from "./hooks/useFetchMoviesList";
import { IMG_BASE_URL_ORIGINAL } from '../constants'

function Banner() {
  const key = 'Top Rated'

  const { isLoading, data: movies } = useFetchMoviesList(key, requests.fetchTopRated,3000)
  const [movieIndex, setMovieIndex] = useState(null);

  if(!isLoading){
    setTimeout(()=>{
      setMovieIndex(Math.floor(Math.random() * movies.length))
    },5000)
  }

  const previewMovie = !isLoading && movies[movieIndex];

  const getBannerImage = (movie) => {
    if (movie?.backdrop_path || movie?.poster_path) {
      return `url('${IMG_BASE_URL_ORIGINAL}${movie?.backdrop_path || movie?.poster_path
        }')`;
    } else {
      return `url(${nobanner})`;
    }
  };

  const getMovieTitle = (movie) => {
    return movie?.name || movie?.title || movie?.original_name
  }

  if (isLoading) {
    return null
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: getBannerImage(previewMovie),
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <Typography className="banner__title" variant="h2" gutterBottom >
          {getMovieTitle(previewMovie)}
        </Typography>
        <div className="banner__buttons">
        </div>
      </div>
      <div className="banner--bottom"></div>
    </header>
  );
}

export default Banner;
