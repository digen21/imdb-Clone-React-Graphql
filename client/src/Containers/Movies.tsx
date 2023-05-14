import { useQuery } from "@apollo/client";

import SingleMovie from "../Components/SingleMovie";
import selectAllMovies from "../Graphql/selectAllMovies";

import "./Movie.css";

interface IMovie {
  id: number;
  name: string;
  genre: string;
  year: string;
  image: string;
  rating: number;
  trailer: string;
}

const Movie = () => {
  const { loading, error, data } = useQuery(selectAllMovies);

  if (loading) {
    <p>Wait a Moment! Loading Movies</p>;
  }

  if (error) {
    <p>Failed To Fetch Movies...</p>;
  }
  return (
    <div
      className="container-fluid d-flex justify-content-center flex-wrap mt-5"
      style={{ margin: "0 auto" }}
    >
      {data?.selectAll.map((movie: IMovie) => {
        return <SingleMovie movie={movie} key={movie.id} />;
      })}
    </div>
  );
};

export default Movie;
