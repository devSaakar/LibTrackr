import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRepo from "./pages/UserRepo";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserRepo />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
