import { Toaster } from 'react-hot-toast';
import './App.css';
import { Suspense, lazy, useContext, useState } from 'react';
import { themeContext } from './Context';

// Eagerly loaded — visible immediately on page load
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

// Lazily loaded — below the fold, load on demand
const About = lazy(() => import('./components/About/About'));
const Experience = lazy(() => import('./components/About/Experience'));
const Education = lazy(() => import('./components/About/Education'));
const Services = lazy(() => import('./components/Services/Services'));
const Project = lazy(() => import('./components/Projects/Project'));
const Testimonial = lazy(() => import('./components/Testimonial/Testimonial'));
const Contact = lazy(() => import('./components/Contacts/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const SEOWrapper = lazy(() => import('./components/SEO/SEOWrapper'));

// Lightweight loader shown while lazy components load
const SectionLoader = () => (
  <div style={{
    minHeight: '20rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#aaa',
    fontSize: '1rem'
  }}>
    <span>Loading...</span>
  </div>
);

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [currentSection, setCurrentSection] = useState('home');

  return (
    <Suspense fallback={<SectionLoader />}>
      <SEOWrapper section={currentSection}>
        <div
          className="App"
          style={{
            background: darkMode ? 'black' : '',
            color: darkMode ? 'white' : '',
          }}
        >
          <Toaster position="top-right" />
          <Navbar setCurrentSection={setCurrentSection} />
          <Home setCurrentSection={setCurrentSection} />

          <Suspense fallback={<SectionLoader />}>
            <About setCurrentSection={setCurrentSection} />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Experience />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Education />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Services setCurrentSection={setCurrentSection} />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Project setCurrentSection={setCurrentSection} />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Testimonial setCurrentSection={setCurrentSection} />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Contact setCurrentSection={setCurrentSection} />
          </Suspense>

          <Suspense fallback={<div style={{ height: '25rem' }} />}>
            <Footer />
          </Suspense>
        </div>
      </SEOWrapper>
    </Suspense>
  );
}

export default App;
