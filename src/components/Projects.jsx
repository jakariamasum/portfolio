import { Github, ExternalLink } from "lucide-react";
import campher from "../assets/images/camp.png";
import compass from "../assets/images/codecompass.png";
import carPoint from "../assets/images/car-point.png";
import ridex from "../assets/images/ridex.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const projects = [
    {
      title: "Campher Essential! One stop solution.",
      description:
        "Camphers Shop is an e-commerce website dedicated to providing all the necessary and fun items for camping enthusiasts.Users can explore, add to card and buy the neccessary items.",
      tags: ["React", "Tailwind", "Stripe"],
      links: {
        github: "https://github.com/jakariamasum/Campher-Essential",
        demo: "https://camp-essential.netlify.app/",
      },
      image: campher,
      featured: true,
    },
    //d
    {
      title: "CodeCompass! A programmatic solution",
      description:
        "CodeCompass is a tech solution site where users can explore their problem solutions. As well as they can post own blogs, problem solution for others. Hence tech ethucians are collaborate each other and bringing the problem easier",
      tags: ["Nextjs", "Tailwind", "Stripe", "Web Development"],
      links: {
        github: "https://github.com/jakariamasum/CodeCompass-Client",
        demo: "https://code-compass-client.vercel.app/",
      },
      image: compass,
      featured: true,
    },
    {
      title: "RideX",
      description:
        "A user-friendly and responsive car rental reservation platform for customers and administrators. This system offers a smooth experience for browsing, booking, and managing cars, while providing administrators with tools to manage inventory and reservations.",
      tags: ["React", "Redux", "Tailwind", "Stripe", "TypeScript"],
      links: {
        github: "https://github.com/jakariamasum/Car-Rental_Client",
        demo: "https://ridex-car-rental.netlify.app/",
      },
      image: ridex,
      featured: true,
    },
    {
      title: "Car Point",
      description:
        "Car Poinit is a full-stack web application designed for buying and selling cars. It allows users to list their cars for sale, place bids on listings, and facilitates secure transactions between buyers and sellers.",
      tags: ["React", "Tailwind"],
      links: {
        github: "https://github.com/jakariamasum/Car-point-client",
        demo: "https://car-point-8c5e4.web.app/",
      },
      image: carPoint,
      featured: true,
    },
  ];

  return (
    <div className="pt-40 min-h-screen bg-[#0f1629] p-8 text-slate-100">
      <div className="max-w-7xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
          >
            {/* Image Section */}
            <div className="md:w-1/2 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text Section */}
            <Card className="md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6">
              <MacOsButtons />

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                      Featured Project
                    </div>
                    <CardTitle className="text-slate-100 text-3xl font-bold">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.links.demo}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
