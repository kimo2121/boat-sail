import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route  path="/connect-wallet" element={<Activity/>} />
          <Route  path="/connect-wallet" element={<Authors/>} />
          <Route  path="/connect-wallet" element={<Contact/>} />
        <Route  path="/connect-wallet" element={<Explore/>} /> */}
          {/* <Footer /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
