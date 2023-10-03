import { useState } from "react";
import AboutSection from "./components/AboutSection";
import Contact from "./components/Contact";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={`${isDark && "dark"}`}>
      <div className="h-96  lg:h-screen bg-gradient-to-t from-indigo-200  dark:from-slate-800 dark:to-slate-900  relative overflow-hidden">
        <Navbar setdark={setIsDark} isDark={isDark} />
        <Content />
      </div>
      <AboutSection />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
