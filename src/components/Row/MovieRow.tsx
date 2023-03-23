import React from "react";
import { movieDTO } from "../../dto";
import MovieBlock from "../MovieBlock";

interface Props {
  movie: movieDTO;
  isLarge?: string;
  setTrailerUrl: Function;
  key: number
}

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
