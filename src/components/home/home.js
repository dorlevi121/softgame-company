import React from 'react';
import './home.css';
import '../../App.css';

import video from '../../assets/videos/video.mp4';
import * as text from '../../assets/language/language';


function Home(props) {
    const language = props.language;

    return (
        <section id="home" className="parallax-section">
            <div className="overlay" />
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-12 home-text" style={!language ? { float: 'none' } : {}}>
                        <h1>{text.titleHome[language]}</h1>
                        <p>{text.secTitleHome[language]}</p>
                        <ul className="section-btn">
                            <a href="#about" className="smoothScroll"><span data-hover={text.buttonHome[language]}>{text.buttonHome[language]}</span></a>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Video */}
            <video controls autoPlay loop muted>
                <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </section>
    )
}

export default Home;
