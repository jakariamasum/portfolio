import { Layers, Network } from "lucide-react";

import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import campher from "../assets/images/camp.png";
import compass from "../assets/images/codecompass.png";
import carPoint from "../assets/images/car-point.png";
import ridex from "../assets/images/ridex.png";

export const blogData = [
  {
    title: "Why Developers Need TypeScript",
    excerpt: "Learn the basics of TypeScript.",
    date: "July 12, 2024",
    readTime: "6 min read",
    imageUrl: blog1,
    category: "Typescript",
    slug: "why-developers-need-typeScript",
    link: "https://dev.to/jakaria/why-developers-need-typescript-4g22",
  },
  {
    title: "Exploring TypeScript",
    excerpt: "Learn the basics of TypeScript.",
    date: "July 13, 2024",
    readTime: "4 min read",
    imageUrl: blog2,
    category: "Typescript",
    slug: "exploring-typeScript: a-comprehensive-guide",
    link: "https://dev.to/jakaria/exploring-typescript-a-comprehensive-guide-36nk",
  },
];

export const projectsData = [
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

export const educationData = [
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

export const experiencesData = [
  {
    icon: Network,
    title: "Full Stack Developer",
    company: "ZiniPay",
    period: "2024 - present",
    description:
      "Worked on developing and customizing Full Stack websites for clients globally.",
  },
  {
    icon: Layers,
    title: "Full Stack Developer Intern",
    company: "ZiniPay",
    period: "2024 - 2024",
    description:
      "Assisted in building and optimizing user interfaces with a focus on responsive and interactive designs.",
  },
];
