import jsonPlaceHolder from "../api/jsonplaceholder";
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get("/posts");
  dispatch({
    type: "FETCH_POST",
    payLoad: response.data,
  });
};
