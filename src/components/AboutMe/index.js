import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

import aacImage from '../../assets/IMG_0980.jpeg';

function AboutMe() {


    return (
        <section>
            <h1 data-testid="h1tag">About Me</h1>

            <div>
                <p>
                    I am a Full stack web developer with four years of experience working in IT, support, QA, regression testing
                    development, and maintenance of company Hardware and software. I have experience with agile methodologies and
                    have worked as an assistant database assistant and software developer.
                </p>
                <p>
                    I have a Love for learning new skills, problem solving and incorporating new
                    tools, methods, and technologies. I have successfully developed, researched, and implemented solutions to many
                    difficult and diverse problems to accelerate team productivity and meet or exceed project goals.                
                </p>
                <p>
                    
                </p>
            </div>

            <div className="aboutMe-img">
                <img src={aacImage} alt="Asher Clawson"></img>
            </div>

        </section>
    );
}

export default AboutMe;