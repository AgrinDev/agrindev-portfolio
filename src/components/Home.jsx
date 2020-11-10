import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import devImage from '../assets/png/development-illustration.png';

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <header className="header">
                    <p className="header__text1">Hi my name is Luis</p>
                    <h1 className="header__h1">I'm a Web Developer!</h1>
                    <p className="header__text2">I am looking for new challenges that will allow me to continue growing professionally and expand my knowledge much more. I invited you to check my work in this portfolio and if you have an excellent website in mind, contact me.</p>
                    <div className="cta">
                        <button className="cta__buttom">
                            <Link className="cta__link" to="/projects">CHECK MY WORK</Link>
                        </button>
                        <button className="cta__buttom">
                            <Link className="cta__link" to="/contact">GET IN TOUCH</Link>
                        </button>
                    </div>
                </header>
                <main className="home-main-container">
                    <div className="home-img-container">
                        <img className="home-img" src={devImage} alt="Development Illustration"/>
                    </div>
                </main>
            </div>
        )
    }
}
