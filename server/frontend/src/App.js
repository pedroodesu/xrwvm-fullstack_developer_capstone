import LoginPanel from "./components/Login/Login"
import Register from "./components/Register/Register"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;