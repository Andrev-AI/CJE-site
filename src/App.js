import './App.css';
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fifa from "./components/fifa";
import Justdance from "./components/justdance";

function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fifa" element={<Fifa />} />
          <Route path="/justdance" element={<Justdance />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
