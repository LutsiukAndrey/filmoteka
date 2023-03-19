import { Link } from 'react-router-dom';

export const MoviesList = ({ data }) => {
  console.log(data);
  return (
    <div className="movies">
      <ul>
        {data.map(({ original_title, id }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`}>{original_title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
