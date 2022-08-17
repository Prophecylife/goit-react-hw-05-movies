import { FcRating } from 'react-icons/fc';
import s from './Reviews.module.css';
import { Loader } from 'components/Loader/Loader';
import { useFetchReviews } from 'hooks/useFetchReviews';

export const Reviews = () => {
  const { reviews, error, loading } = useFetchReviews();
  return (
    <>
      {error && <p>There are no reviews available</p>}
      {loading && <Loader />}
      <div>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(el => (
              <li key={el.id}>
                <h5>
                  {el.author}
                  {el.author_details.rating ? (
                    <span className={s.rating}>
                      <FcRating size={17} /> {el.author_details.rating}
                    </span>
                  ) : null}
                </h5>
                <p>{el.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>There are no reviews available</p>
        )}
      </div>
    </>
  );
};
