"use client";
import { useContext } from "react";

import { LanguageContext } from "@/models";
import { List } from "./list";
import { Heading } from "@/ui/kit";

import "./index.scss";

const Projects = () => {
  const { languageData } = useContext(LanguageContext);

  return (
    <section className="projects" id="projects" data-scroll-section>
      <Heading color="light">{languageData.project}</Heading>
      <List />
    </section>
  );
};

export { Projects };
