import About from "./components/About";
import Blogs from "./components/Blogs";
import Edumpers from "./components/Edumpers";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/edumpers" element={<Edumpers />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  )
};

export default App;
