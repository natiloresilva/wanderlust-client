import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

export default function AvatarComponent(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>{props.name}</Avatar>
    </div>
  );
}
