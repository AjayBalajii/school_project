import React, { useState,useContext } from "react";
import {BrowserRouter as Router, Link , Switch } from "react-router-dom";
import Login from "../login/login";
import SignUp from "../login/signup";
import '../login/App.css'
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, Route } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppConstants from "../../constants/AppContants";
import DownIcon from "@material-ui/icons/ExpandMoreRounded";
import AppContext from "../../context/context";
import ActionTypes from "../../context/actiontypes";
import { Button } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    maxHeight: "52px",
  },
  appbar: {
    height: "52px",
    justifyContent:"center"
  },
  title: {
    display: "none",
    fontWeight:"bold",
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.spacing(8),
    backgroundColor: AppConstants.bgColor,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "45%",
    // [theme.breakpoints.up("sm")]: {
    //   marginLeft: theme.spacing(3),
    //   width: "auto",
    // },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  tablabel: {
    padding: 0,
    minWidth: "120px",
    width: "120px",
    textTransform: "none",
  },
  profilemenu: {
    marginTop: "20px",
    borderRadius: "10px",
  },
  avatar: {
    height: theme.spacing(4),
    width: theme.spacing(4),
  },
}));

export default function TopNavBar() {
  const classes = useStyles();
  const { dispatch } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const onTabChange = (event, newtab) => {
    setActiveTab(newtab);
  };

  const logoutUser = () => {
    dispatch({
      type : ActionTypes.Logout
    })
  }

  return (
    <div className={classes.grow}>
      <AppBar
        className={classes.appbar}
        elevation={0}
        color="inherit"
        position="static"
      >
        <Toolbar>
          <Typography className={classes.title}  noWrap>
            Your Tomorrow
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Tabs
              value={activeTab}
              onChange={onTabChange}
              aria-label="simple tabs example"
              centered
              TabIndicatorProps={{
                style: {
                  backgroundColor: "blue",
                },
              }}
            >
              <Tab
                className={classes.tablabel}
                component={NavLink}
                to={"/home"}
                label="Home"
              />
               <Tab
               class="btn"
                component={NavLink}
                to={"/login"}
                label="Login"
                variant="primary"
              />
              <Tab
                className={classes.tablabel}
                component={NavLink}
                to={"/test"}
                label="Tests"
              />
              <Tab
                className={classes.tablabel}
                component={NavLink}
                to={"/perf"}
                label="Performance"
              />
              <Tab
                className={classes.tablabel}
                component={NavLink}
                to={"/settings"}
                label="Settings"
              />
            </Tabs>
            <IconButton
              style={{
                marginTop : "-4px"
              }}
              onClick={handleProfileMenuOpen}
            >
              <Avatar
                alt="Yours tomorrow"
                className={classes.avatar}
                src="https://static0.srcdn.com/wordpress/wp-content/uploads/2020/06/All-19-Iron-Man-Suit-Versions-Tony-Stark-Wore-In-The-MCU.jpg"
              />
              <DownIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        id="profile menu"
        keepMounted
        open={isMenuOpen}
        onClose={handleProfileMenuClose}
        className={classes.profilemenu}
      >
        <MenuItem onClick={handleProfileMenuClose}>My account</MenuItem>
        <MenuItem onClick={logoutUser}>Logout</MenuItem>
      </Menu>
</div>
  );
}
