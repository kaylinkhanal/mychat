import Login from "./pages/Auth/Login";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Register from "./pages/Auth/Register";
import './App.css'
const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
};

export default App;
