import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/about";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
function App(){
  return(
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/menu" element={<Menu/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}
export default App;
