import React, { useState } from "react";
import "./row.css";
import YouTube from "react-youtube";
import { Typography } from "@material-ui/core";
import { useFetchMoviesList } from "../../hooks/useFetchMoviesList";
import MovieBlock from "../MovieBlock";
import Modal from "../Modal";

//DTO
import { GENRE_TYPE_DTO, movieDTO } from "../../dto";

interface Props {
  title: GENRE_TYPE_DTO;
  fetchURL: string;
  isLarge?: string;
}

function Row({ title, fetchURL, isLarge }: Props): JSX.Element | null {
  const [trailerUrl, setTrailerUrl] = useState<string>("");

  const { data: movies } = useFetchMoviesList(title, fetchURL);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const handleModalClose = () => {
    setTrailerUrl("");
  };

  if (!movies?.length) return null;

  return (
    <div className="row">
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>

      <div className="row__posters">
        {movies.map((movie: movieDTO) => {
          if (movie.poster_path || movie.backdrop_path) {
            return (
              <MovieBlock
                key={movie.id}
                movie={movie}
                isLarge={isLarge}
                setTrailerUrl={setTrailerUrl}
              />
            );
          } else {
            return false;
          }
        })}
      </div>
      
      {trailerUrl && (
        <Modal
          isVisible={Boolean(trailerUrl)}
          handleModalClose={handleModalClose}
        >
          <YouTube
            className="youtube__popup"
            videoId={trailerUrl}
            opts={opts}
          ></YouTube>
        </Modal>
      )}
    </div>
  );
}

export default React.memo(Row);
