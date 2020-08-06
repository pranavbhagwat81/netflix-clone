import React, { useState, useEffect } from "react";
import "./Carousel.scss";
import axios from "../axios";

function Carousel({ title, fetchURL, isLarge }) {
  const [movies, setMovies] = useState([]);
  let arr = [];
  const base_url = "https://image.tmdb.org/t/p/w185/";

  useEffect(() => {
    console.log(title, fetchURL, isLarge);
    axios.get(fetchURL).then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  const getMoviePoster = (movie, isLarge) => {
    console.log(movie);
    if (movie.poster_path) {
      return base_url + movie.poster_path;
    } else if (movie.backdrop_path) {
      return base_url + movie.backdrop_path;
    }
  };

  const renderCols = (index) => {
    console.log(movies);
    let startIndex = index * 5;
    console.log(startIndex);
    let movieItems = [];
    for (let j = 0; j < 5; j++) {
      movieItems.push(
        <div className="item">
          <img src={getMoviePoster(movies[startIndex++])} />
        </div>
      );
    }
    return movieItems;
  };

  if (movies.length !== 0) {
    console.log(movies);
    return (
      <div className="wrapper">
        {Array(3)
          .fill("")
          .map((item, index) => {
            console.log(index);
            return (
              <section id={`section${index}`}>
                <a
                  href={`#section${index + 1 < 0 ? 2 : index - 1}`}
                  className="arrow__btn"
                >
                  ‹
                </a>
                {renderCols(index)}
                <a
                  href={`#section${index + 1 > 2 ? 0 : index + 1}`}
                  className="arrow__btn"
                >
                  ›
                </a>
              </section>
            );
          })}
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Carousel;
