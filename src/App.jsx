import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";
import "./App.css";

// Section title mapping
const sectionData = [
  { id: "home", title: "Home | My Portfolio" },
  { id: "projects", title: "Projects | My Portfolio" },
  { id: "skills", title: "Skills | My Portfolio" },
  { id: "about", title: "About Me | My Portfolio" },
  { id: "contact", title: "Contact | My Portfolio" },
];

function App() {
  const [loading, setLoading] = useState(true);

  // Initial loading title + delay simulation
  useEffect(() => {
    document.title = "Loading | My Portfolio";
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Change page title dynamically based on visible section
  useEffect(() => {
    if (loading) return;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observers = [];

    sectionData.forEach(({ id, title }) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.title = title;
          }
        });
      }, options);

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [loading]);

  if (loading) return <Spinner />;

  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
