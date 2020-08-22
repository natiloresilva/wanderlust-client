import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { withAuth } from "../../lib/AuthProvider";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import "./profile.css";
import AvatarComponent from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";

function UserProfile(props) {
  let history = useHistory();
  const edit = () => {
    history.push(`/profile/edit`);
  };
  const { username, email, city, bio } = props.user;
  return (
    <div>
      <div className="container-profile">
        <Typography variant="h4">My profile</Typography>
        <div className="container-profile-info">
          <div className="container-avatar">
            <AvatarComponent name={username.slice(0, 1).toUpperCase()} />
          </div>
          <Typography variant="body1">
            <span>Username: </span>
            {username}
          </Typography>
          <Typography variant="body1">
            <span>Email: </span>
            {email}
          </Typography>
          <Typography variant="body1">
            <span>City: </span>
            {city}
          </Typography>
          <Typography variant="body1">
            <span>Bio: </span>
            {bio}
          </Typography>
        </div>
      </div>
      <div className="container-edit-button">
        <Button text="Edit" handleClickButton={edit} />
      </div>
      <NavBar />
    </div>
  );
}

export default withAuth(UserProfile);
