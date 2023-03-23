import React from "react";
import YouTube from "react-youtube";

interface Props {
  trailerUrl: string;
}

const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 0,
  },
};

const YoutubeBlock = ({ trailerUrl }: Props): JSX.Element => {
  return (
    <YouTube
      className="youtube__popup"
      videoId={trailerUrl}
      opts={opts}
    ></YouTube>
  );
};

export default YoutubeBlock;
