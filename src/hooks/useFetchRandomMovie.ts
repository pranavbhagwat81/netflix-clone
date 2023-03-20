import { useState } from "react"
import { useFetchMoviesList } from "./useFetchMoviesList"
import { GENRE_TYPE_DTO, movieDTO} from '../dto'

export const useFetchRandomMovie = (title: GENRE_TYPE_DTO, fetchURL: string, timeout: number) => {

    const { isLoading, data: movies } = useFetchMoviesList(title, fetchURL)
    const [randomMovie, setrandomMovie] = useState<movieDTO | null>(null)
    let index = 0;

    if (!isLoading && timeout) {
        setTimeout(() => {
             index = (Math.floor(Math.random() * movies.length))
            setrandomMovie(movies[index]);
        }, timeout)
    }

    return { isLoading, randomMovie}
}