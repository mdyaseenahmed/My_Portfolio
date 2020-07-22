import React from 'react';
import MdYaseen from '../images/yaseen.jpeg';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

function About() {
	return (
		<div id="About-Me">
			<div className="about-section">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-7">
						<Zoom top cascade>
							<h1 className="section-start"> About Me </h1>
						</Zoom>
						<Fade bottom>
							<p className="about-me">Hello, My Name is Md Yaseen Ahmed, Currently Pursuing B.E (Computer Science & Engineering) from B.M.S College of Engineering, Bangalore. <br /><br /> I am an all rounder web developer. I am a programmer with good knowledge of Web Development techniques. I love building things and learning new techniques. Also I like working in a team, you'll learn faster and much more. As the saying goes: "Two heads are better than one".</p>
						</Fade>
					</div>

					<div className="col-12 col-sm-12 col-md-5">
						<Fade bottom>
							<img src = {MdYaseen} alt="Md Yaseen" width="300px" className="my-img" />
						</Fade>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;