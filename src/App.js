// Below line is required for the react-bootstrap to work
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/User/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
