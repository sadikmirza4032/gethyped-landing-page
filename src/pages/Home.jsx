import Navbar from "../components/layout/Navbar";
import AboutSection from "../components/layout/sections/AboutSection";
import Hero from "../components/layout/sections/Hero";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#fa98ed]">
      <Navbar />
      <Hero />
      <AboutSection />
    </main>
  );
};

export default Home;