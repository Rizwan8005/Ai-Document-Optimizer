import React from 'react'
import Header from '../components/Header/Header'
import Information from '../components/Information'
import Counter from '../components/Counter'
import ApiStructure from '../components/ApiStructure/ApiStructure'
import Pricing from '../components/Pricing/Pricing'
import Ratings from '../components/Ratings/Ratings'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Information />
      <Counter />
      <ApiStructure />
      <Pricing/>
      <Ratings/>
      <Footer />
    </div>
  );
}

export default Home