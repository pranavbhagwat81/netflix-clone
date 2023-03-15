import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL } from '../../constants'

export const useFetchMoviesList = (title, fetchURL,timeout) => {

    const fetchMoviesList = async () => { return axios.get(`${BASE_URL}${fetchURL}`).then((res) => res.data.results) }

    return useQuery(title, fetchMoviesList,
        {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        }
    );
}