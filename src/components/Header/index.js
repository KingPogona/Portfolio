import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

import Nav from '../Nav';

function Header(props) {
    const {
        tabs = [],
        setCurrentTab,
        currentTab,
    } = props;



    useEffect(() => {
        document.title = capitalizeFirstLetter(currentTab.name);
    }, [currentTab]);

    return (
        <header className="flex-row px-1">
            <h2 className={`mx-2`}>Asher Clawson</h2>
            <Nav
                tabs={tabs}
                setCurrentTab={setCurrentTab}
                currentTab={currentTab}
            ></Nav>
        </header>
    );
}

export default Header;