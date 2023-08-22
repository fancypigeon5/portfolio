import './Projects.css';
import React from "react";
import website1 from './website1.png';
import website2 from './website2.jpg';
import website3 from './website3.jpg';
import website4 from './website4.png';

const Projects = () => {
    return (
        <main>
            <div className='projects_container'>
        	    <div className='projects_welcome'>
                    <h1>Projects</h1>
                </div>
                <div className='projects'>
                    <div className='project'>
                        <div className="link">
                            <img src={website1} alt="website1" />
                            <div className='overlay'>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque repellendus sed quas minus fugit eum fugiat necessitatibus error neque inventore molestiae eius odit perspiciatis ea nisi quasi, recusandae nostrum consectetur.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, eos corporis! Quas dolores dicta et, labore dolorem omnis maxime quod eum quis eius eligendi totam, accusamus, qui corporis ipsa minima!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='project'>
                        <div className="link">
                            <img src={website2} alt="website2" />
                            <div className='overlay'>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque repellendus sed quas minus fugit eum fugiat necessitatibus error neque inventore molestiae eius odit perspiciatis ea nisi quasi, recusandae nostrum consectetur.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, eos corporis! Quas dolores dicta et, labore dolorem omnis maxime quod eum quis eius eligendi totam, accusamus, qui corporis ipsa minima!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='project'>
                        <div className="link">
                            <img src={website3} alt="website3" />
                            <div className='overlay'>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque repellendus sed quas minus fugit eum fugiat necessitatibus error neque inventore molestiae eius odit perspiciatis ea nisi quasi, recusandae nostrum consectetur.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, eos corporis! Quas dolores dicta et, labore dolorem omnis maxime quod eum quis eius eligendi totam, accusamus, qui corporis ipsa minima!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='project'>
                        <div className="link">
                            <img src={website4} alt="website4" />
                            <div className='overlay'>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque repellendus sed quas minus fugit eum fugiat necessitatibus error neque inventore molestiae eius odit perspiciatis ea nisi quasi, recusandae nostrum consectetur.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, eos corporis! Quas dolores dicta et, labore dolorem omnis maxime quod eum quis eius eligendi totam, accusamus, qui corporis ipsa minima!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Projects;