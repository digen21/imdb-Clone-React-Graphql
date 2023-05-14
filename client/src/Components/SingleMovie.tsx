interface IMovie {
  id: number;
  name: string;
  genre: string;
  year: string;
  image: string;
  rating: number;
  trailer: string;
}

const SingleMovie = ({ movie }: IMovie | any) => {
  return (
    <div className="card movie_card mt-5">
      <img src={movie.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <a href={movie.trailer}>
          <i
            className="fas fa-play play_button"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Play Trailer"
          ></i>
        </a>

        <h5 className="card-title" style={{ fontSize: "1.5rem" }}>
          {movie.name}
        </h5>
        <span className="movie_info">{movie.year}</span>
        <span className="movie_info mx-3" style={{ fontSize: ".80rem" }}>
          {movie.genre}
        </span>
        <span className="movie_info float-right text-dark">
          <i className="fas fa-star text-warning"></i> {movie.rating} / 10
        </span>
      </div>
    </div>
  );
};

export default SingleMovie;
