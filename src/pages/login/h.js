import React, { Component } from 'react';
import './App.css';
import logo from '../../logo.jpeg'
import logo1 from '../../nnn.png'
import { Button ,Table } from 'react-bootstrap';


class h extends Component{
    


    render(){
        return(
            <div id="home">
                <br/>
                <div class="container homebg">
                    <div class="container ">
                        <div class="row">
                        <div class="col ">
                            <br/><br/>                            <br/><br/>

                            <div class="quote">
                            "Never Stop Learning
                                Because
                                Life Never Stop Teaching..."
                            </div>
                               <br/><br/>
                            <Button variant="flat" style={{ backgroundColor: "rgb(58, 10, 170)", color: "white" ,marginLeft:"10px"}}>Get in Touch</Button>
                            </div>
                            <div class="col ">
                            <img src={logo1} class="nn"></img>

                            </div>
                            
                        </div>

                        </div>

                    </div>
                    <br/>
                    <div class="container-fluid w-100 quotebg">                  
                    <h4 class="cc">COURSES WE OFFER</h4>
                    <br/><br/>
                    <div class="container">
                        <div>
                            
                    <div class="row">
                        <div class="col-sm">
                        <img src={logo} class="course-logo"></img>
                            <h6 class="ch">ENGLISH</h6>
                            <p>It helps people become better citizens, get a better-paid job, shows the difference between good and bad. Education shows us the importance of hard work and, at the same time, helps us grow and develop.</p>
                        <a href="#" class="ch">Read More.....</a>
                        </div>
                        <div class="col-sm">
                        <img src={logo} class="course-logo"></img>
                            <h6 class="ch">TAMIL</h6>
                            <p>It helps people become better citizens, get a better-paid job, shows the difference between good and bad. Education shows us the importance of hard work and, at the same time, helps us grow and develop.</p>
                            <a href="#" class="ch">Read More.....</a>

                        </div>
                        <div class="col-sm">
                        <img src={logo} class="course-logo"></img>
                            <h6 class="ch">MATHS</h6>
                            <p>It helps people become better citizens, get a better-paid job, shows the difference between good and bad. Education shows us the importance of hard work and, at the same time, helps us grow and develop.</p>
                            <a href="#" class="ch">Read More.....</a>

                        </div>
                    </div>
                    <br/><br/><br/>
                    <div class="row">
                        <div class="col-sm">
                        <img src={logo} class="course-logo"></img>
                            <h6 class="ch">SCIENCE</h6>
                            <p>It helps people become better citizens, get a better-paid job, shows the difference between good and bad. Education shows us the importance of hard work and, at the same time, helps us grow and develop.</p>
                            <a href="#" class="ch">Read More.....</a>

                        </div>
                        <div class="col-sm">
                        <img src={logo} class="course-logo"></img>
                            <h6 class="ch">PROGRAMS</h6>
                            <p>It helps people become better citizens, get a better-paid job, shows the difference between good and bad. Education shows us the importance of hard work and, at the same time, helps us grow and develop.</p>
                            <a href="#" class="ch">Read More.....</a>

                        </div>
                        <div class="col-sm">
                        <img src={logo} class="course-logo"></img>
                            <h6 class="ch">COMPUTER SCIENCE</h6>
                            <p>It helps people become better citizens, get a better-paid job, shows the difference between good and bad. Education shows us the importance of hard work and, at the same time, helps us grow and develop.</p>
                            <a href="#" class="ch">Read More.....</a>

                        </div>
                    </div>
                    </div>
                    </div>
                   
                    </div>
               
                <br/>
                <br/>
                <div class="container topbg">
                    <h4 class="cc">TOP ACHIEVERS</h4>
                    <br/><br/>
                <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>S No</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>100</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>98</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>97</td>
    </tr>
  </tbody>
</Table>
                </div>
                <br/>                <br/>
                <br/>
                

                <div class="container">
                <h4 class="cc">FEATURED VIDEOS</h4>
                    <br/><br/>
                    <div class="row">
                    <div class="col-sm">
                    <img src={logo} class="course-logo"></img>
<br/><br/>
                        video section
                    </div>
                    <div class="col-sm">
                    <img src={logo} class="course-logo"></img>
                    <br/><br/>
                        video section
                    </div>
                    <div class="col-sm">
                    <img src={logo} class="course-logo"></img>
                    <br/><br/>
                        video section
                    </div>
                    <div class="col-sm">
                    <img src={logo} class="course-logo"></img>
                    <br/><br/>
                        video section
                    </div>
                  </div>
             </div>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>

             <div class="container-fluid footer">
                <div class="row">
                <div class="col ch">
                    
                    Privacy and policy
                </div>
                <div class="col ">
                    rules and regulations
                </div>
                <div class="col ">
                    contact us
                </div>

            </div>
            <br/><br/><br/>

                </div>
               






            </div>
        )
    }
}
export default h;