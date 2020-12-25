import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { getUser } from "../actions/async";
import {
  grey,
} from "@material-ui/core/colors";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    height: 300,
    width: 300,
    color: theme.palette.text.secondary,
  },
});

class User extends Component {
  componentDidMount() {
    this.props.dispatch(getUser());
  }
  render() {
    const { classes } = this.props;
    let Users = this.props.UserDetail;
    const UsersList = Users.length ? (
      Users.map((User) => {
        return (
          <Grid item xs key={User.id}>
            <Grid
              container
              className={classes.demo}
              justify="center"
              spacing={24}
            >
              <Grid item>
                <Paper
                  className={classes.paper}
                  style={{ background: grey["900"] }}
                >
                  <h1 style={{ color: grey["50"] }}> {User.name}</h1>
                  <hr />
                  <h3 style={{ color: grey["50"] }}>{User.email}</h3>
                  <p style={{ color: grey["50"] }}>{User.website}</p>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        );
      })
    ) : (
      <div className={classes.root}>
        <LinearProgress variant="query" />
        <br />
        <LinearProgress color="secondary" variant="query" />
      </div>
    );
    return (
      <div>
        <Typography variant="h3" gutterBottom>
          Users
        </Typography>
        <Grid container className={classes.root} spacing={24}>
          {UsersList}
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const data_present = state.User_data.data_present;
  let UserDetail = [];
  if (data_present) {
    UserDetail = state.User_data.data;
  }
  return {
    UserDetail,
    User_data: state.User_data,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
  };
}
User.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(User));
