import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import { Fab } from "@material-ui/core";
import "./navbar.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.root}>
      <Link to="/home">
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      </Link>

      <Link to="/trips/create">
        <Fab className="fab" size="small" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>

      <Link to="/profile">
        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
      </Link>
    </BottomNavigation>
  );
}
