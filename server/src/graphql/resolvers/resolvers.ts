import { IMovie } from "@interface";
import { MovieModel } from "@models";
import { Request, Response } from "express";

export default {
  selectAll: async () => {
    const response = await MovieModel.find({});
    if (!response) {
      throw new Error("Error In Fetch...");
    }
    return response;
  },

  insertMovie: async (
    { input }: { input: IMovie },
    context: { req: Request; res: Response }
  ) => {
    const { name, genre, image, year, trailer, rating } = input;

    let response = new MovieModel({
      name: name,
      genre: genre,
      year: year,
      rating: rating,
      trailer: trailer,
      image: image,
    });

    const res: IMovie = await response.save();
    if (!res) {
      context.res.status(400).send({
        message: "Failed To Create Movie...",
      });
    }

    return {
      id: res.id,
      name: res.name,
      genre: res.genre,
      rating: res.rating,
      trailer: res.trailer,
      image: res.image,
      year: res.year,
    };
  },

  updateMovie: async (
    { input, id }: { input: IMovie; id: string },
    context: { req: Request; res: Response }
  ) => {
    const { name, genre, image, year, trailer, rating } = input;

    const response = await MovieModel.findByIdAndUpdate(id, {
      name: name,
      genre: genre,
      image: image,
      year: year,
      trailer: trailer,
      rating: rating,
    });
    if (!response) {
      context.res.status(400).send({
        message: "Failed To Update Movie...",
      });
    }

    return response;
  },
};
