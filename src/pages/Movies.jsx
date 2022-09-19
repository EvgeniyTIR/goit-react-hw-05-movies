import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import { SearchBox } from 'components/SerchBox/SerchBox';
import * as API from '../services/API';

const TrendingMoviesList = lazy(() =>
  import('components/TrendngMoviesList/TrendingMoviesList')
);

const Movies = () => {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);

  const query = searchParams.get('name') ?? '';

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    API.fetchQuery(query).then(res => setSearchMovies(res.data.results));
  }, [query]);

  return (
    <>
      <main>
        <h1>Search Movies</h1>
        <SearchBox value={query} onChange={updateQueryString} />
        <Suspense fallback={<div>Loading...</div>}>
          <TrendingMoviesList
            movies={searchMovies}
            state={{ from: location }}
          />
        </Suspense>
      </main>
    </>
  );
};

export default Movies;
