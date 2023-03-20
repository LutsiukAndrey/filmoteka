import { nanoid } from 'nanoid';
import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const MovieCard = ({ movie }) => {
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
    <div>
      <button>Go back</button>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
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
      <>
        <Link to={`/movies/${movieId}/cast`}> Cast</Link>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </>
      <Outlet />
    </div>
  );
};
