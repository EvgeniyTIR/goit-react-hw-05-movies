import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { TrendingMoviesList } from 'components/TrendngMoviesList/TrendingMoviesList';
import { SearchBox } from 'components/SerchBox/SerchBox';
import * as API from '../services/API';

export const Movies = () => {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);

  const query = searchParams.get('name') ?? '';

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    API.fetchQuery(query).then(res => setSearchMovies(res.data.results));
  }, [query]);

  return (
    <>
      <main>
        <h1>Search Movies</h1>
        <SearchBox value={query} onChange={updateQueryString} />
        <TrendingMoviesList movies={searchMovies} state={{ from: location }} />
      </main>
    </>
  );
};
