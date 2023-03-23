import React from "react";
import Row from "../Row";
import requests from "../../requests";

//DTO
import { movieBlockDTO } from "../../dto";

const MovieRows = () => {
  const rowData: movieBlockDTO[] = [
    {
      key: "Top Rated",
      isLarge: true,
      fetchURL: requests.fetchTopRated,
    },
    {
      key: "In Theatres",
      isLarge: false,
      fetchURL: requests.fetchInTheatres,
    },
    {
      key: "Up Coming",
      isLarge: false,
      fetchURL: requests.fetchUpcoming,
    },
    {
      key: "Family",
      isLarge: false,
      fetchURL: requests.fetchFamilyMovies,
    },
    {
      key: "Horror",
      isLarge: false,
      fetchURL: requests.fetchHorrorMovies,
    },
    {
      key: "Action",
      isLarge: false,
      fetchURL: requests.fetchActionMovies,
    },
    {
      key: "Comedy",
      isLarge: false,
      fetchURL: requests.fetchComedyMovies,
    },
  ];

  return (
    <>
      {rowData.map((row) => {
        return <Row key={row.key} title={row.key} fetchURL={row.fetchURL} />;
      })}
    </>
  );
};

export default MovieRows;
