import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchLatestMovie, fetchUpcommingMovie, fetchEvent, bookTickets } from '../redux/moviesSlice';

function Booking(){
	let navigate = useNavigate();
	const { id,type } = useParams();
	const dispatch = useDispatch();
	const movie = useSelector(state => state.movies.current);
	const [tickets, setTickets] = useState(1);
	const [time, setTime] = useState("00");

	

	const handleBooking = () => {
    if (movie.availableTickets >= tickets) {
      dispatch(bookTickets({ id: movie.id, tickets, type: type, time }));     
	  navigate(`/success/${id}/${type}`);
    } else {
      alert(`Only ${movie.availableTickets} tickets are available`);
    }
  };
  
	useEffect(() => {
		if(type==="latest") { dispatch(fetchLatestMovie(id))};
		if(type==="upcomming")  dispatch(fetchUpcommingMovie(id));
		if(type==="events")  dispatch(fetchEvent(id));
	}, [dispatch, id, type]);
  
	if (!movie) {
	  return <div>Loading...</div>;
	}
  
	return (
		<>
			<h1 className="text-center py-4">Booking Movies</h1>
			<section>
				<div className="row">
					<div className="col-sm-3 mb-3 mb-sm-0">
						<img src={"/assets/"+movie.image} className="card-img-top" alt="Movies" />
					</div>
					<div className="col-sm-9 mb-3 mb-sm-0">
						<div className="row">
							<div className="col-sm-6 mb-3 mb-sm-0">
								<h3 className='text-primary'>{movie.name}</h3>
								<h5 className='text-success'>{movie.price}</h5>
							</div>
							<div className="col-sm-6 mb-3 mb-sm-0 text-end">
								<h5 className='fs-6 text-info fw-bold '>{movie.releaseDate} - {movie.duration}</h5>
							</div>
							<div className="col-sm-6 mb-3 mb-sm-0">
							
								<label>
								Number of tickets:
								<input
									type="number"
									value={tickets}
									onChange={e => setTickets(Number(e.target.value))}
									min="1"
									max={movie.availableTickets}
								/>
								</label>							
							</div>
							<div className="col-sm-6 mb-3 mb-sm-0">
							
								<label>
								Show Time:
								<select onChange={e => setTime(e.target.value)}>
									<option value="">--Select--</option>
									<option value="08 AM">08 AM</option>
									<option value="10 AM">10 AM</option>
									<option value="02 PM">02 PM</option>
									<option value="06 PM">06 PM</option>
								</select>
								
								</label>							
							</div>
							<div className="col-sm-9 mb-3 mb-sm-0">
								<button className="btn btn-primary" onClick={handleBooking}>Book Tickets</button>
							</div>							
						</div>
					</div>
					
				</div>
			</section>
		</>
	)
}
export default Booking;