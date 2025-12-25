// Skills.tsx
import React from "react";

const skills = [
  "Lorem Narrative Strategy",
  "Ipsum Script Development",
  "Dolor Brand Storytelling",
  "Sit Amet Video Editing",
  "Consectetur Cinematic Direction",
  "Adipiscing Visual Pacing",
  "Elit Audience Psychology",
  "Sed Do Story Structure",
  "Eiusmod Campaign Messaging",
  "Tempor Content Strategy",
  "Incididunt Customer Journeys",
  "Ut Labore Emotional Hooks",
  "Et Dolore Brand Positioning",
  "Magna Hero Video Concepts",
  "Aliqua Marketing Clarity",
  "Ut Enim Narrative Framing",
  "Ad Minim Conversion Focus",
  "Veniam Trust Building",
  "Quis Strategic Storylines",
  "Nostrud Visual Identity",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full bg-slate-50 py-20 flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-teal-700">
            Skills & Capabilities
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            A blend of strategic thinking, narrative design, and cinematic
            execution — all focused on moving audiences from interest to action.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <p className="font-medium text-slate-700">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
