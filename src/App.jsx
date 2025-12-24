// import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero / About Section */}
      <Hero />

      {/*
        Future sections will go here:
        - About
        - Services
        - Portfolio
        - Testimonials
        - Contact
      */}
    </div>
  );
};

export default App;
