import React from 'react'; // Tilføj denne import
import './App.css'
import Topline from './components/topline';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Previewboligliste from './pages/Frontpage';

function App() {
  return (
    <>
         <Topline/>
         <Header/>
         <Outlet/>
    </>  
  );
};

export default App;
