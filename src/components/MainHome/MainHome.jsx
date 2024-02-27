import React from 'react'
import Information from '../Information';
import Counter from '../Counter';
import ApiStructure from '../ApiStructure';
import Pricing from '../Pricing/Pricing';
import Ratings from '../Ratings/Ratings';
import ApiDocumentation from '../ApiDocumentation/ApiDocumentation';

const MainHome = () => {
  return (
    <>
      <Information />
      <Counter />
      <ApiStructure />
      <ApiDocumentation />
      <Pricing />
      <Ratings />
    </>
  );
}

export default MainHome