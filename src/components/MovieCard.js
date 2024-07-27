import { Link } from 'react-router-dom';

function MovieCard(props) {
	
	let { id, image,name, details, } = props.list;
	let { type } = props;
	return (
		<>
			<div className="card">
				<img src={"/assets/"+image} className="card-img-top" alt="Movies" />
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<p className="card-text">{details}</p>					
				</div>
				<div className="card-footer">
					<Link to={`/details/${id}/${type}`}><button className="btn btn-warning me-1">Details</button></Link>
					
					<Link to={`/book/${id}/${type}`}><button className="btn btn-success">Book</button></Link>
				</div>
			</div>
		</>
	)
}
export default MovieCard