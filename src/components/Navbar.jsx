import { useState } from "react";
import { Menu, X } from "lucide-react"; // for mobile icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "appointment", label: "Appointment" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close mobile menu after click
  };

  return (
    <nav className="fixed top-0 w-full bg-white text-gray-900 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1
          className="text-2xl font-extrabold text-[#004AAD] cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          DentalCare
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-semibold">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer text-gray-700 hover:text-[#004AAD] transition-colors"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {isOpen ? (
            <X
              size={28}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-[#004AAD]"
            />
          ) : (
            <Menu
              size={28}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer text-[#004AAD]"
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg font-semibold">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer text-gray-700 hover:text-[#004AAD] transition-colors"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
