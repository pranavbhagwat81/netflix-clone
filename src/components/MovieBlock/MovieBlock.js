import React from 'react'
import "../Row/row.css";
import { IMG_BASE_URL_w185 } from '../../constants'
import { useFetchMovieDetails } from '../../hooks/useFetchMovieDetails'

const MovieBlock = ({ movie, isLarge, setTrailerUrl }) => {

    const base_url = IMG_BASE_URL_w185;

    const { isLoading, data, refetch} = useFetchMovieDetails(movie.id);
    if(!isLoading){
        data?.length && setTrailerUrl(data[0].key)
    }

    const handleClick = (movie) => {
        setTrailerUrl("");
        refetch();
    };

    const getMoviePoster = (movie, isLarge) => {
        if (movie.poster_path) {
            return base_url + movie.poster_path;
        } else if (movie.backdrop_path) {
            return base_url + movie.backdrop_path;
        }
    };

    if(isLoading) return null
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