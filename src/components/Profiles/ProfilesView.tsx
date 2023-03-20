import React from "react";
import vijay_profile_pic from "../../assets/vijay.jpg";
import anand_profile_pic from "../../assets/anand.jpg";
import children_profile_pic from "../../assets/children.jpg";
import "./ProfilesView.css";
import { Typography } from "@material-ui/core";

//DTO
import { ProfileInfoDTO } from '../../dto'

interface Props {
  onSetProfile: Function
}

function ProfileSelector({onSetProfile}: Props) {
  const renderProfile = (profile: ProfileInfoDTO) => {
    return (
      <div
        key={profile.name}
        onClick={() => {
          onSetProfile(profile.name);
        }}
        className="col-xs-12 profileselector__profile"
      >
        <img
          src={profile.pic}
          alt="profile_pic"
          className="profileselector__profileIcon"
        />
        <span className="profileselector__profileName">
          <Typography component={'span'} variant="h4" gutterBottom>
            {profile.name}
          </Typography>
        </span>
      </div>
    );
  };

  const profiles: ProfileInfoDTO[] = [
    { name: "Anand", pic: anand_profile_pic },
    { name: "Vijay", pic: vijay_profile_pic },
    { name: "Children", pic: children_profile_pic },
  ];

  return (
    <div className="profileselector">
      <Typography gutterBottom>
        <div className="profileselector__title">Who's watching ?</div>
      </Typography>
      <div className=" row profileselector__users">
        {profiles.map((profile) => {
          return renderProfile(profile);
        })}
      </div>
    </div>
  );
}

export default ProfileSelector;
