import React from "react";
import requests from "../../requests";
import "./Banner.css";
import nobanner from "../../assets/nobanner.jpg";
import { Typography } from "@material-ui/core";
import { useFetchRandomMovie } from "../../hooks/useFetchRandomMovie";
import { IMG_BASE_URL_ORIGINAL, BANNER_GENRE_KEY } from '../../constants'

function Banner() {
  
  const { isLoading, randomMovie} = useFetchRandomMovie(BANNER_GENRE_KEY,requests.fetchTopRated,5000 )

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
        backgroundImage: getBannerImage(randomMovie),
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <Typography className="banner__title" variant="h2" gutterBottom >
          {getMovieTitle(randomMovie)}
        </Typography>
        <div className="banner__buttons">
        </div>
      </div>
      <div className="banner--bottom"></div>
    </header>
  );
}

export default Banner;
