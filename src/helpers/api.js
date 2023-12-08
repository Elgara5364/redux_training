import axios from "axios";

export async function reqGetMenu() {
  const response = await axios.get("https://api.mudoapi.tech/menus");
  return response;
}
