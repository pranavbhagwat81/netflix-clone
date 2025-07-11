import { useState, useMemo } from "react"
import { useFetchMoviesList } from "./useFetchMoviesList"
import { GENRE_TYPE_DTO, movieDTO} from '../dto'
import { getMovieId, getMovieName, getMovieTitle } from "../utils"

export const useFetchRandomMovieDetails = (title: GENRE_TYPE_DTO, fetchURL: string, timeout: number) => {

    const { isLoading, data: movies } = useFetchMoviesList(title, fetchURL)
    const [randomMovie, setrandomMovie] = useState<movieDTO | null>(null)
    let index = 0;

    const randomMovieDetails = useMemo(() => {
            const randomMovieTitle = getMovieTitle(randomMovie);
            const randomMovieName = getMovieName(randomMovie);
            const randomMovieId = getMovieId(randomMovie)
        return { randomMovieTitle, randomMovieName, randomMovieId}
    }, [getMovieId(randomMovie)])

    if (!isLoading && timeout) {
        setTimeout(() => {
             index = (Math.floor(Math.random() * movies.length))
            setrandomMovie(movies[index]);
        }, timeout)
    }


    const { randomMovieTitle, randomMovieName, randomMovieId} = randomMovieDetails;
    return { isLoading, randomMovieTitle, randomMovieName, randomMovieId }
}