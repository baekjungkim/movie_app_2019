import React from "react";
import PropTypes from "prop-types";

function Movies({ id, year, title, summary, poster }) {
  return (
    <div>
      <h1>{id}</h1>
      <h1>{year}</h1>
      <h1>{title}</h1>
      <h1>{summary}</h1>
      <img src={poster} alt={title} />>
    </div>
  );
}

Movies.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default Movies;
