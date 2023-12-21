import React, { useEffect, useState } from "react";
import { fetchWatchList } from "../../features/watchlist/watchListSlice";
import { useDispatch } from "react-redux";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const WatchList = () => {
  const [watchListMovies, setWatchListMovies] = useState({});

  // const dispatch = useDispatch();
  useEffect(() => {
    // const data = dispatch(fetchWatchList());
    // console.log("watchlist ======", data);
    const usersCollectionDb = collection(db, "users");
    const getUser = async () => {
      const response = await getDocs(usersCollectionDb);
      const filteredData = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log("watchlist....", filteredData);
      setWatchListMovies(filteredData[0]);
    };
    getUser();
    return () => {
      console.log("clean up called for movies watchlist");
      setWatchListMovies({});
    };
  }, []);

  return <div>WatchList</div>;
};

export default WatchList;
