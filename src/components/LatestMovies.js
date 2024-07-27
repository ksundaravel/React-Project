import MovieCard from "./MovieCard";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatestMovies } from '../redux/moviesSlice';

function LatestMovies() {
	const dispatch = useDispatch();
	const movies = useSelector(state => state.movies.latest);
	

	let arrayDataItems;

	useEffect(() => {
	  dispatch(fetchLatestMovies());
	}, [dispatch]);

	if (!movies) {
		return <div>Loading...</div>;
	}

	if(movies){
		arrayDataItems = movies.map(list =>
			<div key={list.id} className='col-sm-3 mb-3 mb-sm-0'>
				<MovieCard list={list} type="latest" />
			</div>
		);
	}

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