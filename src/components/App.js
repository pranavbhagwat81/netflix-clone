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
        <Row isLarge title="Top Rated" fetchURL={requests.fetchTopRated} />
        <Row title="In Theatres" fetchURL={requests.fetchInTheatres} />
        <Row title="Up Coming" fetchURL={requests.fetchUpcoming} />
        <Row title="Family" fetchURL={requests.fetchFamilyMovies} />
        <Row title="Horror" fetchURL={requests.fetchHorrorMovies} />
        <Row title="Action" fetchURL={requests.fetchActionMovies} />
        <Row title="Comedy" fetchURL={requests.fetchComedyMovies} />
      </div>
    );
  } else {
    return <ProfileView onSetProfile={setProfile} />;
  }
}

export default App;
