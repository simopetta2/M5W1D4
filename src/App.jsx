import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynav from './components/Mynav.jsx';
import MyFooter from './components/Myfooter.jsx';
import Welcome from './components/Welcome.jsx';
import AllTheBooks from './components/AllTheBooks.jsx';


function App() {


  return (
    <>
    <Mynav/>
    <Welcome/>
    <AllTheBooks/>
    <MyFooter/>  
    </>
  )
}

export default App
