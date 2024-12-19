import './App.css';
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fifa from "./components/fifa";
import Justdance from "./components/justdance";
import Regulamento from "./components/regulamento";
import Robotica from "./components/robotica";
import Notfound from './components/notfound';

function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fifa" element={<Fifa />} />
          <Route path="/justdance" element={<Justdance />} />
          <Route path="/regulamento" element={<Regulamento />} />
          <Route path="/robotica" element={<Robotica />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
