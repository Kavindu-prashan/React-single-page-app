import React from "react";
import { BrowserRouter as Router, Routes, Route,Switch  } from 'react-router-dom';
import NameList from "./components/pages/NameList/NameList";
import HeaderBar from "./components/Header/Headerbar";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";


function App() {
  return (
    <Router>
      <HeaderBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/namelist" element={<NameList/>}/>
      </Routes>
    </Router>
  );
}


export default App;