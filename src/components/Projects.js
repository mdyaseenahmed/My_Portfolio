import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

function RenderProjectDetails ({ project }) {
	if ( project !== null ) {
		return (
			<div className="project-card">
				<Fade bottom>			 
					<Card className="card-details">
						<CardImg top width="100%" height="50%" src={project.image} alt={ project.title } />
						<CardBody>
							<CardTitle className="project-title"> {project.title} </CardTitle>
							<CardText className="project-description"> {project.description} </CardText>
							<span className="m-btn"> <Button className="Resume-btn" href={project.github} rel="noopner noreferrer" target="_blank"> Github </Button> </span>
							{project.demo ? (<Button className="Resume-btn" href={project.demo} target="_blank" > Live Demo </Button>) : null}
						</CardBody>
					</Card>
				</Fade>
			</div>
		);
	}
	else {
		return (
			<div> </div>
		);
	}
}

function Projects(props) {	
		const projectDetails = props.project.map((proj)=>{
		return (
			<div key={proj.id} className="col-12 col-sm-12 col-md-4">
	        	<RenderProjectDetails project={proj} />
	      	</div>
		);
	});
	

	return (
		<div id="Projects">
			<div className="project-start">
				<Zoom top cascade>
					<h1 className="section-start"> Projects </h1>
				</Zoom>
				<div className="row">	
					{ projectDetails }
				</div>
			</div>
		</div>
	);
}

export default Projects;