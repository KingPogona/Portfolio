import React, { useState } from 'react';

import Project from '../Project';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {

  const [projects] = useState([
    {
      name: 'Run Buddy',
      image: 'run-buddy.png',
      description: 'HTML, CSS',
      url: 'https://kingpogona.github.io/run-buddy/',
      github: 'https://github.com/KingPogona/run-buddy'
    },
    {
      name: 'Stock Tracker',
      image: 'main-view.PNG',
      description: 'Developed with Brad Cassity and Jonathan Lightheart',
      url: 'https://utah-coding-bootcamp-project-1.github.io/stock-tracker/',
      github: 'https://github.com/Utah-Coding-Bootcamp-Project-1/stock-tracker'
    },
    {
      name: 'What Do You want to Eat?',
      image: 'WhatDoYouWantToEat.png',
      description: 'NODE, EXPRESS, SEQUALIZE',
      url: 'https://secret-fortress-68356.herokuapp.com/',
      github: 'https://github.com/ChazzKreutzkamp/recipes-r-us-group-project-2'
    },
    {
      name: 'Budget Tracker',
      image: 'budget.png',
      description: 'JAVASCRIPT, HTML, ',
      url: 'https://kingpogona.github.io/Budget_Tracker_App/',
      github: 'https://github.com/KingPogona/budget_tracker_app'
    },
    {
      name: 'Just Tech News',
      image: 'justTechNews.png',
      description: 'HTML, CSS, javascript',
      url: 'https://floating-stream-83878.herokuapp.com/',
      github: 'https://github.com/KingPogona/another-tech-blog'
    },
    {
      name: 'Noted',
      image: 'noted.png',
      description: 'HTML, CSS, javascript',
      url: 'https://calm-harbor-05458.herokuapp.com/',
      github: 'https://github.com/KingPogona/Noted'
    },
    {
      name: 'Garage Sale',
      image: 'homepage.jpg',
      description: 'MERN Stack',
      url: 'https://garage-sale-project.herokuapp.com',
      github: 'https://github.com/jesseparent/garage-sale'
    },
  ]);

  // const currentProject = projects.filter((project) => projects.name === name);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, i) => (
          <Project project={project} key={project.name}/>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;