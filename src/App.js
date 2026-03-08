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
import SEOWrapper from './components/SEO/SEOWrapper';

import { themeContext } from './Context';
import { useContext, useState } from 'react';

function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [currentSection, setCurrentSection] = useState('home');

  return (
    <SEOWrapper section={currentSection}>
      <div className="App"
        style ={{
          background : darkMode? 'black' : '',
          color: darkMode ? 'white' : '' 
        }}
        >
        <Toaster />
        <Navbar setCurrentSection={setCurrentSection}/>
        <Home setCurrentSection={setCurrentSection}/>
        <About setCurrentSection={setCurrentSection}/>
        <Services setCurrentSection={setCurrentSection}/>
        <Project setCurrentSection={setCurrentSection}/>
        <Testimonial setCurrentSection={setCurrentSection}/>
        <Contact setCurrentSection={setCurrentSection}/>
        <Footer/>
      </div>
    </SEOWrapper>
  );
}

export default App;
