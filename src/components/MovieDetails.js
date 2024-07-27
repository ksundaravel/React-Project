import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatestMovie, fetchUpcommingMovie, fetchEvent } from '../redux/moviesSlice';

function MovieDetails(){

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
			<h1 className="text-center py-4">Movies Details</h1>
			<section>
				<div className="row">
					<div className="col-sm-3 mb-3 mb-sm-0">
						<img src={"/assets/"+movie.image} className="card-img-top" alt="Movies" />
					</div>
					<div className="col-sm-9 mb-3 mb-sm-0">
						<div className="row">
							<div className="col-sm-6 mb-3 mb-sm-0">
								<h3 className='text-primary'>{movie.name}</h3>
							</div>
							<div className="col-sm-6 mb-3 mb-sm-0 text-end">
								<h5 className='fs-6 text-info fw-bold '>{movie.releaseDate} - {movie.duration}</h5>
							</div>
							<div className="col-sm-12 mb-3 mb-sm-0">
								<p>{movie.details}</p>
								<p className='fst-italic fs-6 text-warning fw-bold'>{movie.Ratings}</p>
							</div>
							
							<div className="col-sm-12 mb-3 mb-sm-0">
								<Link to={`/book/${movie.id}/${type}`}><button className="btn btn-success">Book</button></Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
export default MovieDetails;