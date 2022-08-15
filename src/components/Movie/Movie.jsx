import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams, useLocation, Navigate } from 'react-router-dom';
import { getMovieDetails } from 'services/movie-service';
import { Loader } from 'components/Loader/Loader';
import { AiFillStar } from 'react-icons/ai';
import s from './Movie.module.css';

export const Movie = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();

  const {
    id,
    title,
    name,
    vote_average,
    vote_count: voted,
    overview,
    genres,
    poster_path: poster,
    release_date: date,
  } = movie;
  const year = new Date(date).getFullYear();

  useEffect(() => {
    setLoading(true);
    async function getMovie() {
      try {
        const data = await getMovieDetails(movieId);
        console.log(data);
        setMovie(data);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getMovie();
  }, [movieId]);

  const goBackLink = location?.state?.from ?? '/';

  //   const rating = vote_average.toFixed(2);

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
                ? `https://image.tmdb.org/t/p/w300${poster}`
                : 'https://ih1.redbubble.net/image.1027712254.9762/fposter,small,wall_texture,product,750x1000.u2.jpg'
            }
            alt={title || name}
            width="300px"
          />
          <div className={s.infoWrap}>
            <h1>{`${title || name} (${year})`}</h1>
            <p>
              <AiFillStar style={{ color: 'orange' }} />{' '}
              <span style={{ fontWeight: 'bold' }}>
                {vote_average && vote_average.toFixed(1)}
              </span>
              {` (${voted})`}
            </p>
            <h2>Overview:</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>
              {genres && genres.map(el => <li key={el.id}>{`${el.name}`}</li>)}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
