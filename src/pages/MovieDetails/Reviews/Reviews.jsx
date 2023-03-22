import api from 'Api/Api';
import { ReviewsItem } from 'components/ReviewsItem/ReviewsItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export const Reviews = () => {
  const { movieId } = useParams();

  console.log(movieId);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const result = await api.getMoviesReviews(movieId);
      setReviews(result.data.results);
    };
    fetchReviews();
  }, []);
  console.log(reviews);
  return <ReviewsItem data={reviews} />;
};
