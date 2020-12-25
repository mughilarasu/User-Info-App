import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import User from "./User/User";
import Post from "./Post/Post";
import Photos from "./Photos/Photos";
class RouteComponent extends Component {
  render() {
    return (
      <Switch>
          <Route exact path="/" component={User} />
          <Route path="/Post" component={Post} />
          <Route path="/Photos" component={Photos} />
      </Switch>
    );
  }
}

export default RouteComponent;
