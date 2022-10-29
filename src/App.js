import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FlashCard from "./pages/FlashCard.js";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>clearInterval()
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="flashcard" element={<FlashCard />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);