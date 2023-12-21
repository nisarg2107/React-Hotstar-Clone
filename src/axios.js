import axios from "axios";

const instanceURL = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instanceURL;
