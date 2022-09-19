import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BackLink } from '../components/BackLink/BackLink';
import { Box } from 'components/Box';
import * as API from '../services/API';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    API.getMovieDetails(movieId).then(setMovieData);
  }, [movieId]);

  const {
    poster_path,
    genres,
    title,
    release_date,
    popularity,
    overview,
    tagline,
  } = movieData;
  const placeholderImg = 'https://via.placeholder.com/300x450';
  const movieImg = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`;
  return (
    <main>
      <>
        <BackLink to={backLinkHref}>Back to movie list</BackLink>
        <Box display="flex" gridGap={3}>
          <img
            src={poster_path ? movieImg : placeholderImg}
            width="300"
            alt={tagline}
          />
          <div>
            <h1>
              {title} ({String(release_date).slice(0, 4)})
            </h1>
            <h2>Popularity: {Math.round(popularity)} </h2>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <Box display="flex" gridGap={3}>
              {genres?.map(genre => {
                return <p key={genre.id}>{genre.name}</p>;
              })}
            </Box>
          </div>
        </Box>
        <hr />
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLinkHref }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </Link>
          </li>
        </ul>
        <hr />
      </>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
