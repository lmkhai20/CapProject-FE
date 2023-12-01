import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Reader from "./pages/Reader/Reader";
import Header from "./components/Header";
import Document from "./pages/Document/Document";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reader" element={<Reader />} />
        <Route path="/document" element={<Document />} />
      </Routes>
    </Router>
  );
}

export default App;
