import React, { useState } from "react";

import MovieList from "./components/MovieList";
import ReviewList from "./components/ReviewList";
import ReviewForm from "./components/ReviewForm";
import ReviewItem from "./components/ReviewItem";

const DUMMY_REVIEWS = [
  {
    id: "e1",
    username: "Irvine",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: "★★★★★",
  },
  {
    id: "e2",
    username: "Emily",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: "★★★★★",
  },
  {
    id: "e3",
    username: "Kano",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: "★★★★★",
  },
  {
    id: "e4",
    username: "Lexi",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: "★★★★★",
  },
];

function App() {
  const [reviews, setReviews] = useState(DUMMY_REVIEWS);

  const addReviewHandler = (review) => {
    setReviews((prevReviews) => {
      return [review, ...prevReviews];
    });
  };

  const saveReviewDataHandler = (enteredReviewData) => {
    const reviewData = {
      ...enteredReviewData,
      id: Math.random().toString(),
    };

    addReviewHandler(reviewData);
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <MovieList />
        <ReviewList items={reviews} />
      </div>
      <ReviewForm
        // Testing Code
        onSaveReviewData={saveReviewDataHandler}
        // End Testing Code/
      />
    </div>
  );
}

export default App;
