import React from "react";
import Nav from "./Nav";
import profile_pic from "../assets/profile_pic.jpg";
import "./ProfilesView.css";

function ProfileSelector(props) {
  const renderProfile = (userName) => {
    return (
      <div
        onClick={() => {
          props.onSetProfile(userName);
        }}
        className="col-xs-12 profileselector__profile"
      >
        <img
          src={profile_pic}
          alt="profile_pic"
          className="profileselector__profileIcon"
        />
        <p className="profileselector__profileName">{userName}</p>
      </div>
    );
  };

  return (
    <div className="profileselector">
      <div className="profileselector__title">Who's watching ?</div>
      <div className=" row profileselector__users">
        {renderProfile("Pavan Divekar")}
        {renderProfile("Pranav Bhagwat")}
        {renderProfile("Jaydeep Bobade")}
        {renderProfile("Akshay Dongave")}
        {renderProfile("Rohan Khare")}
      </div>
      {/* <div className="profileselector__confirmBtn">Continue</div> */}
    </div>
  );
}

export default ProfileSelector;
