import React from 'react';
import Fade from 'react-reveal/Fade';

function Footer() {
	return (
		<div className="footer">
		<Fade bottom>
			<div className="row">
				<div className="col-12 col-sm-12 col-md-12 collab">
					<h3> I am available for any new collabs, ideas and opportunities here: </h3>
				</div>
			</div>
			<div className="row social-icons">
					<div className="col-12 col-sm-1 col-md-4">

					</div>

					<div className="col-2 col-sm-1 col-md-1">
					    <a href="mailto:mdyaseenahmed1@gmail.com" target="_blank" rel="noopener noreferrer">
							<span className="Resume-btn-1 github">
					        	<span className="fa fa-envelope-o"> </span>
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
				    	<a href="https://twitter.com/MdYaseenAhmed1" target="_blank" rel="noopener noreferrer">
				          	<span className="Resume-btn-1">
				          		<span className="fa fa-twitter"> </span>
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
	        <div className="foot">
	        	<h5> Designed & Developed By</h5>
	        	<h4> Md Yaseen Ahmed</h4>
	        	<h6> &copy; All Rights Reserved - 2020 </h6>
	        	<div className="to-top">
		        	<a href="#top">
				    	<span className="to-top-btn">
				        	<span className="fa fa-chevron-up"> </span>
				       	</span>
					</a>
				</div>
	        </div>
	      </Fade>  
		</div>
	);
}

export default Footer;