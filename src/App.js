import React from "react";
import './App.css';
import { Route , Routes } from "react-router-dom";
import TextPage from "./components/TextPage/TextPage";
import  HomePage from "./components/HomePage/HomePage"

// import TextPage from './components/HomePage/HomePage';

function App() {

   
  return (
      <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path = 'TextPage' element ={<TextPage/>}/>
      </Routes>
      </div>
  );
}

export default App;
