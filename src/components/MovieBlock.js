import axios from 'axios';
import React from 'react'
import "./row.css";

const MovieBlock = ({ movie, isLarge, setTrailerUrl, trailerUrl }) => {

    const base_url = "https://image.tmdb.org/t/p/w185/";

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        }
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=acf0a46c4b8431cdbc95e10c7c33e974`
            )
            .then((res) => {
                //console.log(res);
                //console.log(res.data.results[0].id);
                //console.log(res.data.results[0].key);
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