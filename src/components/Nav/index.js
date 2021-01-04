import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

import Pdf from '../../assets/Resume.pdf';

function Nav(props) {
    const {
        tabs = [],
        setCurrentTab,
        currentTab,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentTab.name);
    }, [currentTab]);

    return (
        <nav>
            <ul className="flex-row nav-tabs">
                {tabs.map((category) => (
                    <li
                        className={`tab ${currentTab.name === category.name && 'navActive'
                            }`}
                        key={category.name}
                    >
                        <span
                            onClick={() => {
                                setCurrentTab(category)
                            }}
                        >
                            {capitalizeFirstLetter(category.name)}
                        </span>
                    </li>
                ))}
                <li className="tab">
                    <a href={ Pdf } rel="noreferrer" target="_blank">Resume</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;