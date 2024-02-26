import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import TermAndCondition from '../pages/TermAndContionPage';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MainRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-and-conditions" element={<TermAndCondition />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default MainRoutes