import React from "react";
import desk from './desk.png';
import "./Home.css";

const Home = ({ routeChange }) => {
    return (
        <main>
            <div className="home_container">
                <div className="home_welcome">
                    <img src={desk} alt="desk" />
                    <div className="home_text">
                        <h1>Jules</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, possimus dolore dolor odit totam veritatis omnis unde neque magnam maxime quaerat temporibus atque minus est cum enim qui deleniti eius?
                        </p>
                    </div>
                    <div className="home_buttons">
                        <div className="buttons">
                            <div className="button" onClick={() => routeChange('about')}> <p> About me </p></div>
                            <div className="button" onClick={() => routeChange('projects')}> <p> Projects </p></div>
                            <div className="button" onClick={() => routeChange('contact')}> <p> Contact </p></div>
                        </div>
                    </div>
                    
                </div>
                <div>
                    
                </div>
                
            </div>
        </main>
    )
}

export default Home;