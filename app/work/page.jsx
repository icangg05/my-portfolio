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
    category: "fullstack",
    title: "Official Regional Government Portal of Kendari City",
    description:
      "The official government portal of Kendari City that provides public information services, news updates, and integrated digital services for citizens",
    image: "/assets/work/kendari-portal.png",
    link: "https://kendarikota.go.id/",
    github: "#",
    tech: [
      "Laravel Inertia",
      "Laravel Filament",
      "React.js",
      "Tailwind CSS",
      "MySQL",
    ],
  },
  {
    id: 2,
    category: "fullstack",
    title: "Halu Oleo University Public Information Service",
    description:
      "The official public information service website of Halu Oleo University, built in compliance with PPID transparency standards",
    image: "/assets/work/ppid-uho.png",
    link: "https://ppid.uho.ac.id/",
    github: "#",
    tech: ["Laravel Inertia", "React.js", "MySQL"],
  },
  {
    id: 3,
    category: "fullstack",
    title: "SI-Perfect: Sistem Informasi Pelaporan Efektif, Cepat, dan Tepat",
    description:
      "A system for recording and monitoring realization reports for the Development Division of the Kendari City Secretariat",
    image: "/assets/work/si-perfect.png",
    link: "https://si-perfect.com/",
    github: "#",
    tech: ["Laravel", "Tailwind CSS", "Bootstrap", "MySQL"],
  },
  {
    id: 4,
    category: "frontend",
    title: "Chatina AI-Assistant Kendari",
    description:
      "The official chat platform for population administration and civil registration services of the Kendari City Government with AI assistant",
    image: "/assets/work/chatina-ai.png",
    link: "https://chatina.kendarikota.go.id/",
    github: "#",
    tech: ["React.js", "Tailwind CSS", "Google Gemini AI"],
  },
  {
    id: 5,
    category: "fullstack",
    title: "rekomU: Sistem Rekomendasi Produk UMKM",
    description:
      "A product recommendation website for local MSMEs in Kolaka using user-based collaborative filtering to predict user ratings",
    image: "/assets/work/rekomu.png",
    link: "https://rekomu.ilmifaizan.site/",
    github: "#",
    tech: ["Laravel", "Bootstrap", "MySQL"],
  },
  {
    id: 6,
    category: "fullstack",
    title: "Sinora: Sistem Informasi Notulensi Rapat",
    description:
      "Meeting minutes system used to monitor meeting schedules and record meeting results",
    image: "/assets/work/sinora.png",
    link: "https://sinora.ilmifaizan.site/",
    github: "#",
    tech: ["Laravel", "Bootstrap", "MySQL"],
  },
  {
    id: 7,
    category: "fullstack",
    title: "TK Dharma Mulya Information System",
    description:
      "Comprehensive information system featuring school website portal and integrated online admission (PPDB) registration module",
    image: "/assets/work/tkdharmamulya.png",
    link: "https://thdharma.ilmifaizan.site/",
    github: "#",
    tech: ["Laravel", "Bootstrap", "MySQL"],
  },
  {
    id: 8,
    category: "fullstack",
    title: "QuizyApp",
    description:
      "Online practice platform for CPNS/PPPK SKB tests with automatic scoring",
    image: "/assets/work/quizyapp.png",
    link: "https://quizy-one.vercel.app/",
    github: "#",
    tech: ["Next.js", "Tailwind CSS", "MongoDB"],
  },
  {
    id: 9,
    category: "fullstack",
    title: "SultraSpot Tourism Website",
    description:
      "Tourism and event ticket booking website for Southeast Sulawesi with integrated online payment system",
    image: "/assets/work/sultraspot.png",
    link: "#",
    github: "#",
    tech: ["Laravel", "Bootstrap", "MySQL"],
  },
];

const categories = ["fullstack", "frontend"];

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
          defaultValue="fullstack"
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
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* Tab content */}
          <div className="h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll">
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className="h-max xl:h-[585px]"
                  >
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => {
                        return (
                          <SwiperSlide key={project.id} className="h-full">
                            <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                              {/* Project info */}
                              <div className="w-full max-w-[375px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-0">
                                {/* Title */}
                                <h3 className="h3">{project.title}</h3>
                                {/* Description */}
                                <p className="max-w-[540px]">
                                  {project.description}
                                </p>
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
                              <div className="w-full h-[180px] md:h-[380px] xl:h-[340px] relative bg-pink-50/10 order-1 xl:order-0 rounded-lg overflow-hidden">
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
