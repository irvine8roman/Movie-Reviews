import ReviewForm from "./ReviewForm";

function Movie() {
  return (
    <div className="col-6 mt-3">
      <div className="movie-header">
        <img
          src="https://m.media-amazon.com/images/I/81eqQvveI6L._AC_SY679_.jpg"
          alt="Movie Poster"
        />
      </div>
      <h3 className="text-nowrap mt-1">Lord of the Rings: The Two Towers</h3>
    </div>
  );
}

export default Movie;
