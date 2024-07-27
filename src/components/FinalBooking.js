import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatestMovie, fetchUpcommingMovie, fetchEvent, fetchbookedTickets } from '../redux/moviesSlice';

function FinalBooking(){
	const { id,type } = useParams();
	const dispatch = useDispatch();
	const movie = useSelector(state => state.movies.current);

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
			<h1 className="text-center py-4">Final Booking Details</h1>
		</>
	)
}

export default FinalBooking