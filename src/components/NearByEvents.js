import MovieCard from "./MovieCard";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../redux/moviesSlice';

function UpcommingMovies() {
	const dispatch = useDispatch();
	const events = useSelector(state => state.movies.events);


	let arrayDataItems;
	if(events){
		arrayDataItems = events.map(list =>
			<div key={list.id} className='col-sm-3 mb-3 mb-sm-0'>
				<MovieCard list={list} />
			</div>
		);
	}

	useEffect(() => {
	  dispatch(fetchEvents());
	}, [dispatch]);

	return (
		<>
			<h1 className="text-center py-4">Near By Events</h1>
			<div className="row">
				{arrayDataItems}
			</div>
		</>
	)
}
export default UpcommingMovies;