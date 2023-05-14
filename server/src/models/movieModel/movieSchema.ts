import { IMovie } from "@interface";
import { Schema, model } from "mongoose";

const movieSchema = new Schema<IMovie>(
  {
    name: "string",
    genre: "string",
    year: "string",
    trailer: "string",
    image: "string",
    rating: "number",
  },
  { timestamps: { createdAt: true } }
);

export default model("movies", movieSchema);
