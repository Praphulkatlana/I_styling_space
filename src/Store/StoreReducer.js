const reducer = (state, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "add":
      return [...state, action.item];
    case "remove":
      return state.filter((item) => {
        if (item.id !== action.id) {
          return item;
        }
      });
    default:
      return state;
  }
};
export default reducer;
