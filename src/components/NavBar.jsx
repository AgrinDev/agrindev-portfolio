import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../assets/svg/nav-logo.svg'

export default class NavBarHome extends Component {
    render() {
        return (
            <nav className="nav-bar">
                <Link className="logo-container" to="/">
                    <img className="logo-img" src={navLogo} alt="Logo"/>
                </Link>
                <ul className="options">
                    <li className="options__buttom">
                        <Link className="options__link" to="/projects">PROJECTS</Link>
                    </li>
                    <li className="options__buttom">
                        <Link className="options__link" to="/skills">SKILLS</Link>
                    </li>
                    <li className="options__buttom">
                        <Link className="options__link" to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
