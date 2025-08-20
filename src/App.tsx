import React from 'react';
import Navbar from "./components/Navbar";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Projects from './sections/Projects';

function App() {
  return (
    <div className="bg-bg text-text min-h-screen">
      <Navbar />
      <Landing />
      <About />
      <Projects />
    </div>
  );
}

export default App;
