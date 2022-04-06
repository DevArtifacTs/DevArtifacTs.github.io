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
                        <h3 className="blurb-heading greeting">
                            Hello, I'm James
                            <i className="about-full-name">(Jessada Srimoon)</i>
                        </h3>
                        <p>
                            I am a mechanical engineer with a strong interest in software development. 
                            I am currently designing my works using MERN stack technology.I am a never-ending learner. 
                            I'd love to learn something new and work with others to complete the tasks.</p>
                        <h4 className="blurb-heading" id="my-manifest">
                            I blending my skills and experiences to invent a technology solution.
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About ;