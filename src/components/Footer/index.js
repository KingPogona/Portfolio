import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

function Footer() {

    return (
        <footer className="py-2 sticky-footer">
            <ul className="flex-row">
                <li><a href="https://www.linkedin.com/in/asher-clawson-838236185">
                    <FontAwesomeIcon icon={faLinkedin} className="icon" size="3x" />
                </a></li>
                <li><a href="https://github.com/KingPogona">
                    <FontAwesomeIcon icon={faGithub} className="icon" size="3x" />
                </a></li>
                <li><a href="https://stackoverflow.com/users/13903646/kingpogona">
                    <FontAwesomeIcon icon={faStackOverflow} className="icon" size="3x" />
                </a></li>
            </ul>
        </footer>
    );
}

export default Footer;