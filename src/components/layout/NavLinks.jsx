export default function NavLinks({ mobile = false, setIsOpen }) {
  const links = ["Expertises", "Work", "About", "Contact"];

  return (
    <>
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          onClick={() => mobile && setIsOpen(false)}
          className="group relative overflow-hidden rounded-md px-2 py-1 font-medium text-black bg-white"
        >
          <span className="relative z-20 transition-colors duration-500 group-hover:text-white">
            {link}
          </span>

          {/* Orange layer */}
          <span className="absolute inset-0 z-0 translate-y-full bg-orange-400 transition-transform 
          duration-500 ease-out group-hover:translate-y-0"></span>

          {/* Black finish */}
          <span className="absolute inset-0 z-10 translate-y-full bg-black transition-transform 
          duration-700 delay-200 ease-out group-hover:translate-y-0"></span>
        </a>
      ))}
    </>
  );
}