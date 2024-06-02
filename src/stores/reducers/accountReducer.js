const initialState = 0;
const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return state + action.payload;
    case "remove":
      return state - action.payload;
    default:
      return state;
  }
};

export default accountReducer;
