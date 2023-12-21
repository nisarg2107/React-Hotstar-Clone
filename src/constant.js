import { Navigation, Pagination } from "swiper";

const API_KEY = "f81980ff410e46f422d64ddf3a56dddd";

export const baseImageURL = "https://image.tmdb.org/t/p/original/";

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchHotstarOriginals: `/discover/tv?api_key=${API_KEY}&with_networks-213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=Action`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=Comedy`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=Horror`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=Romance`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

// export const requests = {
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchHotstarOriginals: `/discover/tv?api_key=${API_KEY}&with_networks-213`,
//   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
// };

export const swiperParams = {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,

  // navigation: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  modules: [Navigation, Pagination],
};

export const LINKED_IN_URL =
  "https://www.linkedin.com/in/nisarg-desai-2937b8252/";

export const slickSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 8,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows: false,
      },
    },
  ],
};
