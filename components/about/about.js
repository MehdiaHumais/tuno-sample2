import React from 'react'
import aImg from '../../images/about/staff.jpg'

const About = (props) => {
    return (

        <section className="tf-about-section section-padding">
            <div className="container">
                <div className="tf-about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-img">
                                <img src={aImg} alt="" />
                                <div className="tf-about-img-text">
                                    <div className="tf-about-icon">
                                        <h3>3</h3>
                                        <span>Years Expriences</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-text">
                                <small>about Me</small>
                                <h2>Welcome to Tonu, Best Software Services</h2>
                                <h5>I have 3 years of experiences in Software Development for give you better services.</h5>
                                <p>
                                I am Ayesha Ahmed, a passionate Web Developer and Designer with over 3 years of experience in creating visually stunning and user-friendly websites. My expertise lies in combining creativity with functionality to build modern websites and web applications that deliver exceptional user experiences.
                                </p>

                                <div className="tf-funfact">
                                    <div className="tf-funfact-item">
                                        <h3><span>100</span>+</h3>
                                        <p>Projects Completed</p>
                                    </div>
                                    <div className="tf-funfact-item">
                                        
                                    </div>
                                    <div className="tf-funfact-item">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>About Me</h1>
            </div>
        </section>
    )
}

export default About;