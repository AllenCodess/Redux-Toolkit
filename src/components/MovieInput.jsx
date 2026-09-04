import { useDispatch } from "react-redux";
import { addMovie } from "../slices/movieSlice";
import { useState } from "react";

export const MovieInput = () => {
  const dispatch = useDispatch();
  const [movieName, setMovieName] = useState("");

  const handleChange = (e) => {
    setMovieName(e.target.value);
  };

  const handleAddMovie = () => {
    dispatch(addMovie(movieName));
    setMovieName("");
  };

  return (
    <>
      <input type="text" value={movieName} onChange={handleChange} />
      <button type="submit" onClick={handleAddMovie}>
        Submit
      </button>
    </>
  );
};
