import { useQuery } from "react-query";
import { API_KEY, MOVIE_DB_BASE_URL } from '../constants'
import axios from 'axios';

export const useFetchMovieDetails = (movieId: number) => {

    const fetchMovieDetailsQuery = async () => {
        return axios
            .get(
                `${MOVIE_DB_BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
            ).then((res) => {
                return res.data.results;
            })
    }

    return useQuery([movieId], fetchMovieDetailsQuery,
        {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            enabled: false
        })

}