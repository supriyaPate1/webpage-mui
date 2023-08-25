import './App.css';
import { Routes, Route, } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
// import Service from './Service';
import Navbar from './Navbar';
import Resource from './Resource';
function App() {
  return (
    <>
    <Routes>
      <Route element={<Navbar/>} >
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/resource" element={<Resource/>} />    
      </Route>
    </Routes>
    </>
  );
}


export default App;