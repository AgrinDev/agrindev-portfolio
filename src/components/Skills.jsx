import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <main>
                <article className="h1">
                    <h1 className="h1__text">My skills set:</h1>
                </article>
                <article className="skills-container">
                    <section className="skill">
                        <div className="skill__icon">
                            <i className="fab fa-html5"></i>
                        </div>
                        <div className="skill__tittle">
                            <h2>HTML5</h2>
                        </div>
                    </section>
                    <section className="skill">
                        <div className="skill__icon">
                            <i className="fab fa-css3-alt"></i>
                        </div>
                        <div className="skill__tittle">
                            <h2>CSS3</h2>
                        </div>
                    </section>
                    <section className="skill">
                        <div className="skill__icon">
                            <i className="fab fa-sass"></i>
                        </div>
                        <div className="skill__tittle">
                            <h2>Sass</h2>
                        </div>
                    </section>
                    <section className="skill">
                        <div className="skill__icon">
                            <i className="fab fa-bootstrap"></i>
                        </div>
                        <div className="skill__tittle">
                            <h2>Bootstrap</h2>
                        </div>
                    </section>
                    <section className="skill">
                        <div className="skill__icon">
                            <i className="fab fa-js-square"></i>
                        </div>
                        <div className="skill__tittle">
                            <h2>JavaScript</h2>
                        </div>
                    </section>
                    <section className="skill">
                        <div className="skill__icon">
                            <i className="fab fa-react"></i>
                        </div>
                        <div className="skill__tittle">
                            <h2>React</h2>
                        </div>
                    </section>
                    <section className="skill">
                        <div className="skill__icon">
                            <i className="fab fa-python"></i>
                        </div>
                        <div className="skill__tittle">
                            <h2>Python</h2>
                        </div>
                    </section>
                    <section className="skill">
                        <div className="skill__icon">
                            <i className="fas fa-database"></i>
                        </div>
                        <div className="skill__tittle">
                            <h2>SQL</h2>
                        </div>
                    </section>
                    <section className="skill">
                        <div className="skill__icon">
                            <i className="fab fa-git-alt"></i>
                        </div>
                        <div className="skill__tittle">
                            <h2>Git</h2>
                        </div>
                    </section>
                    <section className="skill">
                        <div className="skill__icon">
                            <i className="fab fa-docker"></i>
                        </div>
                        <div className="skill__tittle">
                            <h2>Docker</h2>
                        </div>
                    </section>
                </article>
            </main>
        )
    }
}
