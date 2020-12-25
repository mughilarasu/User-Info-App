import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { getPhotos } from "../actions/async";
import { grey } from "@material-ui/core/colors";
const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    height: 400,
    width: 300,
    color: theme.palette.text.secondary,
  },
});

class Photos extends Component {
  componentDidMount() {
    this.props.dispatch(getPhotos());
  }
  render() {
    const { classes } = this.props;

    let Photos = this.props.PhotosDetail;
    const PhotosList = Photos.length ? (
      Photos.map((Photo) => {
        return (
          <Grid item xs key={Photo.id}>
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
                  <h1 style={{ color: grey["50"] }}> {Photo.id}</h1>
                  <hr />
                  <h3 style={{ color: grey["50"] }}> {Photo.title} </h3>
                  <img src={Photo.thumbnailUrl} alt="userImg" />
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
          Photos
        </Typography>
        <Grid container className={classes.root} spacing={24}>
          {PhotosList}
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const data_present = state.Photos_data.data_present;
  let PhotosDetail = [];
  if (data_present) {
    PhotosDetail = state.Photos_data.data;
  }
  return {
    PhotosDetail,
    Photos_data: state.Photos_data,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
  };
}
Photos.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Photos));
