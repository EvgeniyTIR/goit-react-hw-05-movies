import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
  color: #000;
  :hover,
  :focus {
    color: orangered;
  }
`;

export const TrendingMoviesList = ({ movies, state }) => {
  return (
    <ul>
      {movies.map(movie => {
        const { title, id } = movie;
        return (
          <li key={id}>
            <StyledLink to={`/movies/${id}`} state={state}>
              {title}
            </StyledLink>
          </li>
        );
      })}
    </ul>
  );
};

TrendingMoviesList.propType = {
  state: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
