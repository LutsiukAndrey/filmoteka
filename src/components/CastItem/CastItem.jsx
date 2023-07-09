import './CastItem.scss';

export const CastItem = ({ data }) => {
  const { name, cast_id, profile_path } = data;
  return (
    <a
      target="_blank"
      href={`https://www.google.com/search?q=${name}`}
      rel="noreferrer"
    >
      <li key={cast_id} className="cast-item">
        {profile_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            alt={name}
            // width="150"
            className="cast-item-img"
          />
        )}
        <h3 className="cast-item-name">{name}</h3>
      </li>
    </a>
  );
};
