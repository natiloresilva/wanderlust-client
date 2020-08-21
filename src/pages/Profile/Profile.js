import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { withAuth } from "../../lib/AuthProvider";
import { Link } from "react-router-dom";

function UserProfile(props) {
  const { username, email, city, bio } = props.user;
  return (
    <div>
      <div>
        <h1>Profile</h1>
        <p>{username}</p>
        <p>{email}</p>
        <p>{city}</p>
        <p>{bio}</p>
      </div>

      <Link to={"/EditProfile"}> Edit</Link>
      <NavBar />
    </div>
  );
}

export default withAuth(UserProfile);
