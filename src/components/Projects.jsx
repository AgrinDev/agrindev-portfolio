import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import porject1 from '../assets/png/web-page-example1.png';
import porject2 from '../assets/png/web-page-example2.png';
import porject3 from '../assets/png/web-page-example3.png';
import comingSoon from '../assets/png/coming-soon.png';

export default class Projects extends Component {
    render() {
        return (
            <main>
                <article className="h1">
                    <h1 className="h1__text">My web projects:</h1>
                </article>
                <article className="projects-container">
                    <section className="card">
                        <div className="card__view">
                            <img className="card__view-img" src={porject1} alt=""/>
                            <div className="card__view-info">
                                <h2 className="card__view-info-tittle">Place Holder</h2>
                                <p className="card__view-info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div className="card__view-info-buttoms">
                                    <button className="card__view-info-buttom">
                                        <Link class="card__view-info-link" to="#">Code <i className="fas fa-code"></i></Link>
                                    </button>
                                    <button className="card__view-info-buttom">
                                        <Link class="card__view-info-link" to="#">Web site <i className="fas fa-globe"></i></Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card__tags">
                            <div className="card__tag-icon"><i className="fab fa-html5"></i></div>
                            <div className="card__tag-icon"><i className="fab fa-sass"></i></div>
                            <div className="card__tag-icon"><i className="fab fa-bootstrap"></i></div>
                            <div className="card__tag-icon"><i className="fab fa-js-square"></i></div>
                        </div>
                    </section>
                    <section className="card">
                        <div className="card__view">
                            <img className="card__view-img" src={porject2} alt=""/>
                            <div className="card__view-info">
                                <h2 className="card__view-info-tittle">Place Holder</h2>
                                <p className="card__view-info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div className="card__view-info-buttoms">
                                    <button className="card__view-info-buttom">
                                        <Link class="card__view-info-link" to="#">Code <i className="fas fa-code"></i></Link>
                                    </button>
                                    <button className="card__view-info-buttom">
                                        <Link class="card__view-info-link" to="#">Web site <i className="fas fa-globe"></i></Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card__tags">
                            <div className="card__tag-icon"><i className="fab fa-html5"></i></div>
                            <div className="card__tag-icon"><i className="fab fa-sass"></i></div>
                            <div className="card__tag-icon"><i className="fab fa-bootstrap"></i></div>
                            <div className="card__tag-icon"><i className="fab fa-js-square"></i></div>
                        </div>
                    </section>
                    <section className="card">
                        <div className="card__view">
                            <img className="card__view-img" src={porject3} alt=""/>
                            <div className="card__view-info">
                                <h2 className="card__view-info-tittle">Place Holder</h2>
                                <p className="card__view-info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div className="card__view-info-buttoms">
                                    <button className="card__view-info-buttom">
                                        <Link class="card__view-info-link" to="#">Code <i className="fas fa-code"></i></Link>
                                    </button>
                                    <button className="card__view-info-buttom">
                                        <Link class="card__view-info-link" to="#">Web site <i className="fas fa-globe"></i></Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card__tags">
                            <div className="card__tag-icon"><i className="fab fa-html5"></i></div>
                            <div className="card__tag-icon"><i className="fab fa-sass"></i></div>
                            <div className="card__tag-icon"><i className="fab fa-bootstrap"></i></div>
                            <div className="card__tag-icon"><i className="fab fa-js-square"></i></div>
                        </div>
                    </section>
                    <section className="card">
                        <div className="card__view">
                            <img className="card__view-img" src={comingSoon} alt=""/>
                            <div className="card__view-info">
                                <h2 className="card__view-info-tittle">Place Holder</h2>
                                <p className="card__view-info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div className="card__view-info-buttoms">
                                    <button className="card__view-info-buttom">
                                        <Link class="card__view-info-link" to="#">Code <i className="fas fa-code"></i></Link>
                                    </button>
                                    <button className="card__view-info-buttom">
                                        <Link class="card__view-info-link" to="#">Web site <i className="fas fa-globe"></i></Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card__tags">
                            <div className="card__tag-icon"><i className="fab fa-html5"></i></div>
                            <div className="card__tag-icon"><i className="fab fa-sass"></i></div>
                            <div className="card__tag-icon"><i className="fab fa-bootstrap"></i></div>
                            <div className="card__tag-icon"><i className="fab fa-js-square"></i></div>
                        </div>
                    </section>
                    <section className="card">
                        <div className="card__view">
                            <img className="card__view-img" src={comingSoon} alt=""/>
                            <div className="card__view-info">
                                <h2 className="card__view-info-tittle">Place Holder</h2>
                                <p className="card__view-info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div className="card__view-info-buttoms">
                                    <button className="card__view-info-buttom">
                                        <Link class="card__view-info-link" to="#">Code <i className="fas fa-code"></i></Link>
                                    </button>
                                    <button className="card__view-info-buttom">
                                        <Link class="card__view-info-link" to="#">Web site <i className="fas fa-globe"></i></Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card__tags">
                            <div className="card__tag-icon"><i className="fab fa-html5"></i></div>
                            <div className="card__tag-icon"><i className="fab fa-sass"></i></div>
                            <div className="card__tag-icon"><i className="fab fa-bootstrap"></i></div>
                            <div className="card__tag-icon"><i className="fab fa-js-square"></i></div>
                        </div>
                    </section>
                    <section className="card">
                        <div className="card__view">
                            <img className="card__view-img" src={comingSoon} alt=""/>
                            <div className="card__view-info">
                                <h2 className="card__view-info-tittle">Place Holder</h2>
                                <p className="card__view-info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div className="card__view-info-buttoms">
                                    <button className="card__view-info-buttom">
                                        <Link class="card__view-info-link" to="#">Code <i className="fas fa-code"></i></Link>
                                    </button>
                                    <button className="card__view-info-buttom">
                                        <Link class="card__view-info-link" to="#">Web site <i className="fas fa-globe"></i></Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card__tags">
                            <div className="card__tag-icon"><i className="fab fa-html5"></i></div>
                            <div className="card__tag-icon"><i className="fab fa-sass"></i></div>
                            <div className="card__tag-icon"><i className="fab fa-bootstrap"></i></div>
                            <div className="card__tag-icon"><i className="fab fa-js-square"></i></div>
                        </div>
                    </section>
                </article>
            </main>
        )
    }
}
