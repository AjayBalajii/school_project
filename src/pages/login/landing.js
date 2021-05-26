
import React, { Component } from 'react';
import {BrowserRouter as Router , Route , Link , Switch , NavLink} from "react-router-dom";
import './App.css';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import AppConstants from "../../constants/AppContants";
import Login from "./login";
import SignUp from "./signup";
import { Navbar } from 'react-bootstrap';
import { Button,ButtonGroup } from 'react-bootstrap';


class LandingPage extends Component {


  render(){
    return(
<div>
  <div>
  <div>
        <Router>
          <Navbar className="bg">
          <Navbar.Brand href="#">
      
      
      
    </Navbar.Brand>
    <Navbar.Collapse className="justify-content-end">
    
  
    <Link class="navlink"  exact to="/l">

Login

</Link>
      
      <Link class="navlink"  exact to="/s">
signup{' '}
            </Link>
            

      </Navbar.Collapse>
      </Navbar>
          <Switch>
   
    <Route exact path='/l' component={Login}/>
      <Route  exact path='/s' component={SignUp}/>
    </Switch>
    
  </Router>
    
</div>
  </div>
<p>Landing page</p>
</div> 

    );
  }
}

export default LandingPage;
