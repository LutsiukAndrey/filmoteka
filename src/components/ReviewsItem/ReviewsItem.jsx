import './ReviewsItem.scss';

export const ReviewsItem = ({ data }) => {
  const { author, content, author_details } = data;
  return (
    <li className="review-item">
      <h3 className="review-item-author">{author}</h3>
      <div className="review-item-content">
        {author_details.avatar_path && (
          <img
            className="review-item-content-img"
            src={`https://image.tmdb.org/t/p/w500/${author_details.avatar_path}`}
            alt={author}
          />
        )}
        <p>{content}</p>
      </div>
    </li>
  );
};
