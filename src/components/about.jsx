import React, { Component } from 'react';
import '../stylesheets/about.css';

class About extends Component {

  render() {
    return (
    	<div className="jumbotron jumbotron-fluid jumbo">
    		<h1 className="name">Brian Sekelsky</h1>
    		<span className="lead">Developer and Designer</span>
    		<p></p>
    		{/*
    		<svg viewBox="0 0 500 100">
    		<filter id="dropshadow" height="135%">
			  <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
			  <feOffset dx="0" dy="4.5" result="offsetblur"/> 
			  <feComponentTransfer>
			    <feFuncA type="linear" slope="0.4"/> 
			  </feComponentTransfer>
			  <feMerge> 
			    <feMergeNode/>
			    <feMergeNode in="SourceGraphic"/> 
			  </feMerge>
			</filter>
    			<path className="curve" d="M-15,39 C177,149 337,-1 514,38" />
    		</svg>
        */}
	    	
    	</div>
    );
  }
}

export default About