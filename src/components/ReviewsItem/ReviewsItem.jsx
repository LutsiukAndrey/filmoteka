import { nanoid } from 'nanoid';
export const ReviewsItem = ({ data }) => {
  return (
    <ul>
      {data.length > 0
        ? data.map(({ author, content, author_details }) => {
            return (
              <li key={nanoid()}>
                {author_details.avatar_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${author_details.avatar_path}`}
                    alt={author}
                    width="150"
                  />
                ) : (
                  ''
                )}
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })
        : "We dont't have any reviews for this movie"}
    </ul>
  );
};
