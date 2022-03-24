const reducer = (state, action) => {
  
  switch (action.type) {
    case "add":
      return {isLogin:true,products:[...state.products, action.item]};
    case "remove":
      return {isLogin:true,products: state.products.filter((item) => {
        if (item.id !== action.id) {
          return item;
        }
      })};
      case "signin":
      return {isLogin:action.item,products:[]};
      case "signout":
      return {isLogin:action.item,products:[]}
    default:
      return state.products;
  }
};
export default reducer;
