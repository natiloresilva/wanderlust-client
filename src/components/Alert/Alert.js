import React from "react";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function AlertComponent(props) {
  const classes = useStyles();
  const { severity, message } = props;

  return (
    <div className={classes.root}>
      <Alert severity={{ severity }}>{{ message }}</Alert>
    </div>
  );
}
