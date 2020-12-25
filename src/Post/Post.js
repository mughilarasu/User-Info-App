import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { getPost } from "../actions/async";
import { grey } from "@material-ui/core/colors";
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

class Post extends Component {
  componentDidMount() {
    this.props.dispatch(getPost());
  }
  render() {
    const { classes } = this.props;

    let Post = this.props.PostDetail;
    const PostList = Post.length ? (
      Post.map((Posts) => {
        return (
          <Grid item xs key={Posts.id}>
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
                  <h1 style={{ color: grey["50"] }}>{Posts.id}</h1>
                  <hr />
                  <h3 style={{ color: grey["50"] }}>{Posts.title}</h3>
                  <p style={{ color: grey["50"] }}>{Posts.body}</p>
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
          Posts
        </Typography>
        <Grid container className={classes.root} spacing={24}>
          {PostList}
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const data_present = state.Post_data.data_present;
  let PostDetail = [];
  if (data_present) {
    PostDetail = state.Post_data.data;
  }
  return {
    PostDetail,
    Post_data: state.Post_data,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
  };
}
Post.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Post));
