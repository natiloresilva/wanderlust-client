import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const styles = (theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "90%",
    marginLeft: "5%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.setSearch = this.setSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      search: "",
    };
  }
  setSearch(event) {
    this.setState({ search: event.target.value });
  }
  handleClick() {
    this.props.handleSearch(this.state.search);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Search"
            inputProps={{ "aria-label": "search google maps" }}
            onChange={this.setSearch}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
            onClick={this.handleClick}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SearchBar);
