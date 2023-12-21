import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GettingStarted from "./components/GettingStarted";
import Header from "./components/Header";
import Home from "./components/Home";
import MovieDetails from "./components/movie_details/MovieDetails";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import WatchList from "./components/watch_list/WatchList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element=<GettingStarted /> />
        <Route path="/home" exact element=<Home /> />
        <Route path="/watchlist" exact element=<WatchList /> />
        <Route path="/movie">
          <Route path=":movieId" element=<Banner /> />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
