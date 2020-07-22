import React from 'react';
import html5 from '../images/html5.png';
import css3 from '../images/css3.png';
import js from '../images/js.png';
import bootstrap4 from '../images/bootstrap4.png';
import materializecss from '../images/materialize.png'; 
import nodejs from '../images/nodejs.png';
import npm from '../images/npm.png';
import jquery from '../images/jquery.png';
import react from '../images/react.png';
import expressjs from '../images/expressjs.png';
import mysql from '../images/mysql.png';
import C from '../images/C.png';
import java from '../images/java.png';
import github from '../images/github.png';
import git from '../images/git.png';
import vscode from '../images/vscode.png';
import { Column, Row } from 'simple-flexbox';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

function Skills() {
	return (
		<div id="Skills">
		<div className="skills-section">
			<div className="row">
				<div className="col-12 col-sm-12 col-md-12">
					<Zoom down cascade>
					<h1 className="section-start"> My Skills </h1>
					</Zoom>
					<Fade bottom>
					<Column flexGrow={1}>
		                <Row wrap vertical='center'>
		                    <Column flexGrow={1} horizontal='center'>
		                        <img className="logo" src={html5} alt="html5"></img>
		                    </Column>
		                    <Column flexGrow={1} horizontal='center'>
		                        <img className="logo" src={css3} alt="css"></img>
		                    </Column>

		                    <Column flexGrow={1} horizontal='center'>
		                        <img className="logo" src={js} alt="js"></img>
		                    </Column>
		                    <Column flexGrow={1} horizontal='center'>
		                        <img className="logo" src={react} alt="react"></img>
		                    </Column>
		                </Row>
                	</Column>
                	</Fade>
                	<Fade bottom>
                    <Column flexGrow={1}>
	                    <Row wrap vertical='center'>
		                    <Column flexGrow={1} horizontal='center'>
		                        <img className="logo" src={nodejs} alt="nodejs"></img>
		                    </Column>
		                    <Column flexGrow={1} horizontal='center'>
		                        <img className="logo" src={npm} alt="npm"></img> 
		                    </Column>
		                    <Column flexGrow={1} horizontal='center'>
		                        <img className="logo" src={expressjs} alt="ExpressJS"></img>
		                    </Column>
		                    <Column flexGrow={1} horizontal='center'>
		                        <img className="logo" src={jquery} alt="jquery"></img> 
		                    </Column>                    
	                    </Row>
                	</Column>
                	</Fade>
                	<Fade bottom>
                    <Column flexGrow={1}>
	                    <Row wrap vertical='center'>
		                    <Column flexGrow={1} horizontal='center'>
		                        <img className="logo" src={bootstrap4} alt="bootstrap"></img>
		                    </Column>
		                    <Column flexGrow={1} horizontal='center'>
		                        <img className="logo" src={materializecss} alt="materializecss"></img>
		                    </Column>
		                    <Column flexGrow={1} horizontal='center'>
		                        <img className="logo" src={mysql} alt="mysql"></img> 
		                    </Column>
		                    <Column flexGrow={1} horizontal='center'>
		                        <img className="logo" src={vscode} alt="vscode"></img>
		                    </Column>		                    
	                    </Row>
                	</Column>
                	</Fade>
                	<Fade bottom>
                	<Column flexGrow={1}>
	                    <Row wrap vertical='center'>
		                    <Column flexGrow={1} horizontal='center'>
		                        <img className="logo" src={C} alt="C"></img>
		                    </Column>
		                    <Column flexGrow={1} horizontal='center'>
		                        <img className="logo" src={java} alt="java"></img>
		                    </Column>
		                    <Column flexGrow={1} horizontal='center'>
		                        <img className="logo" src={git} alt="Git"></img>
		                    </Column>
		                    <Column flexGrow={1} horizontal='center'>
		                        <img className="logo" src={github} alt="github"></img>
		                    </Column>
	                    </Row>
                	</Column>
                	</Fade>
				</div>
			</div>
		</div>
		</div>
	);
}

export default Skills;