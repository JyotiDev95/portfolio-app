import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer at Foreignerds Inc.",
    location: "Remote",
    type: "Design & Development",
    period: "April 2024 – Present",
  },
  {
    title: "Web Developer at Designed (Freelance)",
    location: "Remote",
    type: "React, HTML, CSS, JS Development",
    period: "2023 – March 2024",
  },
  {
    title: "Frontend Developer / Designer at Adaan",
    location: "Delhi",
    type: "UI/UX Implementation, Wix, WordPress",
    period: "2019 – August 2023",
  },
];

const points = [
  "Lead and collaborate with teams as a Frontend Developer.",
"Develop and maintain test coverage through unit and integration testing.",
  "Ensure scalability and maintainability in React projects.",
  "Upgrade legacy code and develop modern web applications.",
];

const ExperienceTimeline = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-24 px-6 text-white">
      <h2 className="text-center text-4xl font-bold mb-2 text-gray-700 dark:text-white">Most Recent Work Experience</h2>
      <p className="text-center text-lg text-gray-400 mb-12">
        My experience as a Frontend Developer
      </p>

      <div className="flex flex-col lg:flex-row justify-center gap-10 max-w-7xl mx-auto">
        {/* Key Accomplishments Section */}
        <div className="lg:w-1/2" data-aos="fade-right">
          <h3 className="text-2xl font-semibold mb-6 uppercase text-gray-700 dark:text-white">Key Accomplishments</h3>
          <ul className="space-y-5">
            {points.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3"
                data-aos="fade-right"
                data-aos-delay={idx * 100}
              >
                <span className="text-pink-500 mt-1">✔</span>
                <p className="text-white-300 text-xl text-gray-700 dark:text-white">{point}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Timeline */}
        <div className="relative lg:w-1/2 before:absolute before:top-0 before:left-4 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-pink-500 before:to-purple-600">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="mb-12 pl-12 relative"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {/* Dot */}
              <div className="absolute left-[2px] top-2 w-8 h-8 rounded-full bg-black border-2 border-pink-500 flex items-center justify-center shadow-pink-500 shadow-md">
                <Briefcase size={14} className="text-pink-500" />
              </div>

              <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-pink-500/30 transition">
                <h4 className="text-xl font-bold">{exp.title}</h4>
                <p className="text-gray-400 text-sm">{exp.location}</p>
                <p className="text-sm text-pink-400 italic">{exp.type}</p>
                <p className="text-gray-300 text-sm mt-1">{exp.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
