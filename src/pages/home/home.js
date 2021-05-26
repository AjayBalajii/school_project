import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TopNavBar from "./navbar";
import VideosPage from "../videos/video";
import TestPage from "../test/test";
import Login from "../login/login";
import SignUp from "../login/signup";

const useStyles = makeStyles((theme) => ({
  apphome: {
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  routerpage: {
    flex: 1,
    // backgroundColor:"red"
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.apphome}>
      <TopNavBar />
      <div className={classes.routerpage}>
          <Switch>
            <Route path="/home" component={VideosPage} />
            <Route path="/test" component={TestPage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
          </Switch>
      </div>
    </div>
  );
}

export default Home;
