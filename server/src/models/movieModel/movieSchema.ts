import { IMovie } from "@interface";
import { Schema, model } from "mongoose";

const movieSchema = new Schema<IMovie>(
  {
    name: {
      type: "string",
      unique: true,
      $regex: /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/,
    },
    genre: "string",
    year: "string",
    trailer: {
      type: "string",
      $regex:
        /^(http(s)??\:\/\/)?(www\.)?((youtube\.com\/watch\?v=)|(youtu.be\/))([a-zA-Z0-9\-_])+$/,
    },
    image: "string",
    rating: "number",
  },
  { timestamps: { createdAt: true } }
);

export default model("movies", movieSchema);
