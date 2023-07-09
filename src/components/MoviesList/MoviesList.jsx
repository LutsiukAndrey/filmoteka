import './MoviesList.scss';

import { MoviesPreview } from './MoviesPreview/MoviesPreview';

export const MoviesList = ({ data }) => {
  return (
    <div className="movies section">
      <h2 className="movies-title">Newest</h2>
      <ul className="movies-list">
        {data.map(item => {
          return <MoviesPreview data={item} />;
        })}
      </ul>
    </div>
  );
};
