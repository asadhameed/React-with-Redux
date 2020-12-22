import jsonPlaceHolder from "../api/jsonplaceholder";
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get("/posts");
  dispatch({
    type: "FETCH_POST",
    payLoad: response.data,
  });
};

export const fetchUser = (userId) => async (dispatch) => {
  const response = await jsonPlaceHolder.get("/users/" + userId);
  dispatch({
    type: "FETCH_User",
    payLoad: response.data,
  });
};
