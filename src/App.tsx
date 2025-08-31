
import Navbar from "./components/Navbar";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Projects from './sections/Projects';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="text-text min-h-screen">
        <Navbar />
        <Landing />
        <About />
        <Projects />
      </div>
    </ErrorBoundary>
  );
}

export default App;
