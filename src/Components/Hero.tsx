// Hero.jsx
import React from "react";
import Profile from "../assets/Profile.png";

const Hero = () => {
  return (
    <section className="w-full bg-slate-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        
        {/* Left: Image (40%) */}
        <div className="md:col-span-2 flex justify-center items-center">
          <img
            src={Profile}
            alt="Joshua profile"
            className="w-80 max-w-full h-auto rounded-2xl shadow-xl"
          />
        </div>

        {/* Right: Text (60%) */}
        <div className="md:col-span-3 text-slate-800">
          {/* Main Headline */}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-teal-700">
            I help turn your ideas into cinematic videos that hook your audience,
            build brand trust, and make them buy.
          </h1>

          {/* Name */}
          <h2 className="mt-5 font-display text-xl font-semibold text-rose-500 tracking-wide">
            Joshua
          </h2>

          {/* Description */}
          <p className="mt-4 text-slate-600 leading-relaxed">
            Turning your vision into a story brand that hooks your audience
            through script writing and hero videos featuring your customers’
            success journey.
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed">
            Most brands are invisible because they sound like everyone else. I
            help <span className="italic">[you’ll fill this in]</span> bridge the
            gap between their technical brilliance and their audience’s emotions.
            By combining strategic scriptwriting with cinematic hero films, I
            build{" "}
            <span className="font-medium text-teal-600">
              “Narrative Infrastructure”
            </span>{" "}
            that turns skeptical observers into loyal champions. I don’t just
            edit clips; I architect the stories that win markets.
          </p>

          {/* CTA */}
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-block px-8 py-3 border-2 border-rose-500 text-rose-500 font-semibold rounded-full hover:bg-rose-500 hover:text-white transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
