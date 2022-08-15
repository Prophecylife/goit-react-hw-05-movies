import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { NotFound } from 'components/NotFound/NotFound';
import { useFetchMovies } from 'hooks/useFetchMovies';

export const Home = () => {
  const { movies, error, loading } = useFetchMovies();
  console.log(movies);
  return (
    <div>
      {loading && <Loader />}
      <MoviesList movies={movies} />
      {error && <NotFound />}
    </div>
  );
};
