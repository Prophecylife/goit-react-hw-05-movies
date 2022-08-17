import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Movie } from '../pages/Movie/Movie';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { MoviesSearch } from '../pages/MoviesSearch/MoviesSearch';
import { NavBar } from './NavBar/NavBar';
import { NotFound } from './NotFound/NotFound';

export const App = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="/movie" element={<MoviesSearch />}></Route>
            <Route path="movie/:movieId" element={<Movie />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
