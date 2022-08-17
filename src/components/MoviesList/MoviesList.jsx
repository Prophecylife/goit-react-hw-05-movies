import { Link, useLocation } from 'react-router-dom';
import './MoviesList.css';
import { TbMovie } from 'react-icons/tb';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log(location);
  return (
    <>
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
