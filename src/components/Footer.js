function Footer() {
	return (
		<>
			<footer className="footer bg-success py-3 mt-2 text-white"> 
				<div className="container"> 
					<div className="row"> 
						<div className="col-md-3"> 
							<h2>Movie Tickets</h2> 
						</div> 
						<div className="col-md-3"> 
							<h5>About Us</h5> 
							<p> 
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
						</p> 
						</div> 
						<div className="col-md-3"> 
							<h5>Contact Us</h5> 
							<ul className="list-unstyled"> 
								<li>Email: info@example.com</li> 
								<li>Phone: +1233567890</li> 
								<li>Address: 123 Street, City, Country</li> 
							</ul> 
						</div> 
						<div className="col-md-3"> 
							<h5>Follow Us</h5> 
							<ul className="list-inline footer-links"> 
								<li className="list-inline-item"> 
									<a> 
										<i className="fab fa-facebook"></i> 
									</a> 
								</li> 
								<li className="list-inline-item"> 
									<a> 
										<i className="fab fa-twitter"></i> 
									</a> 
								</li> 
								<li className="list-inline-item"> 
									<a> 
										<i className="fab fa-instagram"></i> 
									</a> 
								</li> 
								<li className="list-inline-item"> 
									<a> 
										<i className="fab fa-linkedin"></i> 
									</a> 
								</li> 
							</ul> 
						</div> 
					</div> 
					<hr /> 
					<div className="row"> 
						<div className="col-md-6"> 
							<p>© 2024 Your Website. All rights reserved.</p> 
						</div> 
						<div className="col-md-6 text-end"> 
							<ul className="list-inline footer-links"> 
								<li className="list-inline-item"> 
									<a>Privacy Policy</a> 
								</li> 
								<li className="list-inline-item"> 
									<a>Terms of Service</a> 
								</li> 
								<li className="list-inline-item"> 
									<a>Sitemap</a> 
								</li> 
							</ul> 
						</div> 
					</div> 
				</div> 
    		</footer> 
		</>
	)
}
export default Footer;