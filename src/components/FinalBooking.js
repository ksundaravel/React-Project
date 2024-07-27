import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatestMovie, fetchUpcommingMovie, fetchEvent, fetchBookedTickets, setCurrentBooked,setBookedDetails } from '../redux/moviesSlice';

function FinalBooking(){
	let navigate = useNavigate();
	const { bookedid } = useParams();	
	const bookedmovie = useSelector(state => state.movies.Booked);
	const dispatch = useDispatch();
	const movie = useSelector(state => state.movies.current);


	dispatch(setCurrentBooked());

	const clearBookedDetails = () => {
		dispatch(setBookedDetails());
		navigate('/');
	};

	useEffect(() => {
		dispatch(fetchBookedTickets(bookedid))
	}, [dispatch, bookedid]);


	useEffect(() => {
		if(bookedmovie.type==="latest") { dispatch(fetchLatestMovie(bookedmovie.movieId))};
		if(bookedmovie.type==="upcomming")  dispatch(fetchUpcommingMovie(bookedmovie.movieId));
		if(bookedmovie.type==="events")  dispatch(fetchEvent(bookedmovie.movieId));
	}, [dispatch, bookedmovie.movieId, bookedmovie.type]);

  
	if (!movie || !bookedmovie) {
	  return <div>Loading...</div>;
	}

	return (
		<>
			<h1 className="text-center py-4">Ticket Details</h1>
			<section>
				<div className="row">
					<div class="alert alert-success fw-bold" role="alert">
						Ticket has been booked successfully.
					</div>
					<div className="col-sm-3 mb-3 mb-sm-0">
						<img src={"/assets/code.png"} className="card-img-top" alt="Movies" />
					</div>					
					<div className="col-sm-9 mb-3 mb-sm-0">
						<div className="row">
							<div className="col-sm-6 mb-3 mb-sm-0">
								<h3 className='text-primary'>{movie.name}</h3>
							</div>
							<div className="col-sm-6 mb-3 mb-sm-0 text-end">
								<h5 className='fs-6 text-info fw-bold '>{movie.releaseDate} - {movie.duration}</h5>
							</div>
							<div className="col-sm-6 mb-3 mb-sm-0">
								<p>Booked Id:<h5 className='fs-6 text-info fw-bold '>{bookedmovie.id} </h5></p>
								<p>Booked Timing:<h5 className='fs-6 text-info fw-bold '>{bookedmovie.time}</h5></p>
								<p>Ticket Count:<h5 className='fs-6 text-info fw-bold '>{bookedmovie.tickets}</h5></p>			
							</div>
							<div className="col-sm-9 mb-3">
								<button className="btn btn-danger" onClick={clearBookedDetails}>Go to Home to Book More</button>
							</div>							
						</div>
					</div>
					
				</div>
			</section>
		</>
	)
}

export default FinalBooking