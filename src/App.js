import React from "react";
import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import Plan from "./componets/Plan";
import Footer from "./componets/Footer";
import Booking from "./componets/Booking";
import Contact from "./componets/Contact";
import Events from "./componets/Events";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Events />
      <Booking />
      <Plan />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
