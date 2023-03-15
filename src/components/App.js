import React, { useState } from "react";
import Row from "./Row";
import requests from "../requests";
import "../index.css";
import "./Banner";
import Banner from "./Banner";
import Nav from "./Nav";
import ProfileView from "./ProfilesView";

function App() {
  const [profile, setProfile] = useState(null);

  if (profile) {
    return (
      <div className="app">
        <Nav></Nav>
        <Banner></Banner>
        <Row isLarge title="Trending Now" fetchURL={requests.fetchTrending} />
        <Row isLarge title="Top Rated" fetchURL={requests.fetchTopRated} />
        <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
        <Row title="Family Movies" fetchURL={requests.fetchFamilyMovies} />
        <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
        <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
        <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
      </div>
    );
  } else {
    return <ProfileView onSetProfile={setProfile} />;
  }
}

export default App;
