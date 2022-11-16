import ChatUI from "./UI/chatUI";
import { Route, Routes } from "react-router-dom";
//import Register from "./pages/Auth/Register";
import "./App.css";
const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<ChatUI />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </div>
  );
};

export default App;
