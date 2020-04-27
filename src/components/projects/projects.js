import React from 'react';
import './projects.css';
import * as text from '../../assets/language/language';

function Projects(props) {
    const language = props.language;

    return (
        <section id="project" className="parallax-section">
            <div className="container">
            <h4>{text.titleProjects[language]}</h4>

                <div className="row">
                    
                    <div className="col-md-6 col-sm-6">
                        {/* PROJECT ITEM */}
                        <div className="project-item">
                            <a href="http://up419.siz.co.il/up3/jyhjtjtohynq.jpg" className="image-popup">
                                <img src="http://up419.siz.co.il/up3/jyhjtjtohynq.jpg" className="img-responsive" alt="" />
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
                            <a href="https://user-images.githubusercontent.com/30637457/55686720-6ad28680-596d-11e9-94fd-d0a895bdcb55.jpg" className="image-popup">
                                <img src="https://user-images.githubusercontent.com/30637457/55686720-6ad28680-596d-11e9-94fd-d0a895bdcb55.jpg" className="img-responsive" alt="" />
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
                            <a href="http://up419.siz.co.il/up2/jhlwycdynjzj.jpg" className="image-popup">
                                <img src="http://up419.siz.co.il/up2/jhlwycdynjzj.jpg" className="img-responsive" alt="" />
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
                            <a href="assets/images/project-image4.jpg" className="image-popup">
                                <img src="images/project-image4.jpg" className="img-responsive" alt="" />
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
