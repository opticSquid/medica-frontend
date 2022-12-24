// Below line is required for the react-bootstrap to work
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/User/Home/Home";
import Info from "./Components/User/Info/Info";
import Doctor from "./Components/Doctor/Doctor";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Components/Authentication/Login";
import { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import Signup from "./Components/Authentication/Signup";

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner animation="border" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/info" element={<Info />} />
          <Route path="/doctors" element={<Doctor />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
