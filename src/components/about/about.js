import React, {useEffect} from 'react';
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import * as text from '../../assets/language/language';
import p1 from '../../assets/images/about1.jpg';
import p2 from '../../assets/images/about2.jpg';


function About(props) {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            offset: 200
        })
    }, []);

    const language = props.language;

    return (
        <section id="about" className="parallax-section" >
            <div className="container" data-aos="fade-left">
                <h3 className="section-title">{text.titleAbout[language]}</h3>

                <div className="row">

                    <div className=" col-md-6 col-sm-12 about-info">
                        <h1 style={language ? { textAlign: 'right' } : {}}>{text.contentAbout[language]}</h1>
                    </div>

                    <div className="col-md-6 col-sm-12 composition">
                        <img src={p1}
                            alt="Photo 1" class="composition__photo composition__photo--p1" />

                        <img src={p2}
                            alt="Photo 2" class="composition__photo composition__photo--p2" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
