import React, { useEffect, useState } from "react";
import instanceURL from "../../axios";
import { baseImageURL, requests } from "../../constant";
import "./banner.css";
import { useLocation, useParams } from "react-router-dom";

const Banner = () => {
  const { movieId } = useParams();
  const location = useLocation();
  // console.log("location", location);

  const movieDetails = location.state?.movieDetails;
  const [bannerMovie, setBannerMovie] = useState(movieDetails);

  useEffect(() => {
    const fetchBannerMovie = async () => {
      const request = await instanceURL.get(requests.fetchTrending);
      setBannerMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    };

    if (!movieDetails) {
      fetchBannerMovie();
    }
  }, []);

  return (
    <div className="banner">
      <img
        className="banner__image"
        src={`${baseImageURL}${
          bannerMovie?.backdrop_path || bannerMovie?.poster_path
        }`}
        alt={bannerMovie?.name || bannerMovie?.original_name}
      />
      <div className="banner__overlay"></div>
      <div className="banner__content">
        <h1 className="banner__title">
          {bannerMovie?.title ||
            bannerMovie?.name ||
            bannerMovie?.original_name}
        </h1>
        <p className="banner__description">{bannerMovie?.overview}</p>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">Watch Later</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
