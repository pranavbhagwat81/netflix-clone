import React, { useState, lazy, Suspense } from "react";
import "../../index.css";
import ProfileView from "../Profiles";

//Lazy Components
const MovieRows = lazy(() => import("../MovieRows"));
const Nav = lazy(() => import("../Nav"));
const Banner = lazy(() => import("../Banner"));

//DTO
import { ProfileInfoDTO } from "../../dto";

function App(): JSX.Element {
  const [profile, setProfile] = useState<ProfileInfoDTO | null>(null);

  if (profile) {
    return (
      <div className="app">
        <Suspense fallback={<>Loading...</>}><Nav/></Suspense>
        <Suspense fallback={<>Loading...</>}><Banner/></Suspense>
        <Suspense fallback={<>Loading...</>}><MovieRows/></Suspense>
      </div>
    );
  } else {
    return <ProfileView onSetProfile={setProfile} />;
  }
}

export default App;
