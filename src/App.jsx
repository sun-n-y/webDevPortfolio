import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { AppProvider } from './context';

const App = () => {
  return (
    <AppProvider>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Footer />
    </AppProvider>
  );
};

export default App;
