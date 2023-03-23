import axios from "axios";
import { useQuery } from "react-query";
import { MOVIE_DB_BASE_URL } from '../constants'
import { GENRE_TYPE_DTO, movieDTO } from '../dto'

export const useFetchMoviesList = (title: GENRE_TYPE_DTO, fetchURL: string) => {
    const fetchMoviesList = async () => { return axios.get(`${MOVIE_DB_BASE_URL}${fetchURL}`).then((res) => {        
        return res.data.results.sort((a: movieDTO, b: movieDTO) => {
            return b.popularity - a.popularity;
        });
    }) }

    return useQuery(title, fetchMoviesList,
        {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            staleTime: Infinity
        }
    );
}