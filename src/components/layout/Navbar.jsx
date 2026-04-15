import { useState } from "react";
import { Menu, X, Flame } from "lucide-react";
import hero from "../../assets/logo.png";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f3eee8]/90 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <img
          src={hero}
          alt="GetHyped Logo"
          className="w-28 md:w-36 object-contain"
        />

        {/* Desktop Nav */}
        <div
          className="hidden md:flex bg-white rounded-full px-6 py-3 items-center
         gap-8 text-sm font-medium shadow-sm"
        >
          <NavLinks />
        </div>

        {/* Desktop CTA */}
        <button
          className="hidden md:flex items-center gap-3 bg-pink-300 rounded-full 
          px-5 py-3 text-sm font-semibold  transition-all duration-300 
          hover:translate-x-1 hover:-translate-y-1 hover:shadow-lg"
        >
          Get Results
          <Flame className="bg-white rounded-full p-1" size={20} />
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden bg-pink-300 rounded-full p-3 shadow-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
