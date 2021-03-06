import React from 'react';
import './About.scss'
import { Facebook, Github, Linkedin } from 'react-bootstrap-icons';
import profile from '../../img/khalid2.jpg';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Footer/Footer'
import { AboutEducation, AboutSkills } from '../../Info/Info';
import Skills from './Skills';
import Education from './Education';

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="about-header py-5">
                    <h1 className="text-center text-main fw-bold">About</h1>
                </div>
                <div className="about-content">
                    <div className="profile-image text-center">
                        <img style={{ height: '20em', width: '20em' }} className="border" src={profile} alt="" />
                    </div>
                    <div className="profile-text-content text-center py-4">
                        <h4>Hello, I'm <br /> <span className="text-main">Khalid Saifullah</span></h4>
                        <p className="w-50 mx-auto">I'm Frontend Web Developer and very depth knowledge of backend as well as IT support. Love to take challenges and to learn new technologies.
                        </p>
                    </div>
                    <div className="social-media text-center">
                        <h5 className="fw-bold py-2">Connect With Me</h5>
                        <div className="social-media-icons">
                            <a className="mx-2" target="_blank" href="https://www.facebook.com/khalid.saifullah1/">
                                <Facebook className="icon" size={30}></Facebook>
                            </a>
                            <a className="mx-2" target="_blank" href="https://github.com/khalid0132">
                                <Github className="icon" size={30}></Github>
                            </a>
                            <a className="mx-2" target="_blank" href="https://www.linkedin.com/in/khalid-saifullah-689298148/">
                                <Linkedin className="icon" size={30}></Linkedin>
                            </a>
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col">
                            <div className="my-skills-container">
                                <div className="skills-header my-4">
                                    <h1 className="text-center fw-bold">My <span className="text-main">Skills</span></h1>
                                </div>
                                <div>
                                {
                                    AboutSkills.map((skill,index)=><Skills key={index} skill={skill}></Skills>)
                                }
                                </div>
                            </div>
                        </div>
                        <div className="col education">
                            <div className="my-skills-container">
                                <div className="skills-header my-4">
                                    <h1 className="text-center fw-bold ">My <span className="text-main">Education</span></h1>
                                </div>
                                <div className="skills-content">
                                    {
                                        AboutEducation.map((ed,index)=><Education key={index} ed={ed}></Education>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;