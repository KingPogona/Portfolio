import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

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
            <ul className="flex-row">
                {tabs.map((category) => (
                    <li
                        className={`mx-1 ${currentTab.name === category.name && 'navActive'
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
            </ul>
        </nav>
    );
}

export default Nav;