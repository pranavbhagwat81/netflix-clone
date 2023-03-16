import React, { useState } from "react";
import Row from "../Row";
import requests from "../../requests";
import "../../index.css";
import Banner from "../Banner";
import Nav from "../Nav";
import ProfileView from "../Profiles";

function App() {
  const [profile, setProfile] = useState(null);

  const rowData = [
    {
      key: 'Top Rated',
      isLarge: true,
      fetchURL: requests.fetchTopRated
    },
    {
      key: 'In Theatres',
      isLarge: false,
      fetchURL: requests.fetchInTheatres
    },
    {
      key: 'Up Coming',
      isLarge: false,
      fetchURL: requests.fetchUpcoming
    },
    {
      key: 'Family',
      isLarge: false,
      fetchURL: requests.fetchFamilyMovies
    },
    {
      key: 'Horror',
      isLarge: false,
      fetchURL: requests.fetchHorrorMovies
    },
    {
      key: 'Action',
      isLarge: false,
      fetchURL: requests.fetchActionMovies
    },
    {
      key: 'Comedy',
      isLarge: false,
      fetchURL: requests.fetchComedyMovies
    }
  ]

  if (profile) {
    return (
      <div className="app">
        <Nav></Nav>
        <Banner></Banner>
        <div>
          {
            rowData.map((row) => {
              return <Row key={row.key} title={row.key} fetchURL={row.fetchURL} />
            })
          }
        </div>
      </div>
    );
  } else {
    return <ProfileView onSetProfile={setProfile} />;
  }
}

export default App;
