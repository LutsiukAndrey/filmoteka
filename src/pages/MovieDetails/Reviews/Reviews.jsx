import api from 'Api/Api';
import { ReviewsItem } from 'components/ReviewsItem/ReviewsItem';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const result = await api.getMoviesReviews(movieId);
      setReviews(result.data.results);
    };
    fetchReviews();
  }, [movieId]);
  console.log(reviews);
  return (
    <ul>
      {reviews.length > 0
        ? reviews.map(reviews => <ReviewsItem data={reviews} key={nanoid()} />)
        : "We dont't have any reviews for this movie"}
    </ul>
  );
};
