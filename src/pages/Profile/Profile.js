import React from "react";
function UserProfile(props) {
  const { username, email, city, bio } = props;
  return (
    <div>
      <div>
        <p>{username}</p>
        <p>{email}</p>
        <p>{city}</p>
        <p>{bio}</p>
      </div>
    </div>
  );
}
export default UserProfile;
