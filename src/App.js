import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
function HatsPage() {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
}
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
