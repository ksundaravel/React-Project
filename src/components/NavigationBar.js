import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <>
	<div className="row mt-4">
		<div className="col-md-4 offset-md-8">
			<form className="d-flex" role="search">
				<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
				<button className="btn btn-outline-success" type="submit">Search</button>
			</form>
		</div>
	</div>
	
      <nav className="navbar navbar-expand-lg bg-success my-1  fw-bold text-white">
        <div className="container-fluid">
		  <div>
            Booking Movike Tickets
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link to="/" className="nav-link active" aria-current="page">
                  Latest Movies
                </Link>
              </li>			 
			  <li className="nav-item">
                <Link to="/upcommingmovies" className="nav-link" aria-current="page">
                  Upcomming Movies
                </Link>
              </li>
			  <li className="nav-item">
                <Link to="/nearybyevents" className="nav-link" aria-current="page">
                  Nearby Events
                </Link>
              </li>		
            </ul>            
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;