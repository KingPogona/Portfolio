import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

import AboutMe from '../AboutMe';
import Portfolio from '../Portfolio';
import ContactMe from '../ContactMe';

function ContentDisplay({ currentTab }) {
  // const { name } = currentTab;

  const renderPage = (currentTab) => {
    switch (currentTab.name) {
      case 'portfolio':
        return <Portfolio />;
      case 'contact me':
        return <ContactMe />;
      default:
        return <AboutMe />;
    }
  };


  return (
    <section>
      {/* <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1> */}

      <div>
        {/* Call the renderPage function passing in the currentPage */}
        <div>{renderPage(currentTab)}</div>
      </div>

    </section>
  );
}

// function Portfolio() {
//   // Using useState, set the default value for currentPage to 'Home'
//   const [currentPage, handlePageChange] = useState('Home');

//   // The renderPage method uses a switch statement to render the appropriate current page
//   const renderPage = () => {
//     switch (currentPage) {
//       case 'About':
//         return <About />;
//       case 'Blog':
//         return <Blog />;
//       case 'Contact':
//         return <Contact />;
//       default:
//         return <Home />;
//     }
//   };

//   return (
//     <div>
//       {/* Pass the state value and the setter as props to NavTabs */}
//       <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
//       {/* Call the renderPage function passing in the currentPage */}
//       <div>{renderPage(currentPage)}</div>
//     </div>
//   );
// }

export default ContentDisplay;
