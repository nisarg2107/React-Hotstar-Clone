import React, { useEffect } from "react";
import "./movie-row.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieApi } from "../../features/movie/movieSlice";
import { baseImageURL, requests, slickSettings } from "../../constant";
import Slider from "react-slick";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addWatchList } from "../../helper";

const MovieRow = ({
  title,
  fetchURL = requests.fetchTrending,
  isLargeImage,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { movies } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchMovieApi(fetchURL));
    console.log("fetchURL", fetchURL);
  }, [fetchURL]);

  const showDetails = (movie) => {
    console.log("called =====", movie);

    navigate(`/movie/${movie.id}`, {
      state: {
        movieDetails: { ...movie },
      },
    });
  };

  return (
    <div className="movie-wrapper">
      <h2>{title}</h2>
      <div className="movie-row">
        {movies.length > 0 && (
          <Slider {...slickSettings}>
            {movies.map(
              (movie, index) =>
                ((isLargeImage && movie.poster_path) ||
                  (!isLargeImage && movie.backdrop_path)) && (
                  <div key={movie.id} onClick={() => showDetails(movie)}>
                    {/* <Link to={`/movie/${movie.id}`} state={movie}> */}
                    <div
                      className={`movie-card ${
                        isLargeImage && "large__poster"
                      } ${
                        (index === 0 && "movie-card-first-child") ||
                        (index === movies.length - 1 && "movie-card-last-child")
                      }`}
                      key={title}>
                      <div className="image-wrapper">
                        <img
                          className={`movie-card__image`}
                          src={
                            isLargeImage
                              ? `${baseImageURL}${movie.poster_path}`
                              : `${baseImageURL}${movie.backdrop_path}`
                          }
                          alt={
                            movie.title || movie.original_title || movie.name
                          }
                        />
                      </div>
                      <div className="movie-card__content">
                        <p className="movie-card__title">
                          {movie.title || movie.original_title || movie.name}
                        </p>
                        <button
                          className="watch-list"
                          onClick={(event) =>
                            addWatchList(
                              event,
                              movie.title || movie.original_title || movie.name
                            )
                          }>
                          <FontAwesomeIcon
                            icon={faHeart}
                            className="watch-list-icon"
                          />
                        </button>
                      </div>
                    </div>
                    {/* </Link> */}
                  </div>
                )
            )}
          </Slider>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default MovieRow;
