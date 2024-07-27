import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import LatestMovies from './components/LatestMovies';
import NearByEvents from './components/NearByEvents';
import UpcommingMovies from './components/UpcommingMovies';
import Carousel from './components/Carousel';
import MovieDetails from './components/MovieDetails';
import Booking from './components/Booking';
import Footer from './components/Footer';
import FinalBooking from './components/FinalBooking';

function App() {
  return (
    <section className="container"> 
        <NavigationBar />
		<Carousel />
        <section className="row justify-content-center">
          <section className="col">
            <Routes>
              <Route
                path="/"
                element={<LatestMovies />}
              />
			  <Route
                path="/upcommingmovies"
                element={<UpcommingMovies />}
              />
			  <Route
                path="/nearybyevents"
                element={<NearByEvents />}
              />	
			   <Route path="/details/:id/:type" element={<MovieDetails />} />
			   <Route path="/book/:id/:type" element={<Booking />} />
			   <Route path="/success/:bookedid" element={<FinalBooking />} />		             
              {/* <Route path="*" element={<PageNotFound />} /> */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </section>
        </section>
		<Footer />
    </section>
  );
}

export default App;
