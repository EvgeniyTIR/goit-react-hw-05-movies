import { useState, useEffect, lazy, Suspense } from 'react';

import { useLocation } from 'react-router-dom';
import * as API from '../services/API';

const TrendingMoviesList = lazy(() =>
  import('components/TrendngMoviesList/TrendingMoviesList')
);

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.getTrendingMovies().then(movies => {
      setMovies([...movies.results]);
    });
  }, []);

  const location = useLocation();

  return (
    <main>
      <h1>Tranding today</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <TrendingMoviesList movies={movies} state={{ from: location }} />
      </Suspense>
    </main>
  );
};

export default Home;
