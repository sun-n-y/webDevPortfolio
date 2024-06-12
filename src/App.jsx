import { useState } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { AppProvider } from './context';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') {
      setLoading(false);
    }
  });

  if (isLoading) {
    return <h1 className="text-2xl">loading...</h1>;
  }

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
