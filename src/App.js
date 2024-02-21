import React from 'react'
import Home from './pages/Home';
import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
 import "@fortawesome/fontawesome-free/css/all.css";


const App = () => {
  return (
    <div className="bg-mainBg">
      <ToastContainer />
      <Home />
    </div>
  );
}

export default App