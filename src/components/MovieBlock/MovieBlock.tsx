import React from 'react'
import "../Row/row.css";
import { IMG_BASE_URL_w185 } from '../../constants'
import { useFetchMovieDetails } from '../../hooks/useFetchMovieDetails'
import noposter from '../../assets/noposter.jpg'

//DTO
import { movieDTO } from '../../dto';

interface MovieBlockProps {
    movie: movieDTO,
    isLarge?: string,
    setTrailerUrl: Function,
}

const MovieBlock = ({ movie, isLarge, setTrailerUrl }: MovieBlockProps): JSX.Element | null => {

    const { isLoading, refetch} = useFetchMovieDetails(movie.id);
   
    const handleClick = () => {
        refetch().then((refetchResponse: any)=>{
            setTrailerUrl(refetchResponse?.data[0].key || null)
        });
    };

    const getMoviePoster = (movie: movieDTO) => {
        
        if (movie.poster_path) {
            return IMG_BASE_URL_w185 + movie.poster_path;
        } else if (movie.backdrop_path) {
            return IMG_BASE_URL_w185 + movie.backdrop_path;
        }
        
        return '';
    };

    if(isLoading) return null
    return (
        <img
            key={movie.id}
            onClick={handleClick}
            className={`row__poster ${isLarge && "row__posterLarge"}`}
            src={getMoviePoster(movie)}
            onError = {({currentTarget})=>{
                currentTarget.onerror = null; // prevents looping
                currentTarget.src=noposter;
            }}
            alt={movie.name}
        ></img>
    );
}

export default React.memo(MovieBlock)