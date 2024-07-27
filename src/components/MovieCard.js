import { Link } from 'react-router-dom';

function MovieCard(props) {
	let { id, image,name, details, } = props.list;
	return (
		<>
			<div className="card">
				<img src={"./assets/"+image} className="card-img-top" alt="Movies" />
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<p className="card-text">{details}</p>					
				</div>
				<div className="card-footer">
					<Link to={`/details/${id}`}><button className="btn btn-warning">Details</button>&nbsp;</Link>
					
					<Link to={`/book/${id}`}><button className="btn btn-success">Book</button>&nbsp;</Link>
				</div>
			</div>
		</>
	)
}
export default MovieCard