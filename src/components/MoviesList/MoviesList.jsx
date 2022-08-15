import { Link, useLocation } from 'react-router-dom';
import './MoviesList.css';
import { TbMovie } from 'react-icons/tb';
// import { getGenresList } from '../../services/movie-service';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <h1>
        Trending <TbMovie /> today
      </h1>
      {/* {console.log(getGenresList())} */}
      <ul>
        {movies.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`movie/${id}`} state={{ from: location }}>
              <TbMovie />
              {title || name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
