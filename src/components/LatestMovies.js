import MovieCard from "./MovieCard";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatestMovies } from '../redux/moviesSlice';

function LatestMovies() {
	const dispatch = useDispatch();
	const movies = useSelector(state => state.movies.latest);
	

	let arrayDataItems;
	if(movies){
		arrayDataItems = movies.map(list =>
			<div key={list.id} className='col-sm-3 mb-3 mb-sm-0'>
				<MovieCard list={list} />
			</div>
		);
	}

	useEffect(() => {
	  dispatch(fetchLatestMovies());
	}, [dispatch]);

	return (
		<>
			<h1 className="text-center py-4">Latest Movies</h1>
			<div className="row">
				{arrayDataItems}
			</div>
		</>
	)
}
export default LatestMovies;