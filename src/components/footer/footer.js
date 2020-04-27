import React from 'react';
import './footer.css';
import * as text from '../../assets/language/language';
import { FacebookProvider, Group } from 'react-facebook';

function Fotter(props) {
    const language = props.language;

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <h2>SoftGame</h2>
                        <p>{text.streetFooter[language]}<br /> {text.cityFooter[language]}</p>
                        <ul className="social-icon">
                            <li><a href="#" className="fa fa-twitter" /></li>
                            <li><a href="#" className="fa fa-facebook" /></li>
                            <li><a href="#" className="fa fa-instagram" /></li>
                            <li><a href="#" className="fa fa-linkedin" /></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="footer-info">
                            <h2>{text.contactTitleFooter[language]}</h2>
                            <p><a href="tel:010-090-0780">050-224-3024</a></p>
                            <p><a href="mailto:info@company.com">info@company.com</a></p>
                            <p><a href="#">{text.contactMapFooter[language]}</a></p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div class="fb-page" data-href="https://www.facebook.com/hackarielu/" data-tabs="timeline"
                            data-width="300" data-height="200" data-small-header="true" data-adapt-container-width="true"
                            data-hide-cover="false" data-show-facepile="true">
                            <blockquote cite="https://www.facebook.com/hackarielu/"
                                class="fb-xfbml-parse-ignore">
                                <a href="https://www.facebook.com/hackarielu/">
                                    Hack-AU
                                    </a>
                            </blockquote>
                        </div>
                    </div>
                    <div className="clearfix" />
                    {/* 
           <div class="col-md-12 col-sm-12">
                <div class="copyright-text">
                     <p>Copyright © 2018 Company Name 
                     
                     | Design: Tooplate</p>
                </div>
           </div> */}
                </div>
            </div>
        </footer>
    )
}

export default Fotter;
