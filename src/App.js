import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Recipe from "./pages/Recipe";
import ErrorPage from "./pages/ErrorPage";
import RecipeTemplate from "./pages/RecipeTemplate";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* static page */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Recipe" element={<Recipe />} />

        {/* Dynamic pages */}

        <Route path="/Recipe/:id" element={<RecipeTemplate />} />

        {/* error page */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
