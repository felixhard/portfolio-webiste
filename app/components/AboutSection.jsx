"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C#</li>
        <li>.NET</li>
        <li>HTML</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>CSS</li>
        <li>Git</li>
      </ul>
    ),
  },

  {
    title: "education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Object Oriented Software Development, NBI / Handelsakademin</li>
      </ul>
    ),
  },
  {
    title: "experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Software Development Internship, Volvo Trucks Technology</li>
        <li>Software Development Internship, Mardi Gras Digital</li>
        <li>IT-Support, Adapty AB</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      id="about"
      className="text-white"
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className=""
          src="/images/ai-bild.png"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a recently graduated Software developer aspiring to find a job
            in development. I have experience working with C#, .NET, JavaScript,
            React, Node.js, Express, MySQL, HTML, CSS and Git. I am a quick
            learner and I&apos;m always looking to expand my knowledge and skill
            sets. I am a team player and am exited to work with others to create
            amazing projects.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
