import NavLinks from "./NavLinks";
import logo from "../../assets/logo.png";
import { Flame, X } from "lucide-react";

export default function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[85%] max-w-[320px] bg-pink-200
         z-50 transition-transform duration-500 ease-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Top */}
      <div className="p-5  flex items-center justify-between">
        <img src={logo} alt="logo" className="w-28" />

        <button
          onClick={() => setIsOpen(false)}
          className="bg-white rounded-xl p-2"
        >
          <X size={22} />
        </button>
      </div>

      {/* Links */}
      <div className="flex flex-col gap-6 p-6 text-lg font-medium items-center">
        <NavLinks mobile setIsOpen={setIsOpen} />

        {/* Mobile CTA */}
        <button className="mt-4 flex items-center justify-center gap-3 bg-black text-white 
        rounded-lg px-5 py-3 text-sm font-semibold shadow-sm">
          Get Results
          <Flame className="bg-pink-300 rounded-full p-1" size={25} />
        </button>
      </div>
    </div>
  );
}
