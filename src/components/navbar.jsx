import React, { Component } from 'react';
import Headroom from "react-headroom"
import '../stylesheets/navbar.css';

class Navbar extends Component {

  render() {
    return (
    	<div>
    	<div className="desktop-nav">
    	<Headroom>
		    <nav className="navbar">
		    <div className="container">
			  <a className="navbar-brand" href="/">
			    <img className="nav-image rounded-circle" src={require("../img/brian.svg")} width="100vw" height="100vh" alt=""/>
			  </a>
			  <ul className="nav nav-pills nav-stuff">
			    <li className="nav-item">
			      <a className="nav-link nav-link1" href="#about">About</a>
			    </li>
			    <li className="nav-item">
			      <a className="nav-link nav-link2" href="#projects">Projects</a>
			    </li>
			    <li className="nav-item">
			      <a className="nav-link nav-link3" href="#links">Links</a>
			    </li>
			  </ul>
			</div>
			</nav>
		</Headroom>
		</div>
		<div className="mobile-nav">
		    <nav className="navbar">
		    <div className="container">
			  <a className="navbar-brand" href="/">
			    <img className="nav-image rounded-circle" src={require("../img/brian.svg")} width="100vw" height="100vh" alt=""/>
			  </a>
			  <ul className="nav nav-pills nav-stuff">
			    <li className="nav-item">
			      <a className="nav-link nav-link1" href="#about">About</a>
			    </li>
			    <li className="nav-item">
			      <a className="nav-link nav-link2" href="#projects">Projects</a>
			    </li>
			    <li className="nav-item">
			      <a className="nav-link nav-link3" href="#links">Links</a>
			    </li>
			  </ul>
			</div>
			</nav>
		</div>	
		</div>	
    );
  }
}

export default Navbar

