"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    category: "frontend",
    title: "LaunchWave Landing Page",
    description: "React + Tailwind landing page",
    image: "/assets/work/thumb1.png",
    link: "https://google.com",
    github: "https://github.com",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 2,
    category: "frontend",
    title: "Nextfolio Portfolio Site",
    description: "Next.js portfolio site",
    image: "/assets/work/thumb2.png",
    link: "https://google.com",
    github: "https://github.com",
    tech: ["Next.js", "Tailwind CSS", "Shadcn UI"],
  },
  {
    id: 3,
    category: "fullstack",
    title: "Authboard Dashboard",
    description: "Mern app with authentication",
    image: "/assets/work/thumb3.png",
    link: "https://google.com",
    github: "https://github.com",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    id: 4,
    category: "fullstack",
    title: "Chatsync Platform",
    description: "Real-time MERN app with chat functionality",
    image: "/assets/work/thumb4.png",
    link: "https://google.com",
    github: "https://github.com",
    tech: ["MERN", "Socket.io", "Redux"],
  },
  {
    id: 5,
    category: "uiux",
    title: "FlowMobile App Design",
    description: "Mobile-first Firgma Design",
    image: "/assets/work/thumb5.png",
    link: "https://google.com",
    github: "https://github.com",
    tech: ["Figma", "Adobe XD"],
  },
  {
    id: 6,
    category: "uiux",
    title: "ShopEase Dashboard Redesign",
    description: "Redesign of e-commerce dashboard",
    image: "/assets/work/thumb5.png",
    link: "https://google.com",
    github: "https://github.com",
    tech: ["Figma", "Framer", "Whimsical"],
  },
  {
    id: 7,
    category: "branding",
    title: "Brewhaus Brand Identiy",
    description: "A bold any earthy visual identity for a modern coffee brand",
    image: "/assets/work/thumb5.png",
    link: "https://google.com",
    github: "https://github.com",
    tech: ["Illustrator", "Photoshop", "Figma"],
  },
  {
    id: 8,
    category: "branding",
    title: "LunaSkin Luxury Branding",
    description: "Elegant branding for a premium skincare product line",
    image: "/assets/work/thumb4.png",
    link: "https://google.com",
    github: "https://github.com",
    tech: ["Photoshop", "Figma", "Canva"],
  },
  {
    id: 9,
    category: "branding",
    title: "NovaTech Brand Kit",
    description:
      "Full branding kit for a tech startup including logo and brand book",
    image: "/assets/work/thumb1.png",
    link: "https://google.com",
    github: "https://github.com",
    tech: ["Illustrator", "Figma", "Notion"],
  },
];

const categories = ["frontend", "fullstack", "uiux", "branding"];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        {/* Heading */}
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          My Latest <span className="text-accent">work</span>
        </h2>
        {/* Tabs */}
        <Tabs
          defaultValue="frontend"
          className="w-full flex flex-col gap-6 xl:gap-12"
        >
          {/* Tah ilst */}
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  key={index}
                  value={category}
                  className="capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-12 px-6 rounded-full cursor-pointer"
                >
                  {category === "uiux" ? "UI UX Design" : category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* Tab content */}
          <div className="h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className="h-max xl:h-[460px]"
                  >
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => {
                        return (
                          <SwiperSlide key={project.id} className="h-full">
                            <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                              {/* Project info */}
                              <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-0">
                                {/* Title */}
                                <h3 className="h3">{project.title}</h3>
                                {/* Tech */}
                                <div className="xl:mb-4 max-w-[300px] min-h-[130px]">
                                  <p className="mb-4">Technologies Used</p>
                                  <ul className="flex flex-wrap gap-4">
                                    {project.tech.map((item, index) => {
                                      return (
                                        <li
                                          key={index}
                                          className="flex items-center gap-4 bg-[#a883ff]/13 h-7 px-3.5 rounded-full"
                                        >
                                          {item}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                                {/* Button */}
                                <div className="flex flex-col sm:flex-row gap-4 items-start">
                                  <Link href={project.link} target="_blank">
                                    <button className="btn btn-sm btn-accent flex gap-2">
                                      <MdArrowOutward className="text-xl" />
                                      <span>Live Project</span>
                                    </button>
                                  </Link>
                                  <Link href={project.github} target="_blank">
                                    <button className="btn btn-sm btn-white flex gap-2">
                                      <FaGithub className="text-xl" />
                                      <span>Github Repo</span>
                                    </button>
                                  </Link>
                                </div>
                              </div>
                              {/* Project img */}
                              <div className="w-full h-[200px] md:h-[300px] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-0 rounded-lg overflow-hidden">
                                <Image
                                  src={project.image}
                                  alt={project.image}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Work;
