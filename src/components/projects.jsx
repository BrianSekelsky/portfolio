import React, { Component } from 'react';
import '../stylesheets/projects.css';

class Projects extends Component {

	render(){
	    return (
	    	<div className="container-fluid" id="projects">
	    		<div className="container">
	    		<h1 className="projects-title">Projects</h1>
	    		<div className="row">
	    			<div className="col-md-4">
			    		<div id="projectsm" className="project">
			    			<a href="https://briansekelsky.github.io/mpc" className="justify-content-center projects">
				    			<img className="img-fluid" src={require("../img/mpc.png")} alt="Card image cap" />
				    			<div className="hide">
					    			<h4 className="project-title">Finger Drummer</h4>
					    			<div className="project-desc">
			    						My first independently created React project, the user can perform drum beats by playing on their computer keyboard.
			    					</div>
					    			<h4 className="project-title">Tools & Languages</h4>
					    			<div className="project-desc">
					    				React <b>|</b> javascript
					    			</div>
				    			</div>
			    			</a>
			    		</div>
	    			</div>

		    		<div className="col-md-4">
			    		<div id="projectsm" className="project">
			    			<a href="https://briansekelsky.github.io/search-app" className="justify-content-center projects">
				    			<img className="img-fluid" src={require("../img/search-app.png")} alt="Card image cap" />
				    			<div className="hide">
					    			<h4 className="project-title">Search App</h4>
					    			<div className="project-desc">
			    						A small search application demonstrates proficiency in creating intuitive UI and API requests. 
			    					</div>
					    			<h4 className="project-title">Tools & Languages</h4>
					    			<div className="project-desc">
					    				React.js <b>|</b> javascript <b>|</b> CSS flexbox
					    			</div>
				    			</div>
			    			</a>
			    		</div>
		    		</div>

		    		<div className="col-md-4">
			    		<div id="projectsm" className="project">
			    			<a href="https://briansekelsky.github.io/CSS-animations/index.html" className="justify-content-center projects">
				    			<img className="img-fluid" src={require("../img/css.png")} alt="Card image cap" />
				    			<div className="hide">
					    			<h4 className="project-title">CSS Animations</h4>
					    			<div className="project-desc">
				    					A webpage for showing off interesting CSS animations as I create them.
				    				</div>
					    			<h4 className="project-title">Tools & Languages</h4>
					    			<div className="project-desc">
					    				CSS
					   				</div>
				   				</div>
			    			</a>
			    		</div>
	    			</div>

		    		<div className="col-md-6">
			    		<div id="projectbg" className="project">
			    			<a href="https://briansekelsky.github.io/pctz" className="justify-content-center projects">
				   				<img className="img-fluid" src={require("../img/pctz.png")} alt="Card image cap" />
				   				<div className="hide">
					   				<h4 className="project-title">PCV Resources</h4>
					   				<div className="project-desc">
			    						A search engine/wiki built to house resources for peace corps volunteers in Tanzania. I built this using Jekyll and connected it to siteleaf CMS for administrators to add and edit content.
			    					</div>
					    			<h4 className="project-title">Tools & Languages</h4>
					    			<div className="project-desc">
					    				Jekyll <b>|</b> HTML/CSS <b>|</b> Ruby <b>|</b> Siteleaf CMS
					    			</div>
				    			</div>
			    			</a>
			    		</div>
		    		</div>

	    		<div className="col-md-6">
		    		<div id="projectbg" className="project">
		    			<a href="https://winter-foe.itch.io/wacky-nautical-adventure" className="justify-content-center projects">
			    			<img className="img-fluid" src={require("../img/wacky.png")} alt="Card image cap" />
			    			<div className="hide">
				    			<h4 className="project-title">Sailing Game</h4>
				    			<div className="project-desc">
			    					A endless runner style game I made for fun. I wanted to try making a 3D game with the Unity engine, and I ended up learning basic 3D modeling in the process.
			    				</div>
				    			<h4 className="project-title">Tools & Languages</h4>
				    			<div className="project-desc">
				    				C# <b>|</b> Unity3D <b>|</b> Blender <b>|</b> Ableton Live 
				   				</div>
			   				</div>	
		    			</a>
		    		</div>
	    		</div>
	    		
	    		</div>
	    		</div>

			</div>
	    );
    }
}

export default Projects