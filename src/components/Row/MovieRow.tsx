import React from "react";
import { movieDTO } from "../../dto";
import MovieBlock from "../MovieBlock";

interface Props {
  movie: movieDTO;
  isLarge?: string;
  setTrailerUrl: Function;
  key: number
}

// function movieRowPropsAreEqual(prevMovie: any, nextMovie: any) {
//     console.log('prevProp', prevMovie);
//     console.log('nextProp', nextMovie);
//     return true
//     // return prevMovie.title === nextMovie.title
//     //   && prevMovie.releaseDate === nextMovie.releaseDate;
//   }

const MovieRow = ({ movie, isLarge, setTrailerUrl }: Props): JSX.Element | null => {
  if (movie.poster_path || movie.backdrop_path) {
    return (
      <MovieBlock
        key={movie.id}
        movie={movie}
        isLarge={isLarge}
        setTrailerUrl={setTrailerUrl}
      />
    );
  }

  return null;
};

export default React.memo(MovieRow);
