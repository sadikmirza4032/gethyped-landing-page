import girl from "../../../assets/girl.jpg";
import { ArrowRight, ArrowDown } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="font-['Poppins'] px-10 md:px-12 py-20 bg-[#f3eee8]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-5xl  leading-[1.05] tracking-tight max-w-5xl">
          Wij maken content die opvalt. Die 
          blijft hangen. Die jouw doelgroep 
          raakt en jouw merk in beweging 
          brengt. Snel, krachtig en energiek.
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-10 items-end">
          <div className="rounded-[28px] overflow-hidden w-full max-w-55">
            <img src={girl} alt="girl" className="w-full h-70 object-cover" />
          </div>

          <div className="md:col-span-2 flex flex-col justify-between pt-30">
            <p className="text-lg leading-9 max-w-xl font-bold">
              We stoppen niet bij mooie plaatjes en 
              vette beelden. We maken het meetbaar. 
              Zo weet je precies wat werkt en wat niet. 
              Nooit meer content zonder strategie.
              Nooit meer content zonder resultaat.
            </p>

            <div className="mt-8 flex items-center justify-between">
              <button
                className="flex items-center gap-3 border border-black rounded-md px-5
               py-3 font-medium hover:translate-x-1 hover:-translate-y-1 hover:shadow-lg "
              >
                Leer ons kennen
                <ArrowRight className="text-white bg-black " size={18} />
              </button>

              <button
                className="border border-black rounded-xl p-3 hover:bg-black
               hover:text-white hover:translate-x-1 hover:-translate-y-1 hover:shadow-lg"
              >
                <ArrowDown size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
