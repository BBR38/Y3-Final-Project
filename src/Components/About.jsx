import React from 'react';
import '../App.css';
import aboutImg from './About.jpg';

const About = () => {
    return (
        <div>
            <section id="about">
                <div className="container my-5 py-5">
                    <div className='row '>
                        <div className="col-md-6 ">
                          <img src= {aboutImg} lenth='100' weight='200'  /> 
                        </div>
                        <div className="col-md-6"></div>
                        <h1 className="fs-5">About us</h1>
                        <h1 className="display-6">Who <b>We</b> Are?</h1>
                        <hr />
                        <p className="lead">people ........................................ </p>
                        <h4 className='cd'>Are you intrested??</h4>
                        <button className = "btn btn-primary rounded-pill px-4 py-2" >Join us!</button>

                    </div>
                </div>
            </section>
        </div>
    );
}
export default About;

