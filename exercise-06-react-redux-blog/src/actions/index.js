import jsonPlaceHolder from "../api/jsonplaceholder";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userId = _.uniq(_.map(getState().posts, "userId"));
  userId.forEach((id) => dispatch(fetchUser(id)));
};
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

// export const fetchUser = (userId) => (dispatch) => _fetchUser(userId, dispatch);

// // without memoize the function is called many time
// // with memoize the networking call just one time
// const _fetchUser = _.memoize(async (userId, dispatch) => {
//   const response = await jsonPlaceHolder.get(`/users/${userId}`);
//   dispatch({
//     type: "FETCH_User",
//     payLoad: response.data,
//   });
// });
