import { Toaster } from 'react-hot-toast';
import './App.css'
import About from './components/About/About';
import Contact from './components/Contacts/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from "./components/Navbar/Navbar";
import Project from './components/Projects/Project';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';

import { themeContext } from './Context';
import { useContext } from 'react';

function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className="App"
      style = {{
        background : darkMode? 'black' : '',
        color: darkMode ? 'white' : '' 
      }}

      >
      <Toaster />
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Project/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
