// const GOOGLE_API_KEY = "AIzaSyB4Yh343booT6jgvh0q1JjVKMPQFlmH7zg"; // opbinod ki
// const GOOGLE_API_KEY = "AIzaSyD-Yq_Yi15DRkX1qKi-p9J2vprjD0MC8d4";

const GOOGLE_API_KEY = "AIzaSyDcGOSz4h39ZStWf7p1k0p6LI_NjLhfzIs"; // gmaing with ru  ki

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// export const SEARCHBOX_API =
//   "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=rohit%20sharma%20&key=AIzaSyB4Yh343booT6jgvh0q1JjVKMPQFlmH7zg" +
//   GOOGLE_API_KEY;

// export const SEARCHBOX_API =
//   "https://www.youtube.com/results?search_query=rohit+sharma";
export const SEARCHBOX_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";
