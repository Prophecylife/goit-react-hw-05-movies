import { Routes, Route } from 'react-router-dom';
import { Home } from './Home/Home';
// import { Loader } from './Loader/Loader';
import { Movie } from './Movie/Movie';
import { MovieSearch } from './MovieSearch/MovieSearch';
import { NavBar } from './NavBar/NavBar';
import { NotFound } from './NotFound/NotFound';

export const App = () => {
  return (
    <>
      {/* <Loader /> */}
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/movie" element={<MovieSearch />} />
          <Route path="movie/:movieId" element={<Movie />} />
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
};
