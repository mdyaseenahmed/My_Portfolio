import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

function Education() {
	return (
		<div id="Education">
			<div className="Education-section row">
				<div className="col-12 col-sm-12 col-md-5">
					<Zoom top cascade>
					<h1 className="section-start"> Education</h1>
					</Zoom>
				</div>
				<div className="col-12 col-sm-12 col-md-7">
					<Fade bottom>
					<h3 className="institute"> B.M.S. College Of Engineering, Bangalore </h3>
					<h5 className="description-01"> B.E (Computer Science & Engineering) </h5>
					<h6> Currently Pursuing - IV<sup>th</sup> Semester</h6>
					<br />

					<h3 className="institute"> K.C.T. Polytechnic, Gulbarga </h3>
					<h5 className="description-01"> Diploma (Computer Science & Engineering) </h5>
					<h6 className="DCET"> May 2019 <span className="fa fa-circle"></span> 94.41% <span className="DCET"><span className="fa fa-circle"></span> DCET - 28<sup>th</sup> Rank </span> </h6>
					<br />

					<h3 className="institute"> Indian English Medium School, Gulbarga </h3>
					<h5 className="description-01"> Class - X<sup> th</sup> <span className="SSLC"><span className="fa fa-circle"></span> May 2016 <span className="fa fa-circle"></span> 85.92% </span> </h5>
					</Fade>
				</div>
			</div>
		</div>
	);
}

export default Education;