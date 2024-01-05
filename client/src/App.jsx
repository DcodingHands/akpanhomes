import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Listing } from "./pages/Listing";
import { Home } from "./pages/Home";
import { Agent } from "./pages/Agent";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/about" element={<About />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
