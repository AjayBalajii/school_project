import React, { Component } from 'react';
import './App.css';
import logo from '../../logo.jpeg'
import logo1 from '../../nn.png'


class h extends Component{
    


    render(){
        return(
            <div id="home">
                <br/>
                <div class="container homebg">
                    <div class="container-fluid ">
                        <div class="row">
                        <div class="col quote">
                                "Never Stop Learning
                                Because
                                Life Never Stop Teaching..."
                            </div>
                            <div class="col">
                            <img src={logo1} class="nn"></img>

                            </div>
                            
                        </div>



                    </div>
                    <br/>
                    <div class="container-fluid w-100 quotebg">                  
                    <h2 class="cc">COURSES</h2>
                    <br/><br/>
                    <div class="container row justify-content-around">
                        <div clas="col-4">
                            
                    <div class="row">
                        <div class="col">
                        <img src={logo} class="course-logo"></img>
                            <h4 class="ch">ENGLISH</h4>
                            <p>It helps people become better citizens, get a better-paid job, shows the difference between good and bad. Education shows us the importance of hard work and, at the same time, helps us grow and develop.</p>
                        <a href="#" class="ch">Read More.....</a>
                        </div>
                        <div class="col">
                        <img src={logo} class="course-logo"></img>
                            <h4 class="ch">TAMIL</h4>
                            <p>It helps people become better citizens, get a better-paid job, shows the difference between good and bad. Education shows us the importance of hard work and, at the same time, helps us grow and develop.</p>
                            <a href="#" class="ch">Read More.....</a>

                        </div>
                        <div class="col">
                        <img src={logo} class="course-logo"></img>
                            <h4 class="ch">MATHS</h4>
                            <p>It helps people become better citizens, get a better-paid job, shows the difference between good and bad. Education shows us the importance of hard work and, at the same time, helps us grow and develop.</p>
                            <a href="#" class="ch">Read More.....</a>

                        </div>
                    </div>
                    </div>
                    </div>
                    <br/><br/><br/>
                    <div class="row">
                        <div class="col">
                        <img src={logo} class="course-logo"></img>
                            <h4 class="ch">SCIENCE</h4>
                            <p>It helps people become better citizens, get a better-paid job, shows the difference between good and bad. Education shows us the importance of hard work and, at the same time, helps us grow and develop.</p>
                            <a href="#" class="ch">Read More.....</a>

                        </div>
                        <div class="col">
                        <img src={logo} class="course-logo"></img>
                            <h4 class="ch">PROGRAMS</h4>
                            <p>It helps people become better citizens, get a better-paid job, shows the difference between good and bad. Education shows us the importance of hard work and, at the same time, helps us grow and develop.</p>
                            <a href="#" class="ch">Read More.....</a>

                        </div>
                        <div class="col">
                        <img src={logo} class="course-logo"></img>
                            <h4 class="ch">COMPUTER SCIENCE</h4>
                            <p>It helps people become better citizens, get a better-paid job, shows the difference between good and bad. Education shows us the importance of hard work and, at the same time, helps us grow and develop.</p>
                            <a href="#" class="ch">Read More.....</a>

                        </div>
                    </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div class="container-fluid topbg">
                    <h4><marquee>Topachievers section <br/>Under Construction</marquee></h4>
                </div>
                <br/>                <br/>
                <br/>
                

                <div class="container-fluid row">
                    <div class="col">
                    <img src={logo} class="course-logo"></img>

                        video section
                    </div>
                    <div class="col">
                    <img src={logo} class="course-logo"></img>

                        video section
                    </div>
                    <div class="col">
                    <img src={logo} class="course-logo"></img>

                        video section
                    </div>
                    <div class="col">
                    <img src={logo} class="course-logo"></img>

                        video section
                    </div>
             </div>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>

             <div class="container-fluid footer">
                <div class="row">
                <div class="col">
                    
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