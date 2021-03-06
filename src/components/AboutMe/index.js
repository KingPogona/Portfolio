import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

import aacImage from '../../assets/IMG_0980.jpeg';

function AboutMe() {


    return (
        <section>
            <h1 data-testid="h1tag">About Me</h1>

            <div>
                <p>
                    I am a tech enthusiast with over 4 years of experience with a variety of technology focused roles. Over that period, I have been in charge of developing automated regression testing development as well as developing a macro to help our employees rapidly convert a variety of complex crypto tax documents to a form our product could import.
                </p>
                <p>
                    I have also helped with IT, Dev ops, and several other unrelated positions. In addition I have configured, monitored, and administered many company software deployments including Office 365, Zendesk, Slack, Monday, Test Studio, and Accredible.
                </p>
            </div>

            <div className="aboutMe-img">
                <img src={aacImage} alt="Asher Clawson"></img>
            </div>

        </section>
    );
}

export default AboutMe;