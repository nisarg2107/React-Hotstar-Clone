import React from "react";
import styled from "styled-components";
import Viewers from "./Viewers";
import Banner from "./banner/Banner";
import MovieRow from "./movie_row/MovieRow";
import { requests } from "../constant";

const Home = (props) => {
  return (
    <>
      <Container>
        <Banner />
        <Viewers />
        <MovieRow
          fetchURL={requests.fetchTrending}
          title="Trending"
          isLargeImage={true}
        />
        <MovieRow
          fetchURL={requests.fetchTopRated}
          title="Top Rated"
          isLargeImage={true}
        />
        <MovieRow
          fetchURL={requests.fetchHotstarOriginals}
          title="Hotstar Originals"
          isLargeImage={false}
        />
        <MovieRow
          fetchURL={requests.fetchActionMovies}
          title="Action"
          isLargeImage={true}
        />
        <MovieRow
          fetchURL={requests.fetchComedyMovies}
          title="Comedy"
          isLargeImage={true}
        />
        <MovieRow
          fetchURL={requests.fetchDocumentaries}
          title="Documentaries"
          isLargeImage={false}
        />
        <MovieRow
          fetchURL={requests.fetchHorrorMovies}
          title="Horror"
          isLargeImage={true}
        />
        <MovieRow
          fetchURL={requests.fetchRomanceMovies}
          title="Romance"
          isLargeImage={true}
        />
      </Container>
    </>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 80px);
  overflow-x: hidden;
  overflow-y: hidden;
  display: block;
  padding: 0 calc(2vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
