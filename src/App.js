import React from 'react'
import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
 import "@fortawesome/fontawesome-free/css/all.css";
import MainRoutes from './routes/MainRoutes';


const App = () => {
  return (
    <div className="bg-mainBg">
      <ToastContainer />
      <MainRoutes />
    </div>
  );
}

export default App