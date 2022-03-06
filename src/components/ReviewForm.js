import React, { useState } from "react";

import Stars from "./Stars";

function ReviewForm(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredReview, setEnteredReview] = useState("");

  const [enteredRating, setEnteredRating] = useState("");

  const dropdownChangeHandler = function (event) {
    setEnteredRating(event.target.value);
  };

  const usernameChangeHandler = function (event) {
    // console.log(event.target.value);
    setEnteredUsername(event.target.value);
  };
  const reviewChangeHandler = function (event) {
    // console.log(event.target.value);
    setEnteredReview(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const reviewData = {
      username: enteredUsername,
      review: enteredReview,
      rating: enteredRating,
    };

    props.onSaveReviewData(reviewData);
    setEnteredUsername("");
    setEnteredReview("");
    setEnteredRating("★★★★★");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label className="form-label">Username</label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
        </div>

        <label className="form-label">Review</label>
        <div className="input-group">
          <textarea
            className="input-group"
            id="review"
            rows="3"
            value={enteredReview}
            onChange={reviewChangeHandler}
          ></textarea>
        </div>
        <Stars passedFromForm={dropdownChangeHandler} />
        <div className="input-group d-grip">
          <button className="input-group btn btn-primary mt-3" type="submit">
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
