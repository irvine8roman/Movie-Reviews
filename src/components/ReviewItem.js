function ReviewItem(props) {
  return (
    <div>
      <p>
        {props.username} --{props.rating}
      </p>
      <p>{props.review}</p>
    </div>
  );
}

export default ReviewItem;
