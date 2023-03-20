import React, { useState } from "react";
import Row from "../Row";
import requests from "../../requests";
import "../../index.css";
import Banner from "../Banner";
import ProfileView from "../Profiles";
import Nav from "../Nav";

//DTO
import { movieBlockDTO, ProfileInfoDTO } from '../../dto'

function App(): JSX.Element {
  const [profile, setProfile] = useState<ProfileInfoDTO | null>(null);

  const rowData: movieBlockDTO[] = [
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
