import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateMenu from "./pages/CreateMenu";
import Menu from "./pages/Menu";
import Login from "./pages/Login/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-menu" element={<CreateMenu />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
