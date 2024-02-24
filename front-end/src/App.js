import './App.css';
import Navigaton from './components/Navigaton';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigaton />
        <Banner />
        <Skills />
        <Project />
        <Routes>
          <Route path="/" element={<Contact />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
