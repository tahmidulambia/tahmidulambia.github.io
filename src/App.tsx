import React from 'react';
import Navbar from "./components/Navbar";
import Landing from "./sections/Landing";
import About from "./sections/About";

function App() {
  return (
    <div className="bg-bg text-text min-h-screen">
      <Navbar />
      <Landing />
      <About />
      <section id="projects" className="min-h-screen pt-24">Projects Content</section>
      <section id="contact" className="min-h-screen pt-24">Contact Content</section>
    </div>
  );
}

export default App;
