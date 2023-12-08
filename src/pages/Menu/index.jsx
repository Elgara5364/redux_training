import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as reqAPI from "../../helpers/api";

const Menu = () => {
  // const { list } = useSelector((state) => state.menuReducer); //kalau destructure kita ngambil isi dari object . tapi harus gunakan kurung kurawal
  // const menu = useSelector((state) => state.menuReducer);
  // console.log(list);
  const { list, menuList } = useSelector((state) => state.menuReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    getmenus();
  }, []);
  //panggil api mudo menu dan ganti data menulist dengan data dari api mudo
  const getmenus = async () => {
    try {
      const res = await reqAPI.reqGetMenu();
      console.log(res.data.data.Data);
      dispatch({
        type: "MENU",
        payload: {
          data: res.data.data.Data, //nama key yang ada di payload bebas yang penting waktu ngambil gunakan nama yang sama
        },
      });
    } catch (error) {
      // console.log(error);
    }
  };
  console.log({ menuList });

  return (
    <div>
      {list.map((item) => (
        <p>{item.name}</p>
      ))}
      <h1>ini Menu</h1>
      {menuList.map((data) => (
        <p>{data.name}</p>
      ))}
    </div>
  );
};

export default Menu;
