import { buildSchema } from "graphql";

const schema = buildSchema(
  `
    type Movie{
        id:String,
        name:String,
        genre:String,
        year:String,
        image:String,
        trailer:String,
        rating:String
    }
    
    type Query{
        selectAll:[Movie]
    }
    
    input InsertMovieInput{
        name:String,
        genre:String,
        year:String,
        image:String,
        trailer:String,
        rating:String
    }
    
    type Mutation{
        insertMovie(input:InsertMovieInput):Movie
        updateMovie(input:InsertMovieInput, id:String):Movie
    }
`
);

export default schema;
