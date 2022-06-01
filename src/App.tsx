import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Author from "./pages/Authors/Authors";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import Activity from "./pages/Activity/Activity";
import Explore from "./pages/Explore/Explore";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Authors" element={<Author />} />
          <Route path="/Item-Details" element={<ItemDetails />} />
          <Route path="/Activity" element={<Activity />} />
          <Route path="/Explore" element={<Explore />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
