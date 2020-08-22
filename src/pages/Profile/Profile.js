import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { withAuth } from "../../lib/AuthProvider";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import "./profile.css";

function UserProfile(props) {
  const { username, email, city, bio } = props.user;
  return (
    <div>
      <div className="container-profile">
        <Typography variant="h4">Profile</Typography>
        <div className="container-profile-info">
          <Typography variant="body1">{username}</Typography>
          <Typography variant="body1">{email}</Typography>
          <Typography variant="body1">{city}</Typography>
          <Typography variant="body1">{bio}</Typography>
        </div>
      </div>

      <Link to={"/EditProfile"}> Edit</Link>
      <NavBar />
    </div>
  );
}

export default withAuth(UserProfile);
