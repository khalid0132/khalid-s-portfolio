import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProjectCard = ({ project }) => {
    const { name, description, features, technology, live, client, server, img1, img2, img3 } = project;
    return (
        <div className="mb-5">
            <div style={{border: '1px solid gray'}} className="row p-4">
                <div className="col-6">
                    <Carousel className="w-100">
                        <div>
                            <img src={img1} alt="" />
                        </div>
                        <div>
                            <img src={img2} alt="" />
                        </div>
                        <div>
                            <img src={img3} alt="" />
                        </div>
                    </Carousel>
                </div>
                <div className="col-6 p-3">
                    <h1 className="fw-bold text-main"> {name} </h1>
                    <p> {description} </p>
                    <h4 className="text-main">Features: </h4>
                    <ul>
                        <li> {features.a} </li>
                        <li> {features.b} </li>
                        <li> {features.c} </li>
                    </ul>
                    <div>
                        <h4 className="text-main">Technology: </h4>
                        <ul>
                            {technology.map(t => <li>{t}</li>)}
                        </ul>
                    </div>
                    <div>
                        <a className="btn btn-outline-secondary ms-3" target="_blank" href={live} rel="noreferrer">Live</a>
                        <a className="btn btn-outline-secondary ms-3" target="_blank" href={client} rel="noreferrer">Client</a>
                        <a className="btn btn-outline-secondary ms-3" target="_blank" href={server} rel="noreferrer">Server</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;