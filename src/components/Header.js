import React, { Component } from 'react';
import { Nav, NavbarBrand, Navbar, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';

import Banner from '../images/banner-1.png';
import Typical from 'react-typical';
import Fade from 'react-reveal/Fade';

class Header extends Component {

	constructor (props) {
		super (props);

		this.state = {
			isNavOpen: false
		};

		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav () {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

	render () {
		return (
			<React.Fragment>
				<Navbar className="navbar-dark fixed-top" expand="md">
		            <div className="container">
			            <NavbarToggler onClick={this.toggleNav} />
			            <Fade left>
			              <NavbarBrand className="mr-auto navBrand" href="/#top">
			              	<h1 className="name"> Md Yaseen Ahmed</h1>
			              </NavbarBrand>
			            </Fade>
			            
			            <Collapse isOpen={this.state.isNavOpen} navbar>
				            <Nav navbar>
					              	
				            </Nav>
				         	
				            <Nav className="ml-auto" navbar>
				            	<NavItem>
					           		<NavLink className="nav-link" onClick={this.toggleNav} href="/#About-Me">
					           			About Me
					           		</NavLink>
					           	</NavItem>
					           	
					           	<NavItem>
					           		<NavLink className="nav-link" onClick={this.toggleNav} href="/#Education">
					           			Education
					           		</NavLink>
					           	</NavItem>
					           	
					           	<NavItem>
					           		<NavLink className="nav-link" onClick={this.toggleNav} href="/#Skills">
					           			Skills
					           		</NavLink>
					           	</NavItem>
					           	
					           	<NavItem>
					           		<NavLink className="nav-link" onClick={this.toggleNav} href="/#Projects">
					           			Projects
					           		</NavLink>	              			              		
					           	</NavItem>
					           	
					           	{/*<NavItem>
					           		<NavLink className="nav-link" href="/#Certifications">
					            		My Cert.
					           		</NavLink>
					           	</NavItem>*/}
					           	
					           	<NavItem>
					           		<NavLink className="nav-link" onClick={this.toggleNav} href="/#Contact-Me">
					           			Contact Me
					           		</NavLink>	              			              		
					           	</NavItem>
		            			
					           	

		            			<NavItem>
				            			<NavLink className="nav-link" onClick={this.toggleNav}>
				            				Resume
				            			</NavLink>
				            	</NavItem>
				            </Nav>
				           	  		             
				        </Collapse>
		            </div>
	          	</Navbar>

	          	<div className="row intro">
	          		<Fade up>
	          		<div className="col-12 col-sm-12 col-md-7">
		          		<h3> <span> <img src='/Project_imgs/hi.png' className="animated-hello" alt='hello' /></span> Hi, My Name is,</h3>
		          		<h1> Md Yaseen Ahmed.</h1>
		          		<div className="auto-typing">
			          		<Typical 
			          			steps={['Student', 1200, 'FreeLancer', 1200, 'Web Developer', 1200, 'Tech Enthusiast', 1200]}
		        				loop={Infinity}
			          		/>
		          		</div>
		          		<div className="row">
		          			<div className="col-2 col-sm-1 col-md-1">
				          		<a href="https://twitter.com/MdYaseenAhmed1" target="_blank" rel="noopener noreferrer">
				          	    	<span className="Resume-btn-1">
				          				<span className="fa fa-twitter"> </span>
				          			</span>
				          		</a>	
				          	</div>

				          	<div className="col-2 col-sm-1 col-md-1">		
				          		<a href="https://linkedin.com/in/mdyaseenahmed" target="_blank" rel="noopener noreferrer">
					          		<span className="Resume-btn-1">
					          			<span className="fa fa-linkedin"> </span>
					          		</span>
					          	</a>
				          	</div>

				          	<div className="col-2 col-sm-1 col-md-1">
					          	<a href="https://github.com/mdyaseenahmed" target="_blank" rel="noopener noreferrer">
					          		<span className="Resume-btn-1 github">
					          			<span className="fa fa-github"> </span>
					          		</span>
					          	</a>
				         
				          	</div>
			          	</div>		     
			          	<a href="mailto:mdyaseenahmed1@gmail.com">
			          			<span className="Resume-btn-02">
			          	       		Get in Touch
			          			</span>     	
			          	</a>
			        	<div className="scrollDown">
			          		<span> </span>
			          		<span> </span>
			          		<span> </span>
			          	</div>  						          		
	          		</div>

	          		</Fade>
	          		<Fade right up>
		          		<div className="col-12 col-sm-12 col-md-5">
		          			<img src={Banner} width="100%" alt = "Avatar" className="banner-img" />
		          		</div>
	          		</Fade>
	          	</div>
		        
			</React.Fragment>
		);
	}
}

export default Header;