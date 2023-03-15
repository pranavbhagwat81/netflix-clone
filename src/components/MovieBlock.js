import axios from 'axios';
import React from 'react'
import "./row.css";
import { API_KEY, MOVIE_DB_BASE_URL, IMG_BASE_URL_w185 } from '../constants'

const MovieBlock = ({ movie, isLarge, setTrailerUrl, trailerUrl, title }) => {

    const base_url = IMG_BASE_URL_w185;

    const handleClick = (movie) => {
        setTrailerUrl("");
        axios
            .get(
                `${MOVIE_DB_BASE_URL}/movie/${movie.id}/videos?api_key=${API_KEY}`
            )
            .then((res) => {
                setTrailerUrl(res.data.results[0].key);
            })

    };

    const getMoviePoster = (movie, isLarge) => {
        if (movie.poster_path) {
            return base_url + movie.poster_path;
        } else if (movie.backdrop_path) {
            return base_url + movie.backdrop_path;
        }
    };
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
}

export default MovieBlock