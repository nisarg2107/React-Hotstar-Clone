export const addWatchList = (event, movie) => {
  event.stopPropagation();
  console.log("watchlist movie ====>", movie);
};
