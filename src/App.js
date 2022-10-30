import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FlashCard from "./pages/FlashCard.js";
import Planets from "./pages/Planets.js";
import Stars from "./pages/Stars.js";
import Cosmology from "./pages/Cosmology.js";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";


export default function App() {
  return (
    <BrowserRouter basename = "/creative-project-3/build">
      <Routes>clearInterval()
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="flashcard" element={<FlashCard />} />
          <Route path="planets" element={<Planets />} />
          <Route path="stars" element={<Stars />} />
          <Route path="cosmology" element={<Cosmology />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);