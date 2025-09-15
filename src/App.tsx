import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import Subtitle from "./components/Subtitle";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Order from "./pages/order"; // Importe sua página Order


const App: React.FC = () => {
  return (
    <Router>
      <div className="font-source-serif bg-[#f5f1ec] text-[#5a1f1f]">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Subtitle />
                  <Products />
                  <About />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route path="/order" element={<Order />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;