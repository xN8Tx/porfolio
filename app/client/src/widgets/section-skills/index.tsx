import type { StrapiSectionSkills } from "@/shared/types";

import { Heading, Button } from "@/shared/ui";
import { List } from "./list";

import "./index.scss";

const SectionSkills = (props: StrapiSectionSkills) => {
  return (
    <section className="skills" id="skills" data-scroll-section>
      <Heading size="small" color="light">
        {props.title}
      </Heading>
      <List skills={props.skills} />
      <Button
        href={props.button.href}
        subtitle={props.button.subtitle}
        isExternal={props.button.isExternal}
      >
        {props.button.title}
      </Button>
    </section>
  );
};

export { SectionSkills };
