import React, { useState } from 'react';
import './App.css';
import Menu from './components/menu/menu';
import Home from './components/home/home';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';


function App() {
  const [language, setlanguage] = useState(1);
  const style = language ? { direction: 'rtl' } : { direction: 'ltr', fontFamily: 'Source Sans Pro, sans-serif' };

  const changeLanguage = () => {
    setlanguage(language ? 0 : 1);
  }
  return (
    <div style={style}>

      {/* PRE LOADER */}
      <div className="preloader">
        <div className="spinner">
          <span className="sk-inner-circle" />
        </div>
      </div>

      <Menu language={language} changeLanguage={changeLanguage} />
      <Home language={language} />
      <About language={language} />
      <Projects language={language} />
      <Contact language={language} />
      <Footer language={language} />

    </div>
  );
}

export default App;
