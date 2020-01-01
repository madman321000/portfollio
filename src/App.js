import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Experience from './components/experience';
import Banner from './components/banner';
import About from './components/about';
import Projects from './components/projects';
import Head from './components/head';
import Contact from './components/contact';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Head></Head>
      <script src="https://unpkg.com/babel-core@5.8.38/browser.min.js"></script>
      <div className="mian-content">
        <BrowserRouter>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light">
            <div className="logo text-left">
              <h1>
                <a className="navbar-brand" href="/portfollio"><i className="fas fa-copy" /> Maneesh Madala</a>
              </h1>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-lg-auto text-lg-right text-center">
                <li className="nav-item">
                  <a className="nav-link" href="/portfollio">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="/portfollio/about">About Me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="/portfollio/experience">Work Experience</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="/portfollio/projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/portfollio/contact">Contact Me</a>
                </li>
              </ul>
            </div>
          </nav>
          <Route exact path="/portfollio" component={Banner} />
          <Route exact path="/portfollio/about" component={About} />
          <Route exact path="/portfollio/projects" component={Projects} />
          <Route exact path="/portfollio/experience" component={Experience} />
          <Route exact path="/portfollio/contact" component={Contact} />
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
