import React from "react"
import './Footer.css';
import {Link, useLocation} from 'react-router-dom';

const Footer = () => {

	const location = useLocation();

	  if (location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/forgot-password') return null;

    return(
    <footer>
		<div className="content-wrapper-footer">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6 footer-left">
						<div className="top">
							<a className="logo" href="/">MNTN</a>
							<div className="footer-text">Get out there & discover your next slope, mountain & destination!</div>
						</div>	
						<div className="copyright">Copyright 2020 MNTN, Inc. Terms & Privacy
							<br />A concept by 
							<Link to="http://krystonschwarze.com" target="_blank" rel="noreferrer" className="author"> Kryston Schwarze </Link>
						</div>
					</div>
					<div className="col-md-6 footer-right">
						<div className="row">
							<div className="col-md-6">
								<div className="footer-links">
									<h4>More on The Blog</h4>
										<Link to="/Aboutus" className="footer-link">About MNTN</Link>
										<Link to="/" className="footer-link">Contributors & Writers</Link>
										<Link to="/" className="footer-link">Write For Us</Link>
										<Link to="/contact" className="footer-link">Contact Us</Link>
										<Link to="/" className="footer-link">Privacy Policy</Link>
								</div>
							</div>
							<div className="col-md-6">
								<div className="footer-links 02">
									<h4>More on MNTN</h4>
										<Link to="/" className="footer-link">The Team</Link>
										<Link to="/" className="footer-link">Jobs</Link>
										<Link to="/" className="footer-link">Press</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
    );
};

export default Footer;