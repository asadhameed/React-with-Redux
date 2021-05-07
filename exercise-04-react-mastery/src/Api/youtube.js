import Axios from "axios";
const KEY = "your_key";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: KEY,
    maxResults: 10,
    type: "video",
  },
});
