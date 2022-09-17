import { useState, useEffect } from 'react';
import { TrendingMoviesList } from '../components/TrendngMoviesList/TrendingMoviesList';
import { useLocation } from 'react-router-dom';
import * as API from '../services/API';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.getTrendingMovies().then(movies => {
      setMovies([...movies.results]);
    });
  }, []);

  const location = useLocation();

  return (
    <main>
      <h1>Tranding Movies</h1>
      <TrendingMoviesList movies={movies} state={{ from: location }} />
    </main>
  );
};
