import { SearchBox } from '../components/SerchBox/SerchBox';

import { Link, Outlet } from 'react-router-dom';

export const Movies = () => {
  return (
    <main>
      <h1>Search Movies</h1>
      <SearchBox />
      <ul>
        <li>
          <Link to="mission">Read about our mission</Link>
        </li>
        <li>
          <Link to="team">Get to know the team</Link>
        </li>
        <li>
          <Link to="reviews">Go through the reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};
