import React, { useMemo } from "react";
import requests from "../../requests";
import "./Banner.css";
import nobanner from "../../assets/nobanner.jpg";
import { Typography } from "@material-ui/core";
import { useFetchRandomMovieDetails } from "../../hooks/useFetchRandomMovieDetails";
import { IMG_BASE_URL_ORIGINAL, BANNER_GENRE_KEY } from '../../constants'

const Banner = (): JSX.Element | null => {
  
  const { isLoading, randomMovieId, randomMovieName, randomMovieTitle} = useFetchRandomMovieDetails(BANNER_GENRE_KEY,requests.fetchTopRated,5000 )

  const getBannerImage = useMemo(() => {
    if(randomMovieName) {
      return `url('${IMG_BASE_URL_ORIGINAL}${randomMovieName}')`;
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
