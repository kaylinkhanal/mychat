import { Route, Routes } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import UserChat from "./pages/Chat/userChat";


import "./App.css";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<UserChat />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </div>
  );
};

export default App;
