import MovieCard from "./MovieCard";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcommingMovies } from '../redux/moviesSlice';

function UpcommingMovies() {
	const dispatch = useDispatch();
	const movies = useSelector(state => state.movies.upcomming);
	

	let arrayDataItems;
	if(movies){
		arrayDataItems = movies.map(list =>
			<div key={list.id} className='col-sm-3 mb-3 mb-sm-0'>
				<MovieCard list={list} />
			</div>
		);
	}

	useEffect(() => {
	  dispatch(fetchUpcommingMovies());
	}, [dispatch]);

	return (
		<>
			<h1 className="text-center py-4">Upcomming Movies</h1>
			<div className="row">
				{arrayDataItems}
			</div>
		</>
	)
}
export default UpcommingMovies;