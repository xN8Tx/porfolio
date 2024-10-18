"use client";
import { useContext } from "react";

import { LanguageContext } from "@/models";
import { Item } from "./item";

const List = () => {
  const { languageData } = useContext(LanguageContext);
  const { projects } = languageData;

  return (
    <div className="projects__list" data-scroll>
      {projects.map((project) => (
        <Item key={project.name} data={project} />
      ))}
    </div>
  );
};

export { List };
