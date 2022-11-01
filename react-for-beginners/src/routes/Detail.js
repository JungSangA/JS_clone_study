import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DetailInfo from "../components/DetailInfo";

// https://yts.mx/api/v2/movie_details.json?movie_id=
function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    // console.log(json.data.movie);
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(detail);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <DetailInfo
            title_long={detail.title_long}
            img={detail.large_cover_image}
            genres={detail.genres}
            description_full={detail.description_full}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
