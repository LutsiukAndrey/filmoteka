import { Link, useLocation } from 'react-router-dom';
import { getMoveiDetaisPage } from 'routes';

export const MoviesList = ({ data }) => {
  return (
    <div className="movies">
      <ul>
        {data.map(({ original_title, id }) => {
          return (
            <li key={id}>
              <Link to={getMoveiDetaisPage(id)}>{original_title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
