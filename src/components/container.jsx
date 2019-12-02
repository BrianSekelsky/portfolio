import React, { Component } from 'react';
import '../stylesheets/container.css';

const debounce = (func, wait) => {
    let timeout
    return (...args) => {
	    clearTimeout(timeout)
	    timeout = setTimeout(() => func.apply(this, args), wait)
	}
}

class Container extends Component {
    
	state={
		scrollPositionY: 0
	}

	componentDidMount() {
	    // 32 is the number of milliseconds to debounce
	    // I picked this because it's approx 2 frames (ie: 16.7 * 2)
	    return window.addEventListener('scroll', debounce(this.handleScroll, 32))
	}

	componentWillUnmount() {
	    return window.removeEventListener('scroll', debounce(this.handleScroll, 32))
	}

	handleScroll = () => {
	    // + is unary operator, same as Number(scrollPositionY)
	    const scrollPositionY = +window.scrollY
	    return this.setState({ scrollPositionY })
	}

	render(){
		const isScrolling = !!this.state.scrollPositionY
	    return (
	    	
	    		<div id="about" className="container">
	    			<div className="row brian-pic justify-content-center">
	    				<img className="my-pic" src={require("../img/brian.svg")} width="200vw" height="200vh" alt=""/>
	    				<svg className="svg-window" width="20" height="100">
	    					<polygon className={(isScrolling) ? 'triangle animateIt' : 'triangle'} points="0,100 20,100 20,75"/>
	    				</svg>	
						<div className={(isScrolling) ? 'shape animateIt' : 'shape'}>
							<h1>
								hello.
							</h1>
						</div>
	    			</div>
	    			<div className="row justify-content-center">
	    				<div className="col-lg-3 col-0"></div>
	    				<div className="col-lg-6 col-12">
				    					<div className="desc-card">
					    					<div className="about-desc">
					    						<h3 className="myName">I'm Brian.</h3>
											<p>
							    					This was my old portfolio website. I decided to switch to something simpler but I wanted to keep this here because I still think it's interesting to see and it has links to some older projects. Here's what the original text said:
							    				</p>
					    						<p>
							    					In 2016 I graduated from the University of Wisconsin - Madison with a B.S. in <b>Computer Science</b> and a certificate in <b>Studio Art.</b> Immediately after graduating I joined the Peace Corps and was sent off to Tanzania to learn Swahili and become a Computer/Math teacher at a secondary school of ~1000 students.
							    				</p>
							    				<p>
							    					Now I'm back in Madison looking to start my next chapter working in web development.
							    				</p>
				    						</div>
				    					</div>
			    		</div>
			    		<div className="col-lg-3 col-0"></div>
			    	</div>
			    	</div>
	    	
	    );
    }
}

export default Container
