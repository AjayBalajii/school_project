import React, { Component } from 'react';
import logo from '../../logo.jpeg'
import './App.css';
import h from'./h'
import {BrowserRouter as HashRouter , Route , Link , Switch , NavLink} from "react-router-dom";

import { Navbar } from 'react-bootstrap';
import { Button,ButtonGroup } from 'react-bootstrap';
import Login from './login';
import SignUp from './signup';
import test_d from './test_d';





class firstpage extends Component {

    async componentDidMount(){
        if(h==true){
            document.getElementById("hii").style.visibility="hidden";
            
        }
    }
 
  render()
   {
    
    return (
      <div class=" h-100 w-100">
     
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"></link>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
      
      <div>
     

      </div>
      
      <HashRouter>
<div class="nav w-100">
<div class=" container-fluid row">
<div class="col">
<img src={logo} class="logo"></img>

<Link class="navtext" to="">HOME
</Link>
<Link class="navtext" to="/t">TESTS
</Link>
</div>

<Link class=" col-1  align-self-end" to="/l">
<button class="btn btn-primary"  > Login</button>

</Link>
<Link class="col-1  align-self-end navtext" to="/s">SignUp</Link>
</div>

</div>
     
          <Switch>
    <Route  exact={true} path='/' component={h}/>
    <Route  exact={true} path='/l' component={Login}/>

    <Route  exact={true} path='/t' component={test_d}/>
      <Route   exact={true} path='/s' component={SignUp}/>
    </Switch>
    
  </HashRouter>
    
    
    </div>

    );
  }
}

export default firstpage;