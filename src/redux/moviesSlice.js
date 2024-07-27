import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLatestMovies = createAsyncThunk('movies/fetchLatestMovies', async () => {
  const response = await axios.get('http://localhost:4000/latestmovies');
  return response.data;
});

export const fetchLatestMovie = createAsyncThunk('movies/fetchLatestMovie', async (id) => {
  const response = await axios.get(`http://localhost:4000/latestmovies/${id}`);
  return response.data;
});


export const fetchUpcommingMovies = createAsyncThunk('movies/fetchUpcommingMovies', async () => {
	const response = await axios.get('http://localhost:4000/upcommingmovies');
	return response.data;
  });
  
  export const fetchUpcommingMovie = createAsyncThunk('movies/fetchUpcommingMovie', async (id) => {
	const response = await axios.get(`http://localhost:4000/upcommingmovies/${id}`);
	return response.data;
  });

  export const fetchEvents = createAsyncThunk('movies/fetchEvents', async () => {
	const response = await axios.get('http://localhost:4000/events');
	return response.data;
  });
  
  export const fetchEvent = createAsyncThunk('movies/fetchEvent', async (id) => {
	const response = await axios.get(`http://localhost:4000/events/${id}`);
	return response.data;
  });

  export const bookTickets = createAsyncThunk('movies/bookTickets', async ({id, movieId, tickets, type, time }) => {
	await axios.post('http://localhost:4000/book', {id, movieId, tickets, type , time});
	return id;
  });

  export const fetchBookedTickets = createAsyncThunk('movies/fetchBookedTickets', async (id) => {
	const response = await axios.get(`http://localhost:4000/book/${id}`);
	return response.data;
  });

const moviesSlice = createSlice({
	name: 'movies',
	initialState: {
	  latest: [],
	  upcomming: [],
	  events:[],
	  current: null,
	  currentBooked: null,
	  Booked: []
	},
	reducers: {
		setCurrentBooked(state) {			 
			state.currentBooked = null;
		},
		setBookedDetails(state) {
			state.Booked = [];
		}
	},
	extraReducers: (builder) => {
	  builder
		.addCase(fetchLatestMovies.fulfilled, (state, action) => {
		  state.latest = action.payload;
		})
		.addCase(fetchLatestMovie.fulfilled, (state, action) => {
		  state.current = action.payload;
		})
		.addCase(fetchUpcommingMovies.fulfilled, (state, action) => {
			state.upcomming = action.payload;
		})
		.addCase(fetchUpcommingMovie.fulfilled, (state, action) => {
			state.current = action.payload;
		})
		.addCase(fetchEvents.fulfilled, (state, action) => {
			state.events = action.payload;
		})
		.addCase(fetchEvent.fulfilled, (state, action) => {
			state.current = action.payload;
		})
		.addCase(bookTickets.fulfilled, (state, action) => {
			state.currentBooked = action.payload;
		})
		.addCase(fetchBookedTickets.fulfilled, (state, action) => {
			state.Booked = action.payload;
		});
	},
  });
  
  export default moviesSlice.reducer;
  export const { setCurrentBooked, setBookedDetails} = moviesSlice.actions;
