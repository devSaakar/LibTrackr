import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRepo from "./pages/UserRepo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserRepo />} />
      </Routes>
    </Router>
  );
}

export default App;