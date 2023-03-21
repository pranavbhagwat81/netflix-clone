import React, { useMemo } from "react";
import requests from "../../requests";
import "./Banner.css";
import nobanner from "../../assets/nobanner.jpg";
import { Typography } from "@material-ui/core";
import { useFetchRandomMovie } from "../../hooks/useFetchRandomMovie";
import { IMG_BASE_URL_ORIGINAL, BANNER_GENRE_KEY } from '../../constants'


const Banner = (): JSX.Element | null => {
  
  const { isLoading, randomMovie, randomMovieTitle} = useFetchRandomMovie(BANNER_GENRE_KEY,requests.fetchTopRated,5000 )

  const randomMovieId = randomMovie?.id;

  const getBannerImage = useMemo(() => {
    const movieName = randomMovie?.backdrop_path || randomMovie?.poster_path || ''
    if (movieName) {
      return `url('${IMG_BASE_URL_ORIGINAL}${movieName}')`;
    } else {
      return `url(${nobanner})`;
    }
  }, [randomMovieId])

  if (isLoading) {
    return null
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: getBannerImage,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <Typography className="banner__title" variant="h2" gutterBottom >
          {randomMovieTitle}
        </Typography>
        <div className="banner__buttons">
        </div>
      </div>
      <div className="banner--bottom"></div>
    </header>
  );
}

export default Banner;
