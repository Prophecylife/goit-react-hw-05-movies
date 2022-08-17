import { MoviesSearchList } from '../../components/MoviesSearchList/MoviesSearchList';
import { useFetchByQuery } from 'hooks/useFetchByQuery';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { Loader } from 'components/Loader/Loader';

export const MoviesSearch = () => {
  const { movies, isLoading, onHandleSubmit, error } = useFetchByQuery();

  return (
    <div>
      <SearchForm onSubmit={onHandleSubmit} />
      {error && <p textAlign="center">Your search failed</p>}
      {isLoading && <Loader />}
      {movies && <MoviesSearchList movies={movies} />}
    </div>
  );
};
