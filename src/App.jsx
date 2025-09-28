import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import Practice from "./pages/Practice/Practice";
import Events from "./pages/Events/Events";
import Blogs from "./pages/Blogs/Blogs";
import Careers from "./pages/Careers/Careers";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
