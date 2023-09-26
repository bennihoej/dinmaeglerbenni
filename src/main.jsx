import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Listview from './pages/Listview.jsx';
import Frontpage from './pages/Frontpage.jsx';
import Medarbejderlist from './pages/Medarbejderlist.jsx';
import Favoritboliger from './pages/Favoritboliger.jsx';
import DetailBoligview from './pages/DetailBoligview.jsx';
import Kontaktmedarbejder from './pages/Kontaktmedarbejder.jsx';
import Kontaktos from './pages/Kontaktos.jsx';
import Login from './pages/Login.jsx';
import Createlogin from './pages/Createlogin.jsx';
import Errorview from './pages/Errorview.jsx';

const root = createRoot(document.getElementById("root"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>} errorElement={<Errorview/>} >
      <Route index element={<Frontpage/>}/>
      <Route path='/listview' element={<Listview/>}/>
      <Route path='/medarbejderlist' element={<Medarbejderlist/>}/>
      <Route path='/favoritboliger' element={<Favoritboliger/>}/>
      <Route path='/DetailBoligview' element={<DetailBoligview/>}/>
      <Route path='/Kontaktmedarbejder' element={<Kontaktmedarbejder/>}/>
      <Route path='/Kontaktos' element={<Kontaktos/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='Createlogin' element={<Createlogin/>}/>
    </Route>
  )
)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  )