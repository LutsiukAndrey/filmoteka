export const CastItem = ({ data }) => {
  return (
    <ul>
      {data.map(({ name, cast_id, profile_path }) => {
        return (
          <li key={cast_id}>
            <h3>{name}</h3>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
                width="150"
              />
            ) : (
              ''
            )}
          </li>
        );
      })}
    </ul>
  );
};
