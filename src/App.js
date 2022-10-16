
import './App.css';
import React,{useState,useRef,useEffect} from 'react'
import NavBarComponent from './components/NavBarComponent';
import HomeComponent from './components/HomeComponent';

function App() {
  //https://jsonplaceholder.typicode.com/
  

  return (
    <>
      <NavBarComponent/>
      <HomeComponent/>
    </>
  );
}

export default App;
