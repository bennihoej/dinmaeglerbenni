import React from 'react';
import './App.css'
import Topline from './components/Topline';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Bottomline from './components/Bottomline';

function App() {
  return (
    <>
         <Topline/>
         <Header/>
         <Outlet/>
         <Footer/>
         <Bottomline/>
    </>  
  );
};

export default App;

/* import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  // Add a condition to check if the current location is the page where you don't want the footer
  const shouldRenderFooter = location.pathname !== '/exclude-page';

  return (
    <>
      <Topline />
      <Header />
      <Outlet />
      {shouldRenderFooter && <Footer />}
      <Bottomline />
    </>  
  );
}

export default App; */
