"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Clean Architecture Enterprise Boiler Plate",
    description:
      "This is an enterprise boilerplate API with Clean Architecture in C# and .NET to ensure a scalable and maintainable code structure for enterprise applications. The project includes a RESTful API, Entity Framework Core, and a SQL Server database. The project is also integrated with Swagger for API documentation",
    image: "images/projects/project-image.jpg",
    tag: ["All"],
    gitUrl: "https://github.com/felixhard/Clean-Arkitektur-API",
    previewUrl: "/",
    previewAvailable: false,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "This is a project",
    image: "images/projects/project-image.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    previewAvailable: true,
  },
  // {
  //   id: 3,
  //   title: "Project 3",
  //   description: "This is a project",
  //   image: "images/projects/project-image.jpg",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  //   previewAvailable: true,
  // },
  //   {
  //     id: 4,
  //     title: "Project 4",
  //     description: "This is a project",
  //     image: "images/projects/project-image.jpg",
  //     tag: ["All", "Web"],
  //     gitUrl: "/",
  //     previewUrl: "/",
  //   },
  //   {
  //     id: 5,
  //     title: "Project 5",
  //     description: "This is a project",
  //     image: "images/projects/project-image.jpg",
  //     tag: ["All", "Web"],
  //     gitUrl: "/",
  //     previewUrl: "/",
  //   },
  //   {
  //     id: 6,
  //     title: "Project 6",
  //     description: "This is a project",
  //     image: "images/projects/project-image.jpg",
  //     tag: ["All", "Web"],
  //     gitUrl: "/",
  //     previewUrl: "/",
  //   },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newtag) => {
    setTag(newtag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    inital: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-6">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul
        ref={ref}
        className="grid md:grid-cols-3 gap-8 md:gap-12"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "inital"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              previewAvailable={project.previewAvailable}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
