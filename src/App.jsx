import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import About from "./sections/About";
import Services from "./sections/Services";
import Appointment from "./sections/Appointment";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="appointment">
        <Appointment />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
