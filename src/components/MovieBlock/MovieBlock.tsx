import React from 'react'
import "../Row/row.css";
import { useFetchMovieDetails } from '../../hooks/useFetchMovieDetails'
import noposter from '../../assets/noposter.jpg'

//DTO
import { movieDTO } from '../../dto';
import { getMovieId, getMovieName, getMoviePoster } from '../../utils';

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

    if(isLoading) return null
    return (
        <img
            key={getMovieId(movie)}
            onClick={handleClick}
            className={`row__poster ${isLarge && "row__posterLarge"}`}
            src={getMoviePoster(movie)}
            onError = {({currentTarget})=>{
                currentTarget.onerror = null; // prevents looping
                currentTarget.src=noposter;
            }}
            alt={getMovieName(movie)}
        ></img>
    );
}

export default React.memo(MovieBlock)