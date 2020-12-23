import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function ContentDisplay({ currentTab }) {
  const { name, description } = currentTab;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      
    </section>
  );
}

export default ContentDisplay;