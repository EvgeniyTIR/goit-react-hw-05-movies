import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from '../../services/API';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    API.fetchCast(movieId).then(setCast);
  }, [movieId]);
  return (
    <div>
      {cast?.length > 0 ? (
        <>
          <h2>Cast</h2>
          <ul>
            {cast?.map(r => {
              const { id, profile_path, name, character } = r;
              const placeholderImg = 'https://via.placeholder.com/140x175';
              const actorImg = `https://www.themoviedb.org/t/p/w138_and_h175_face/${profile_path}`;

              return (
                <li key={id}>
                  <img
                    src={profile_path ? actorImg : placeholderImg}
                    width="138"
                    height="175"
                    alt={name}
                  />
                  <p>Name: {name}</p>

                  <p>Character: {character}</p>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p>Cast not found.</p>
      )}
    </div>
  );
};

export default Cast;
