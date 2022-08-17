import { Link, useLocation } from 'react-router-dom';
import '../MoviesList/MoviesList.css';
import { TbMovie } from 'react-icons/tb';

export const MoviesSearchList = ({ movies }) => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <ul>
        {movies.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              <TbMovie />
              {title || name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
