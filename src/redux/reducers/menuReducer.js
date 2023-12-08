const menuState = {
  list: [
    {
      id: 1,
      name: "ice cream",
    },
    {
      id: 2,
      name: "soto",
    },
  ],
  menuList: [],
};

export const menuReducer = (state = menuState, action) => {
  switch (action.type) {
    case "MENU":
      return {
        ...state,
        menuList: action.payload.data, //action.payload.NamaState
      };
    case "LOGOUT":
      return {
        ...state,
        isAuth: action.payload.isAuth,
      };
    default:
      return state;
  }
};
