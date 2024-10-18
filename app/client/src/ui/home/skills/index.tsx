"use client";
import { useContext } from "react";

import { LanguageContext } from "@/models";
import { Heading, Link } from "@/ui/kit";
import { List } from "./list";

import "./index.scss";

const Skills = () => {
  const { languageData } = useContext(LanguageContext);
  const { skills, contactData, contact } = languageData;

  return (
    <section className="skills" id="skills" data-scroll-section>
      <Heading size="small" color="light">
        {skills}
      </Heading>
      <List />
      <Link
        type="button"
        href={contactData[0].href}
        hoverText={contactData[0].name}
      >
        {contact}
      </Link>
    </section>
  );
};

export { Skills };
