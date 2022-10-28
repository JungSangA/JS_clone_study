import PropTypes from "prop-types";

function Movie({ title, medium_cover_image, summary, genres }) {
  console.log(summary);
  return (
    <div>
      <h2>{title}</h2>
      <img src={medium_cover_image} alt={title} />
      <p>{summary}</p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
    </div>
  );
}

Movie.propTypes = {
  medium_cover_image: PropTypes.isRequired,
  title: PropTypes.isRequired,
  summary: PropTypes.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
