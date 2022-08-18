import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Reviews } from './components/Reviews/Reviews';
// import { MoviesSearch } from './pages/MoviesSearch/MoviesSearch';
import { NavBar } from './components/NavBar/NavBar';
// import NotFound from './components/NotFound/NotFound';

const Home = lazy(() => import('./pages/Home/Home'));
const Movie = lazy(() => import('./pages/Movie/Movie'));
const Cast = lazy(() => import('./pages/Cast/Cast'));
const MoviesSearch = lazy(() => import('./pages/MoviesSearch/MoviesSearch'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews'));

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
