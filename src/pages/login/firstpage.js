import React, { Component } from 'react';
import logo from '../../logo.jpeg'
import './App.css';
import h from'./h'
import {BrowserRouter as HashRouter , Route , Link , Switch , NavLink} from "react-router-dom";

import { Navbar,Nav,NavDropdown,Form,FormControl } from 'react-bootstrap';
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
      
     
      <HashRouter>
       
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#"><img src={logo} class="logo"></img>
</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll" className="justify-content-start">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' , maxWidth:"100%" }}
      navbarScroll
    >
      <Nav.Link className="m-auto" href=""><Link class="tx" to="">Home</Link>
</Nav.Link>
<Nav.Link><Link class="tx" to="/t">Test
</Link></Nav.Link>

      <Nav.Link   >Videos</Nav.Link>
      <NavDropdown title="Courses"   id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Programs</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Maths</NavDropdown.Item>
        
        <NavDropdown.Item href="#action5">Science</NavDropdown.Item>
      </NavDropdown>
    
    </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse id="navbarScroll" className="justify-content-end">

    <Link class="" to="/l">
    <Button variant="flat" style={{ backgroundColor: "rgb(58, 10, 170)", color: "white" ,marginLeft:"10px"}}>Login</Button>
<Link class="navtext" to="/s">SignUp</Link>


</Link>
  </Navbar.Collapse>
</Navbar>




     
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