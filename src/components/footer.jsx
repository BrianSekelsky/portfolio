import React, { Component } from 'react';
import '../stylesheets/footer.css';

class Projects extends Component {

	render(){
	    return (
	    	<div id="links" className="footer-area">
	    		<div className="container">
	    			<div className="row">
	    				<div className="col-4">
	    					<a className="footer-link footer-link1" href="https://twitter.com/brian_sekelsky">twitter</a>
	    				</div>
	    				<div className="col-4">
	    					<a className="footer-link footer-link2" href="https://www.linkedin.com/in/brian-sekelsky-467776a7/">linkedin</a>
	    				</div>
	    				<div className="col-4">
	    					<a className="footer-link footer-link3" href="https://github.com/BrianSekelsky">github</a>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    );
    }
}

export default Projects