import { nanoid } from 'nanoid';
import './MoviesPreview.scss';
import notFound from './notFound.png';

import { Link } from 'react-router-dom';

import { getMoveiDetaisPage } from 'routes';

export const MoviesPreview = ({ data }) => {
  const { original_title, id, poster_path, release_date, vote_average } = data;
  return (
    <li key={nanoid()} className="preview">
      <Link to={getMoveiDetaisPage(id)}>
        <img
          src={
            (poster_path &&
              `https://image.tmdb.org/t/p/w500/${poster_path} `) ||
            notFound
          }
          alt=""
          className="preview-img"
        />
      </Link>
      <p className="preview-title">{original_title}</p>
      <div className="preview-bottom">
        <p className="preview-date">{release_date.split('-')[0]}</p>

        <p className="preview-rating">
          <span>Rating: </span>
          {vote_average}
        </p>
      </div>
    </li>
  );
};
