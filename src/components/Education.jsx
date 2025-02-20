import { useState } from "react";
import { Star, Calendar } from "lucide-react";
import Title from "./Title";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "B.Sc (Engg.) in Information and Communication Technology",
      school: "Islamic University, Bangladesh",
      mascot: "📘",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "Naogaon Govt College, Naogaon",
      mascot: "📗",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      school: "Nasaratpur High School",
      mascot: "📗",
    },
  ];

  return (
    <section className="min-h-screen bg-[#0f1629] py-16">
      <Title
        title="Educational Journey"
        subtitle="Crafting stories, one milestone at a time..."
      />
      <div className="max-w-5xl mx-auto px-4">
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`relative group border-2 rounded-xl transition-all duration-500 ${
                hoveredIndex === index
                  ? "border-teal-500 shadow-lg transform scale-105"
                  : "border-blue-400"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Main card content */}
              <div className="relative rounded-lg bg-[#0f1629] p-8 transition-all duration-300 hover:bg-[#1a243a]">
                {/* macOS-like window controls on the left */}
                <div className="flex justify-start gap-2 absolute top-3 left-3">
                  <button className="w-2.5 h-2.5 bg-red-500 rounded-full transition-all hover:bg-red-600" />
                  <button className="w-2.5 h-2.5 bg-yellow-400 rounded-full transition-all hover:bg-yellow-500" />
                  <button className="w-2.5 h-2.5 bg-green-500 rounded-full transition-all hover:bg-green-600" />
                </div>

                <div className="mb-2 text-emerald-500 text-sm font-medium tracking-wide">
                  FEATURED EDUCATION
                </div>

                {/* Top section */}
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{edu.mascot}</span>
                      <h3 className="text-2xl font-bold text-slate-200">
                        {edu.degree}
                      </h3>
                    </div>
                    <p className="text-lg text-slate-400 flex items-center gap-2">
                      <Star className="w-5 h-5 text-teal-500" />
                      {edu.school}
                    </p>
                    <p className="text-slate-500 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {edu.year}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
