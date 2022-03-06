import ReviewItem from "./ReviewItem";

function ReviewList(props) {
  return (
    <div className="col-6 mt-3">
      <h3>Reviews!</h3>
      {props.items.map((review) => (
        <ReviewItem
          username={review.username}
          rating={review.rating}
          review={review.review}
        />
      ))}
    </div>
  );
}

export default ReviewList;
