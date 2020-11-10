import React, { Component } from 'react';
import MainLogo from '../assets/svg/main-logo.svg';

export default class Contact extends Component {
    render() {
        return (
            <main>
                <article className="h1">
                    <h1 className="h1__text">Get in touch:</h1>
                </article>
                <article className="contact-container">
                    <section>
                        <form className="form" action="">
                            <input className="form__input" type="text" placeholder="Your name *" maxlength="255" required/>
                            <input className="form__input" type="email" placeholder="Your email *" maxlength="255" required/>
                            <textarea className="form__textarea" name="message" id="" cols="50" rows="15" placeholder="What new project do you want us to carry out? *" required></textarea>
                            <div className="form__footer">
                                <div className="form__notify"></div>
                                <button className="form__buttom">SEND</button>
                            </div>
                        </form>
                    </section>
                    <section className="profile-info">
                        <img className="profile-info__img" src={MainLogo} alt="Main Logo"/>
                        <h2 className="profile-info__tittle">Agrindev</h2>
                        <p className="profile-info__text">Web Developer</p>
                        <p className="profile-info__text2">GTM -5</p>
                        <div className="social-links">
                            <a className="social-links__icon" href="https://www.linkedin.com/in/luis-j-agrinzones-837b2b16a/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="social-links__icon" href="https://twitter.com/Agrindev" target="_blank"rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="social-links__icon" href="https://github.com/AgrinDev" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a className="social-links__icon" href="https://stackoverflow.com/users/14006234/agrindev" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-stack-overflow"></i>
                            </a>
                        </div>
                    </section>
                </article>
                <footer className="footer">
                    <p className="footer__text">Copyright © 2020 Luis Agrinzones - Freelance web developer</p>
                </footer>
            </main>
        )
    }
}
