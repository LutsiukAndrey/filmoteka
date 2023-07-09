import './Cast.scss';
import api from 'Api/Api';
import { CastItem } from 'components/CastItem/CastItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export const Cast = () => {
  const { movieId } = useParams();

  const [castDescription, setcastDescription] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const result = await api.getMoviesCast(movieId);
      setcastDescription(result.data.cast);
    };
    fetchCast();
  }, [movieId]);
  return (
    <ul className="casts">
      {castDescription.map(data => {
        return <CastItem data={data} />;
      })}
    </ul>
  );
};
