import React from 'react';
import { Button, Col, Row, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import Fade from 'react-reveal/Fade';

const required = (val) => val && val.length;
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class ContactMe extends React.Component {
	render () {
		return (
			<div id="Contact-Me">
				<div className="contact-section"> 
					<div className="row">
						<Fade up>
							<div className="col-12 col-sm-12 col-md-6 contact-msg">
								<h2 className="c-info">Send a Message</h2>
								<LocalForm>
			                            <Row className="form-group">
			                                <Label htmlFor="Name" md={2}> Name </Label>
			                                <Col md={10}>
			                                    <Control.text model=".name" className="form-control msg-input" validators={{ required }} id="name" name="name" placeholder="Your Name" autoComplete="off" />
			                                    <Errors className="text-danger" model=".name" show="touched" messages={{ required: 'Name Required' }} /> 
			                                </Col>
			                            </Row>

			                            <Row className="form-group">
			                                <Label htmlFor="email" md={2}> E-mail </Label>
			                                <Col md={10}>
			                                    <Control.text model=".email" className="form-control msg-input" validators={{ required, validEmail }} id="email" name="email" placeholder="example@domain.com" autoComplete="off" />
			                                    <Errors className="text-danger" model=".email" show="touched" messages={{ required: 'E-mail Required,', validEmail: ' Invalid E-mail Address' }} />
			                                </Col>
			                            </Row>

			                            <Row className="form-group">
			                                <Label htmlFor="message" md={2}> Message </Label>
			                                <Col md={10}>
			                                    <Control.textarea model=".message" className="form-control msg-input" id="message" name="message" row="12" placeholder="Your message..." autoComplete="off" />
			                                </Col> 
			                            </Row>

			                            <Row className="form-group">
			                                <Col md={{size: 10, offset: 2}}>
			                                    <Button type="submit" href="mailto:mdyaseenahmed1@gmail.com">
			                                        Send <span className="fa fa-paper-plane"> </span>
			                                    </Button>
			                                </Col>
			                            </Row>
			                        </LocalForm>
							</div>	
						</Fade> 

						<div className="col-12 col-sm-12 col-md-1">

						</div>
						
						<Fade up>
							<div className="col-12 col-sm-12 col-md-5 contact-info">
								<div className="c-info-sec">
									<h2 className="c-info"> Contact Info</h2>
									<h5 className="msg"> <span className="fa fa-map-marker"> </span> Bangalore, India </h5>
									<h5 className="DCET contact"> <span className="fa fa-phone"> </span> +91 9108735020 </h5>
									<h5 className="msg"> <span className="fa fa-envelope"> </span> mdyaseenahmed1@gmail.com </h5>
									<h5 className="msg"> <span className="fa fa-globe"> </span> https://mdyaseenahmed.ml </h5>
								</div>
							</div>
						</Fade>
					</div>
				</div>
			</div>	
	);
	}
} 

export default ContactMe;