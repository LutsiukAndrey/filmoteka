import { nanoid } from 'nanoid';
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { routes } from 'routes';
import { MovieVraper } from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
  const { cast, reviews, movies } = routes;
  const navigator = useNavigate();
  const { movieId } = useParams();
  // const addToFavorit = () => {
  //   console.log(movieId);
  //   const favoritrMovie =
  //   localStorage.setItem('favoritMovie', [movieId]);
  // };
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
      <button
        onClick={() => {
          navigator(-1);
        }}
      >
        Go back
      </button>
      {/* <button onClick={addToFavorit}>Add to favorit</button> */}
      <MovieVraper>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
          width="350"
        />

        <h2>
          {original_title} ({new Date(release_date).getFullYear()})
        </h2>
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
      </MovieVraper>
      <>
        <Link to={`${movies}/${movieId}/${cast}`}>Cast</Link>
        <Link to={`${movies}/${movieId}/${reviews}`} id={movieId}>
          Reviews
        </Link>
        <Outlet />
      </>
    </>
  );
};
