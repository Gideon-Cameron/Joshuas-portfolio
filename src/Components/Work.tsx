// Work.jsx
import React from "react";

const videos = [
  {
    id: 1,
    title: "Brand Story / Hero Film",
    url: "https://www.youtube.com/embed/_o0zXgaCt4Y",
  },
  {
    id: 2,
    title: "Marketing Campaign Video",
    url: "https://www.youtube.com/embed/S-ll-twQhQg",
  },
  {
    id: 3,
    title: "Customer Success Story",
    url: "https://www.youtube.com/embed/FH1vYuKWvrQ",
  },
  {
    id: 4,
    title: "Product Narrative Video",
    url: "https://www.youtube.com/embed/uOgcMRxGfDQ",
  },
  {
    id: 5,
    title: "Short-form Brand Film",
    url: "https://www.youtube.com/embed/pdVTSSsMNEo",
  },
];

const Work = () => {
  return (
    <section
      id="work"
      className="w-full bg-white py-20 flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-teal-700">
            Some of the stories I’ve helped bring to life
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            A selection of cinematic brand films, hero videos, and narrative-driven
            content designed to capture attention and build trust.
          </p>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-6 pr-10 scroll-smooth">
            {videos.map((video) => (
              <div
                key={video.id}
                className="min-w-[320px] md:min-w-[380px] lg:min-w-[420px] flex-shrink-0"
              >
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <p className="mt-3 text-sm font-medium text-slate-700">
                  {video.title}
                </p>
              </div>
            ))}
          </div>

          {/* Subtle scroll hint */}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Work;
