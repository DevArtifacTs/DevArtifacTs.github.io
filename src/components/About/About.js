import React from "react";
import './About.css'

function About(props){

    return(
        <section id="about" className="about container-fluid ">
            <h3 className="about-title section-title-text">Let's me introduce my self.</h3>
            <div className="about-wrapper">
                <div className="about-content-frame">
                    <img src="./images/jessada.png" alt="profile-image" className="about-image" />
                    {/* <div className="about-content-left">
                        <h2 className="blurb-heading">Hello, <br /> my name is James</h2>
                        <p>I switch my career path from mechanical engineer.</p>
                    </div> */}
                    <div className="about-content-right">
                        <h2 className="blurb-heading">Hello, <br /> my name is James</h2>
                        <p>I switch my career path from mechanical engineer.</p>
                        <h2 className="blurb-heading">I blending my skills and experiences to invent a pain point solution</h2>
                        <p>Implement my workflow process designing and project budget management form my production engineer job and combine with my MERN stack skill it's allow me to see the more wider picture to solve the problem.  </p>
                    </div>
                    {/* <p className="about-content-signature">Jessada Srimoon</p> */}
                </div>
            </div>
        </section>
    )
}

export default About ;