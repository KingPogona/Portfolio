import React, { useState } from 'react';
import Header from './components/Header';
// import Nav from './components/Nav';
// import Project from './components/Project';
// import AboutMe from './components/AboutMe';
// import Portfolio from './components/Portfolio';
// import ContactMe from './components/ContactMe';
// import Footer from './components/Footer';
import ContentDisplay from './components/ContentDisplay';

function App() {
  const [tabs] = useState([
    { name: 'about me' },
    { name: 'portfolio' },
    { name: 'contact me' }
  ]);

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <div>
      <Header
        tabs={tabs}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
      ></Header>
      <main>
        <ContentDisplay currentTab={currentTab}></ContentDisplay>
      </main>
    </div>
  );
}

export default App;