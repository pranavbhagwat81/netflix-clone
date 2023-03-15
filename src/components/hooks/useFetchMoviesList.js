import axios from "axios";
import { useQuery } from "react-query";
import { MOVIE_DB_BASE_URL } from '../../constants'

export const useFetchMoviesList = (title, fetchURL,timeout) => {
    console.log('title', title)
    const fetchMoviesList = async () => { return axios.get(`${MOVIE_DB_BASE_URL}${fetchURL}`).then((res) => res.data.results) }

    return useQuery(title, fetchMoviesList,
        {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        }
    );
}