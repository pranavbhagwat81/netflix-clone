import React from "react";
import vijay_profile_pic from "../assets/vijay.jpg";
import anand_profile_pic from "../assets/anand.jpg";
import children_profile_pic from "../assets/children.jpg";
import "./ProfilesView.css";

function ProfileSelector(props) {
  const renderProfile = (profile) => {
    return (
      <div
        onClick={() => {
          props.onSetProfile(profile.name);
        }}
        className="col-xs-12 profileselector__profile"
      >
        <img
          src={profile.pic}
          alt="profile_pic"
          className="profileselector__profileIcon"
        />
        <p className="profileselector__profileName">{profile.name}</p>
      </div>
    );
  };

  const profiles = [
    { name: "Anand", pic: anand_profile_pic },
    { name: "Vijay", pic: vijay_profile_pic },
    { name: "Children", pic: children_profile_pic },
  ];

  return (
    <div className="profileselector">
      <div className="profileselector__title">Who's watching ?</div>
      <div className=" row profileselector__users">
        {profiles.map((profile) => {
          return renderProfile(profile);
        })}
        {/* {renderProfile("Anand")}
        {renderProfile("Vijay")}
        {renderProfile("Children")} */}
      </div>
      {/* <div className="profileselector__confirmBtn">Continue</div> */}
    </div>
  );
}

export default ProfileSelector;
