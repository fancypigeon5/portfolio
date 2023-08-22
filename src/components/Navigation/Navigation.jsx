import React from "react";
import './Navigation.css';
import logo from './logo.png';

const Navigation = ({ routeChange }) => {
        return (                
            <nav>
                <div id="button"></div>
                <img className="logo" src={logo} alt="logo" onClick={() => routeChange('home')} />
                <div className="pages">
                    <p onClick={() => routeChange('about')}>About me</p>
                    <p onClick={() => routeChange('projects')}>Projects</p>
                    <p onClick={() => routeChange('contact')}>Contact</p>
                </div>
            </nav>
)
}

export default Navigation