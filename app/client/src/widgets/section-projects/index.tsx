import type { StrapiSectionProjects } from "@/shared/types";

import { Heading } from "@/shared/ui";
import { List } from "./list";

import "./index.scss";

const SectionProjects = (props: StrapiSectionProjects) => {
  return (
    <section
      className="projects"
      data-scroll-section
      {...(props.componentId && { id: props.componentId })}
    >
      <Heading color="light">{props.title}</Heading>
      <List projects={props.projects} />
    </section>
  );
};

export { SectionProjects };
