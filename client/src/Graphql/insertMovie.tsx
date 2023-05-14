import { gql } from "@apollo/client";

const insertMovie = gql`
  mutation insertMovie($input: InsertMovieInput) {
    insertMovie(input: $input) {
      id
      name
      year
      genre
      rating
      image
      trailer
    }
  }
`;
export default insertMovie;
