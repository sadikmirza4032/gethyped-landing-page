import girl from "../../../assets/Loop Salontopper.mp4";
import car from "../../../assets/petrolhead-loop.mp4";

export default function Hero() {
  return (
    <section className="pt-24 md:pt-36 px-4 sm:px-6 md:px-8 bg-[#f3eee8]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold w-full
         max-w-6xl leading-[0.95] tracking-tight"
        >
          Get Hyped. Get <br />
          Noticed. Get Results.
        </h1>
        <p className="mt-4 text-sm sm:text-base max-w-sm leading-6 font-bold">
          Klaar met gokken op content <br />
          die niets oplevert?
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mt-10">
          {/* Card 1 */}
          <div className="bg-blue-500 rounded-[28px] p-6 min-h-60 sm:min-h-70 md:min-h-80
           -rotates-2deg transition-all duration-500 hover:scale-105 md:hover:scale-110
           s hover:rotate-0 hover:shadow-2xl cursor-pointer">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black">
              10M+
            </h3>
            <p className="pt-20 sm:pt-32 md:pt-40 text-base md:text-lg leading-relaxed">
              Organische views
              <hr className="my-3 border-black/20" />
              Groei door slimme content
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-orange-200 rounded-[28px] min-h-60 sm:min-h-70
           md:min-h-80 -rotate-3 overflow-hidden relative group transition-all
            duration-500 hover:scale-105 md:hover:scale-110 hover:rotate-0 hover:shadow-2xl
             cursor-pointer"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform 
              duration-700 group-hover:scale-110"
            >
              <source src={girl} type="video/mp4" />
            </video>

            <div
              className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100
             transition-opacity duration-500 flex items-center justify-center"
            ></div>
          </div>

          {/* Card 3 */}
          <div
            className="bg-green-400 rounded-[28px] p-6 min-h-60
           sm:min-h-70 md:min-h-80 -rotate-2 transition-all duration-500 hover:scale-105 md:hover:scale-110 hover:rotate-0 hover:shadow-2xl cursor-pointer"
          >
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black">30+</h3>
            <p className="pt-20 sm:pt-28 md:pt-40 text-base md:text-lg leading-relaxed">
              Merken geholpen
              <hr className="my-3 border-black/20" />
              Van start-up tot multinational
            </p>
          </div>

          {/* Card 4 */ }
          <div
            className="bg-slate-300 rounded-[28px] min-h-60 sm:min-h-70 
          md:min-h-80 -rotate-3 overflow-hidden relative group transition-all
           duration-500 hover:scale-105 md:hover:scale-110 hover:rotate-0 hover:shadow-2xl cursor-pointer"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform 
              duration-700 group-hover:scale-110"
            >
              <source src={car} type="video/mp4" />
            </video>

            <div
              className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100
             transition-opacity duration-500 flex items-center justify-center"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
