import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Products";
import ProductDetails from "./App";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;