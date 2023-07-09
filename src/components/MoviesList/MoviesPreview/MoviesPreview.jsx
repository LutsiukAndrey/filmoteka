import './MoviesPreview.scss';

import { Link } from 'react-router-dom';

import { getMoveiDetaisPage } from 'routes';

export const MoviesPreview = ({ data }) => {
  console.log(data);

  const { original_title, id, poster_path, release_date, vote_average } = data;
  return (
    <li key={id} className="preview">
      <Link to={getMoveiDetaisPage(id)}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
          className="preview-img"
        />
        <p className="preview-title">{original_title}</p>
      </Link>
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
