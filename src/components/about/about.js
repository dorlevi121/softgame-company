import React from 'react';
import './about.css';
import * as text from '../../assets/language/language';

function About(props) {
    const language = props.language;

    return (
        <section id="about" className="parallax-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-1 col-md-10 col-sm-12">
                        <div className="about-info">
                            <h3>{text.titleAbout[language]}</h3>
                            <h1>{text.contentAbout[language]}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
