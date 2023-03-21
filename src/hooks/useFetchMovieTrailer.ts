import { useQuery } from "react-query";
import { API_KEY, MOVIE_DB_BASE_URL } from '../constants'
import axios from 'axios'
 

export const useFetchMovieTrailer = (id: string) => {

    const fetchMovieTrailer = async () => {
        return axios.get(
            `${MOVIE_DB_BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
        ).then((res) => res.data)
    }

    return useQuery(id, fetchMovieTrailer,
        {
            refetchOnWindowFocus: false,
            enabled: false // disable this query from automatically running
        }
    );
}