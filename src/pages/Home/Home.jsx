import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { NotFound } from 'components/NotFound/NotFound';
import { useFetchMovies } from 'hooks/useFetchMovies';
import { TbMovie } from 'react-icons/tb';

export const Home = () => {
  const { movies, error, loading } = useFetchMovies();
  console.log(movies);
  return (
    <div>
      {loading && <Loader />}
      <h1>
        Trending <TbMovie /> today
      </h1>
      <MoviesList movies={movies} />
      {error && <NotFound />}
    </div>
  );
};
