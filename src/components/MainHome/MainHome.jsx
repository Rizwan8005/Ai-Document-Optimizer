import React from 'react'
import Header from '../Header/Header';
import Information from '../Information';
import Counter from '../Counter';
import ApiStructure from '../ApiStructure/ApiStructure';
import Pricing from '../Pricing/Pricing';
import Ratings from '../Ratings/Ratings';
import Footer from '../Footer/Footer';

const MainHome = () => {
  return (
    <>
      <Header />
      <Information />
      <Counter />
      <ApiStructure />
      <Pricing />
      <Ratings />
      <Footer />
    </>
  );
}

export default MainHome