import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";
import { FileEarmarkPersonFill , Arrow90degRight } from 'react-bootstrap-icons';
import Typewriter from 'typewriter-effect';
import myProfile from '../../../img/myProfile1.jpg'

const Header = () => {
    return (
        <div>
            <div className="container header-container">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-7">
                        <div className="header-content-container">
                            <div className="header-content">
                                <h1>
                                <span className="text-main">Khalid Saifullah</span>
                                   <br /> is here, ready to join your team ...
                                   
                                    
                                </h1>
                                <h4>
                                    <Typewriter 
                                        options={{
                                            strings: ['IT Support Engineer', 'React and JavaScript Developer', 'ICT Engineer'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h4>
                                <p>I'm a Junior Technical Support Engineer and React and JavaScript Developer.</p>
                                <div>
                                    <Link class="btn btn-primary me-3" to="/contact"> <Arrow90degRight/> Hire Me</Link>
                                    <a class="btn common-background text-white" target="_blank" href="https://drive.google.com/file/d/1r2E05YkZyJ0ET1-f6vFlFAln8qdSsRRp/view?usp=sharing"><FileEarmarkPersonFill /> Resume</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-5">
                        <div className="profileImage ps-5 py-5">
                            <img className="w-100 text-middle" src={myProfile} alt="Khalid photo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;