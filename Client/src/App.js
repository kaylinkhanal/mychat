import { Route, Routes } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import UserChat from "./pages/Chat/userChat";
import { useDispatch, useSelector} from "react-redux";


import "./App.css";
const App = () => {
  const {token} = useSelector(state=> state.users)
  return (
    <div>
      {token ? (
        <Routes>
        <Route path="/" element={<UserChat />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<UserChat />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
      ):(
        <Routes>
              <Route path="/" element={<Login />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
