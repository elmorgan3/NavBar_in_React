import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logoReact.png';
import '../styles/NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-default navbar-fixed-side-left" role="navigation">
            <div className="navbar-header">
              <button type="button" className="pull-left navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Desplegar navegación</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="navbar-logobox">
                <a href="/">
                  <img className="navbar-logo" src={Logo} alt="Logo" />
                </a>
              </div>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="navbar-list-item"><Link to="/">Home</Link></li>
                <li className="navbar-list-item"><Link to="/bio">Bio</Link></li>
                <li className="navbar-list-item"><Link to="/description">Description</Link></li>
                <li className="navbar-list-item"><Link to="/contact-us">Contact us</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;