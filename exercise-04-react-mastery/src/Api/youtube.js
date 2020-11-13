import Axios from "axios";
const KEY = "AIzaSyA6lIITJlquB-uO4T2bkELCGaChBrvIyXQ";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: KEY,
    maxResults: 10,
    type: "video",
  },
});
