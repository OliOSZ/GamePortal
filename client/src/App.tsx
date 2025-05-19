import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/LoginForm";
import ForgotPassword from "./components/forgotPassword";
import Signup from "./components/SignupForm";
import TicTacToe from "./pages/games/TicTacToe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/TicTacToe" element={<TicTacToe />} />
      </Routes>
    </Router>
  );
}

export default App;