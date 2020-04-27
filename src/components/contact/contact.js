import React from 'react';
import './contact.css';
import * as text from '../../assets/language/language';

function Contact(props) {
    const language = props.language;
    const name = (
        <div className="col-md-6 col-sm-6">
            <input type="text" className="form-control" id="cf-name" name="cf-name" placeholder={text.nameContact[language]} />
        </div>
    );

    return (
        <section id="contact" className="parallax-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-3 col-md-6 col-sm-12">
                        <div className="section-title">
                            <h1>{text.titleContact[language]}</h1>
                        </div>
                    </div>
                    <div className="clearfix" />
                    <div className="col-md-offset-2 col-md-8 col-sm-12">
                        {/* CONTACT FORM HERE */}
                        <form id="contact-form" action="php/contact.php" method="get" role="form">
                            {/* IF MAIL SENT SUCCESSFULLY */}
                            <h6 className="text-success">{text.magSuccsess[language]} </h6>
                            {/* IF MAIL SENDING UNSUCCESSFULL */}
                            <h6 className="text-danger">{text.emailError[language]}</h6>
                            {!language?name: null}
                            <div className="col-md-6 col-sm-6">
                                <input type="email" className="form-control" id="cf-email" name="cf-email" placeholder={text.emailContact[language]} />
                            </div>
                            {language?name: null}

                            <div className="col-md-12 col-sm-12">
                                <input type="text" className="form-control" id="cf-subject" name="subject" placeholder={text.subjectContact[language]} />
                                <textarea className="form-control" rows={5} id="cf-message" name="cf-message" placeholder={text.msgContact[language]} defaultValue={""} />
                            </div>
                            <div className="col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
                                <div className="section-btn">
                                    <button type="submit" className="form-control" id="cf-submit" name="submit"><span data-hover={text.buttonContact[language]}>{text.buttonContact[language]}</span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
