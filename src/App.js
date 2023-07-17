import "./App.css";
import Portfolio from "./portfolio";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/*" element={<Portfolio />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
