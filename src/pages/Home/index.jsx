import React from "react";
import { useSelector, useDispatch } from "react-redux"; //Dispatch berfungsi untuk melempar action ( type dan data)
// import { rootReducer } from "../../redux/reducers";
import store from "../../redux/store";
import { TYPES } from "../../redux/reducers/types";

const Home = () => {
  // const state = useSelector((state) => state.authReducer); //state berasal dari store.
  const { isAuth } = useSelector((state) => state.authReducer);
  console.log("test", isAuth);
  const dispatch = useDispatch(); //gunakan type sebagai identitas dan di dalam payload isi nilai terbaru dari statenya.

  const { listUser } = useSelector((state) => state.userReducer);
  // console.log(listUser);

  const handleLogin = () => {
    dispatch({
      type: TYPES.LOGIN,
      payload: {
        isAuth: true,
      },
    });
  };
  const handleLogout = () => {
    dispatch({
      //DISPATCH DIBACA SEBAGAI ACTION
      type: TYPES.LOGOUT,
      payload: {
        isAuth: false,
      },
    });
  };

  return (
    <div>
      <h1>ini landing page</h1>
      {isAuth ? <h1>anda belum login</h1> : <h1> anda sudah login</h1>}
      {listUser.map((user) => (
        <p>{user.name}</p>
      ))}
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
