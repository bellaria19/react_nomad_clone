import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState();
  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setDetail(json.data.movie);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(detail);
  return (
    <div>
      <h2>Detail</h2>
      <div>
        {loading ? (
          <strong>Loading...</strong>
        ) : (
          <div>
            <h2>{detail.title}</h2>
            <img src={detail.background_image} alt="" />
            <p>{detail.summary}</p>
            <ul>
              {detail.genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Detail;
