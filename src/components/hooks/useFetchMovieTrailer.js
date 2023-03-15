import { useQuery } from "react-query";


export const useFetchMovieTrailer = (id) => {

    const fetchMovieTrailer = async () => {
        return axios.get(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=acf0a46c4b8431cdbc95e10c7c33e974`
        ).then((res) => res.data)
    }

    return useQuery(id, fetchMovieTrailer,
        {
            refetchOnWindowFocus: false,
            enabled: false // disable this query from automatically running
        }
    );
}