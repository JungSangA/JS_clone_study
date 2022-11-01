import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function DetailInfo({ id, title_long, description_full, img, genres }) {
  return (
    <div>
      <h1>
        <Link to="/">Home으로 돌아가기</Link>
      </h1>
      <h1>{title_long}</h1>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <img src={img} />
      <h2>{description_full}</h2>
    </div>
  );
}

export default DetailInfo;
