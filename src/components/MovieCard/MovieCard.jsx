import './MovieCard.scss';
import { nanoid } from 'nanoid';
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  NavLink,
} from 'react-router-dom';
import { routes } from 'routes';

export const MovieCard = ({ movie }) => {
  const { cast, reviews, movies } = routes;
  const navigator = useNavigate();
  const { movieId } = useParams();

  const {
    poster_path,
    original_title,
    genres,
    overview,
    release_date,
    vote_average,
  } = movie;

  return (
    <>
      <div className="card">
        <button
          className="card-back-btn"
          onClick={() => {
            navigator(-1);
          }}
        >
          Go back
        </button>
        <h2 className="card-title">
          {original_title} ({new Date(release_date).getFullYear()})
        </h2>
        <div className="card-wraper">
          <div className="card-image-wraper">
            {poster_path && (
              <img
                className="card-img"
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt=""
              />
            )}
          </div>
          <div className="card-text-wraper">
            <p>User score : {vote_average}</p>
            <h2>Overviwe</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <ul>
              {genres
                ? genres.map(e => {
                    return <li key={nanoid()}>{e.name}</li>;
                  })
                : ''}
            </ul>
          </div>
        </div>
      </div>
      <div className="card-nav">
        <NavLink to={`${movies}/${movieId}/${cast}`} className="card-nav-link">
          Cast
        </NavLink>
        <NavLink
          to={`${movies}/${movieId}/${reviews}`}
          className="card-nav-link"
          id={movieId}
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};
