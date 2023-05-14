import { gql } from "@apollo/client";

const selectAllMovies = gql`
  query {
    selectAll {
      id
      name
      genre
      year
      image
      trailer
      rating
    }
  }
`;
export default selectAllMovies;
