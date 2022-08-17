import { Loader } from 'components/Loader/Loader';
import { useFetchCast } from 'hooks/useFetchCast';

export const Cast = () => {
  const { cast, error, loading } = useFetchCast();
  return (
    <>
      {error && <p>There is no info about cast of this movie</p>}
      {loading && <Loader />}
      <div>
        {cast.length > 0 ? (
          <ul>
            {cast.slice(0, 10).map(el => (
              <li key={el.id}>
                <div>
                  <img
                    width={200}
                    src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                    alt={el.name}
                  />
                  <p>{el.name}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>There is no info about cast of this movie</p>
        )}
      </div>
    </>
  );
};
