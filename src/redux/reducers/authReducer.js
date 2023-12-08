const initialState = {
  isAuth: false,
}; //Kemudian di lempar ke reducer (reducer isinya state)

export const authReducer = (state = initialState, action) => {
  //isinya state
  //Menerima function dan dilempar ke store

  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuth: action.payload.isAuth, //action.payload.NamaState
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
