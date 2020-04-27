import React from 'react';
import './menu.css';
import * as text from '../../assets/language/language';

function Menu(props) {
  const language = props.language;
  const menuSide = !language ? 'navbar-left' : 'navbar-right';


  return (
    <div className="navbar custom-navbar navbar-fixed-top" role="navigation">
      <div className="container">

        {/* MENU LINKS */}
        <div className="collapse navbar-collapse menu">
          <ul className={"nav navbar-nav " + menuSide} >
            <li><a href="#home" className="smoothScroll">{text.menuHome[language]}</a></li>
            <li><a href="#about" className="smoothScroll">{text.menuProjects[language]}</a></li>
            <li><a href="#team" className="smoothScroll">{text.menuAbout[language]}</a></li>
            <li><a href="#contact" className="smoothScroll">{text.menuContact[language]}</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-btn">
              {text.menuLanguage[language]}
                </a>
              <div className="dropdown-content">
                <a onClick={()=>props.changeLanguage()} className="dropdown-item">עברית</a>
                <a onClick={()=>props.changeLanguage()} className="dropdown-item">English</a>
              </div>
            </li>

          </ul>
        </div>

        < div className="navbar-header">
          <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="icon icon-bar" />
            <span className="icon icon-bar" />
            <span className="icon icon-bar" />
          </button>
          {/* lOGO */}
          <a href="index.html" className="navbar-brand" style={!language ? { float: 'right' } : {}}>SoftGame</a>
        </div>

      </div>
    </div >
  )
}

export default Menu;
