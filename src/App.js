import { Routes, Route } from "react-router-dom";

import "./App.css";
import ArticleDetailPage from "./pages/articledetail/ArticleDetailpage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<ArticleDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
