import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
