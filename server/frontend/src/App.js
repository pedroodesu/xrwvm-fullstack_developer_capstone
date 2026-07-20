import LoginPanel from "./components/Login/Login"
import Register from "./components/Register/Register"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Dealers from "./components/Dealers/Dealers"
import Dealer from "./components/Dealers/Dealer"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dealers />} />
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dealer/:id" element={<Dealer />} />
    </Routes>
  );
}

export default App;