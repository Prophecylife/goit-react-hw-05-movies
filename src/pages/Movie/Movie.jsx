import { useFetchMovie } from 'hooks/useFetchMovie';
import { Link, useLocation, Navigate, Outlet } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { AiFillStar } from 'react-icons/ai';
import s from './Movie.module.css';

export const Movie = () => {
  const location = useLocation();

  const { movie, loading, error } = useFetchMovie();
  const {
    id,
    title = 'Movie Title',
    name = 'Movie Title',
    vote_average = 0,
    vote_count: voted = 0,
    overview = 'Overview Text',
    genres,
    poster_path: poster,
    release_date: date = 'Release year',
  } = movie;

  const goBackLink = location?.state?.from ?? '/';
  const year = new Date(date).getFullYear();

  return (
    <>
      <div>
        <Link className={s.backButton} to={goBackLink}>
          Back to movies
        </Link>
      </div>

      {loading && <Loader />}
      {error && <Navigate to="/" replace />}
      {movie && (
        <div className={s.wrapper} key={id}>
          <img
            src={
              poster
                ? `https://image.tmdb.org/t/p/w500${poster}`
                : 'https://ih1.redbubble.net/image.1027712254.9762/fposter,small,wall_texture,product,750x1000.u2.jpg'
            }
            alt={title ? title : name}
            width="300px"
          />
          <div className={s.infoWrap}>
            <h1>{`${title || name} (${year})`}</h1>
            <p>
              <AiFillStar style={{ color: 'orange' }} />{' '}
              <span style={{ fontWeight: 'bold' }}>
                {vote_average && vote_average.toFixed(1)}
              </span>
              {` (${voted && voted})`}
            </p>
            <h2>Overview:</h2>
            <p>{overview && overview}</p>
            <h3>Genres</h3>
            <ul>
              {genres && genres.map(el => <li key={el.id}>{`${el.name}`}</li>)}
            </ul>
          </div>
        </div>
      )}
      <div className={s.links}>
        <hr />
        <Link className={s.link} to="cast">
          Cast
        </Link>
        <Link className={s.link} to="reviews">
          Reviews
        </Link>
      </div>
      <Outlet />
    </>
  );
};
