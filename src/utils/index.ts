import { IMG_BASE_URL_w185 } from "../constants";
import { movieDTO } from "../dto";

export const getMovieTitle = (movie: movieDTO | null) =>{
    return movie?.name || movie?.title || movie?.original_name || ''
}

export const getMovieName = (movie: movieDTO | null) =>{
    return movie?.backdrop_path || movie?.poster_path || ''
}

export const getMovieId = (movie: movieDTO | null) =>{
    return movie?.id || '';
}

export const getMoviePath = (movie: movieDTO) => {
    return movie.poster_path || movie.backdrop_path || null
}

export const getMoviePoster = (movie: movieDTO) => {
        
    if (movie.poster_path) {
        return IMG_BASE_URL_w185 + movie.poster_path;
    } else if (movie.backdrop_path) {
        return IMG_BASE_URL_w185 + movie.backdrop_path;
    }
    
    return '';
};