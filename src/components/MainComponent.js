import React from 'react';
import '../styles/App.css';
import Header from './Header';
import AboutMe from './About';
import MyEducation from './Education'; 
import MySkills from './Skills';
import Projects from './Projects';
import { PROJECTS } from './ProjectsDetails';
import ContactMe from './Contact';
import Footer from './Footer';

class Main extends React.Component {

	constructor (props) {
		super (props);

		this.state = {
			projects: PROJECTS
		};
	}

	render () {
		return (
		    <div className="container">
			    <Header />
			    <AboutMe />
			    <MyEducation />
			    <MySkills />
			    <Projects project = {this.state.projects} />
			    <ContactMe />
			    <Footer />
		    </div>
		);		
	}
  
}

export default Main;
