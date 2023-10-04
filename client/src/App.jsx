import About from "./components/About";
import Blogs from "./components/Blogs";
import Edumpers from "./components/Edumpers";
import Home from "./components/Home";
import Points from "./components/Points";
import Error from "./components/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/edumpers" element={<Edumpers />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/points" element={<Points />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
};

export default App;
