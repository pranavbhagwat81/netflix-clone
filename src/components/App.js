import React from "react";
import Row from "./Row";
import requests from "../requests";
import "../index.css";
import "./Banner";
import Banner from "./Banner";

function App() {
  return (
    <div className="app">
      <Banner></Banner>
      <Row
        isLarge
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="TopRated Movies" fetchURL={requests.fetchTopRated} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
