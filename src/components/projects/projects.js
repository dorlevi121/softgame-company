import React, { useEffect } from 'react';
import './projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import * as text from '../../assets/language/language';

function Projects(props) {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            offset: 200
        })
    }, []);

    const language = props.language;

    return (
        <section id="project" className="parallax-section">
            <div className="container" data-aos="fade-right">
                <h3 className="section-title">{text.titleProjects[language]}</h3>

                <div className="row">

                    <div className="col-md-6 col-sm-6">
                        {/* PROJECT ITEM */}
                        <div className="project-item">
                            <a href="http://up419.siz.co.il/up3/jyhjtjtohynq.jpg" className="image-popup">
                                <div className="color-overlay">
                                    <img src="http://up419.siz.co.il/up3/jyhjtjtohynq.jpg" className="img-responsive" alt="" />
                                </div>
                                <div className="project-overlay">
                                    <div className="project-info">
                                        <h1>{text.firstProject[language]}</h1>
                                        <h3>{text.fullPicture[language]}</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        {/* PROJECT ITEM */}
                        <div className="project-item">
                            <a href="http://up419.siz.co.il/up2/mxtmzywcwmre.png" className="image-popup">
                                <div className="color-overlay">
                                    <img src="http://up419.siz.co.il/up2/mxtmzywcwmre.png" className="img-responsive" alt="" />
                                </div>
                                <div className="project-overlay">
                                    <div className="project-info">
                                        <h1>{text.secProject[language]}</h1>
                                        <h3>{text.fullPicture[language]}</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        {/* PROJECT ITEM */}
                        <div className="project-item">
                            <a href="http://up419.siz.co.il/up3/ztjghnn2kmd1.png" className="image-popup">
                                <div className="color-overlay">
                                    <img src="http://up419.siz.co.il/up3/ztjghnn2kmd1.png" className="img-responsive" alt="" />
                                </div>
                                <div className="project-overlay">
                                    <div className="project-info">
                                        <h1>{text.thirdProject[language]}</h1>
                                        <h3>{text.fullPicture[language]}</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        {/* PROJECT ITEM */}
                        <div className="project-item">
                            <a href="http://up419.siz.co.il/up2/qwcz1zmdnztq.png" className="image-popup">
                                <div className="color-overlay">
                                    <img src="http://up419.siz.co.il/up2/qwcz1zmdnztq.png" className="img-responsive" alt="" />
                                </div>
                                <div className="project-overlay">
                                    <div className="project-info">
                                        <h1>{text.fourthProject[language]}</h1>
                                        <h3>{text.fullPicture[language]}</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;
