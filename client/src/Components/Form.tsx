import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";

import "./style.css";
import insertMovie from "../Graphql/insertMovie";
import selectAllMovies from "../Graphql/selectAllMovies";

const AddMovie = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [newMovie, { loading, error }] = useMutation(insertMovie);

  if (loading) {
    <p className="text-warning">Wait a Moment! Fetching Movies...</p>;
  }

  if (error) {
    <h1 className="text-danger">Error Occurred...</h1>;
  }

  const onSubmit = async (e: any) => {
    await newMovie({
      variables: {
        input: {
          name: e.name,
          image: e.image,
          year: e.year,
          rating: e.rating,
          genre: e.genre,
          trailer: e.trailer,
        },
      },
      refetchQueries: [
        {
          query: selectAllMovies,
        },
      ],
    });
    alert("Movie Added...");
  };

  return (
    <div className="container-fluid p-5 mt-5 mb-5" id="add-movie">
      <form action="" className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="text"
            {...register("image", { required: true })}
            className="form-control p-4 w-50 shadow-none text-md-left font-weight-normal"
            id="image"
            name={"image"}
            placeholder="Enter Movie Image Link"
          />
        </div>
        {errors.image && (
          <p className="text-danger text-center">Image Link Must Required...</p>
        )}
        <div className="form-group">
          <input
            type="text"
            {...register("name", { required: true })}
            className="form-control p-4 w-50 shadow-none px-2 text-md-left font-weight-normal mt-3"
            id="name"
            name={"name"}
            placeholder="Enter Movie Name"
          />
        </div>
        {errors.name && (
          <p className="text-danger text-center">Movie Name Must Required...</p>
        )}
        <div className="form-group">
          <input
            type="text"
            {...register("year", { required: true })}
            className="form-control p-4 w-50 shadow-none px-2 text-md-left font-weight-normal mt-3"
            id="year"
            name={"year"}
            placeholder="Enter Movie Year"
          />
        </div>
        {errors.year && (
          <p className="text-danger text-center">Movie Year Must Required...</p>
        )}
        <div className="form-group">
          <input
            type="text"
            {...register("genre", { required: true })}
            className="form-control p-4 w-50 shadow-none px-2 text-md-left font-weight-normal mt-3"
            id="Genre"
            name={"genre"}
            placeholder="Enter Movie Genre"
          />
        </div>
        {errors.genre && (
          <p className="text-danger text-center">
            Movie Genre Must Required...
          </p>
        )}
        <div className="form-group">
          <input
            type="text"
            {...register("rating", { required: true })}
            className="form-control p-4 w-50 shadow-none px-2 text-md-left font-weight-normal mt-3"
            id="rating"
            name={"rating"}
            placeholder="Enter Movie rating"
          />
        </div>
        {errors.rating && (
          <p className="text-danger text-center">
            Movie Rating Must Required...
          </p>
        )}
        <div className="form-group">
          <input
            type="text"
            {...register("trailer", { required: true })}
            className="form-control p-4 w-50 shadow-none px-2 text-md-left font-weight-norma mt-3"
            id="trailer"
            name="trailer"
            placeholder="Enter Movie Trailer Link"
          />
        </div>
        {errors.trailer && (
          <p className="text-danger text-center">
            Trailer Link Must Required / Must Be The Youtube Link...
          </p>
        )}
        <div className="form-group">
          <button
            className="btn btn-primary shadow-none w-50 text-md-center font-weight-normal mt-3"
            type="submit"
          >
            Add New Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
