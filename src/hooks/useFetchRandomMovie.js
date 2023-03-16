import { useState } from "react"
import { useFetchMoviesList } from "./useFetchMoviesList"

export const useFetchRandomMovie = (title, fetchURL, timeout) => {

    const { isLoading, data: movies } = useFetchMoviesList(title, fetchURL)
    const [randomMovie, setrandomMovie] = useState(null)
    let index = 0;

    if (!isLoading && timeout) {
        setTimeout(() => {
             index = (Math.floor(Math.random() * movies.length))
            setrandomMovie(movies[index]);
        }, timeout)
    }

    return { isLoading, randomMovie}
}