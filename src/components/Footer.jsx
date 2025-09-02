import { Link } from "react-router-dom";

const Footer = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-blue-900 text-white">
      {}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {}
        <div>
          <h2 className="text-2xl font-bold mb-3">DentalCare Clinic</h2>
          <p className="text-sm leading-6">
            Providing professional dental care with modern equipment and 
            compassionate service for your bright and healthy smile.
          </p>
        </div>

        {}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li onClick={() => scrollToSection("home")} className="cursor-pointer hover:text-blue-300">Home</li>
            <li onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-blue-300">About Us</li>
            <li onClick={() => scrollToSection("services")} className="cursor-pointer hover:text-blue-300">Services</li>
            <li onClick={() => scrollToSection("contact")} className="cursor-pointer hover:text-blue-300">Contact</li>
          </ul>
        </div>

        {}
        <div>
          <h3 className="text-xl font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li onClick={() => scrollToSection("services")} className="cursor-pointer hover:text-blue-300">General Dentistry</li>
            <li onClick={() => scrollToSection("services")} className="cursor-pointer hover:text-blue-300">Cosmetic Dentistry</li>
            <li onClick={() => scrollToSection("services")} className="cursor-pointer hover:text-blue-300">Dental Implants</li>
            <li onClick={() => scrollToSection("services")} className="cursor-pointer hover:text-blue-300">Emergency Care</li>
          </ul>
        </div>

        {}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">123 Smile Street,<br /> Jind, Haryana, India</p>
          <p className="mt-2 text-sm">Phone: +91 74041 19892</p>
          <p className="text-sm">Email: info@dentalcare.com</p>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-blue-300">FB</a>
            <a href="#" className="hover:text-blue-300">IG</a>
            <a href="#" className="hover:text-blue-300">LN</a>
          </div>
        </div>
      </div>

      {}
      <div className="bg-blue-950 py-4 text-center text-sm">
        <p>© {new Date().getFullYear()} DentalCare Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;