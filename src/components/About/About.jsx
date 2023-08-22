import React from "react";
import "./About.css";
import programming from './programming.jpg';
import coder from './coder.jpg';
import languages from './languages.png';

const About = () => {
    return (
        <main>
            <div className="about_container">
                <div className="about_welcome">
                    <h1>About me</h1>
                </div>
                <div className="info">
                    <div className="block">
                        <img src={programming} alt="programming" />
                        <div>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur voluptate, reprehenderit aliquid obcaecati eius qui dolore eligendi magni eveniet pariatur ea corrupti rem nam suscipit et consequatur eaque exercitationem quas!
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam porro, eligendi nesciunt exercitationem deleniti ipsam totam deserunt ut, modi sint obcaecati? Corporis voluptatum accusantium esse incidunt fugiat quis est neque!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aliquam ullam, incidunt accusantium sed culpa corrupti repellendus minus vero alias illum. Rem quis maxime architecto molestiae possimus ratione praesentium dolor?
                            </p>
                        </div>
                    </div>
                    <div className="block">
                        <div>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptates soluta enim, eum accusamus ducimus error nobis voluptas porro, assumenda cumque expedita officia dicta odio dolore nihil deserunt. Provident, ad.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae quaerat nobis ducimus obcaecati recusandae magnam? Impedit rerum, a aperiam facere ut numquam illo, amet fugit enim placeat tenetur ipsum repellat.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi esse, quo provident voluptates laudantium unde aliquam numquam repellat nulla, itaque, nisi atque perspiciatis sint! Adipisci doloribus non quod cum! Reiciendis.
                            </p>
                        </div>
                        <img src={coder} alt="coder" />
                    </div>
                    <div className="block">
                        <img src={languages} alt="coder" /> 
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga error dicta quae perferendis fugit esse ea suscipit illum neque! Facere omnis laudantium, nam repellendus id dolorum quaerat? Quisquam, corrupti! Illo.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis similique, veniam officia, cum ullam optio asperiores quo quam ea commodi corporis corrupti, reiciendis repellat laudantium doloremque numquam pariatur excepturi accusantium.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, rem! Earum nemo vero totam repellendus suscipit illo ex accusantium officia. Earum porro vero quisquam quod aut quos voluptatum voluptates nostrum.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About