import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams, useLocation, Navigate } from 'react-router-dom';

export const Movie = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    async function getMovie() {
      try {
      } catch (error) {}
    }
  });

  return (
    <ul>
      <li>movies</li>
    </ul>
  );
};
