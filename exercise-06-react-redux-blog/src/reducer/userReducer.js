// export default (state = [], action) => {
//   switch (action.type) {
//     case "FETCH_User":
//       return [...state, action.payLoad];
//     default:
//       return state;
//   }
// };

export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_User":
      return [...state, action.payLoad];
    default:
      return state;
  }
};
