import type { StrapiProject } from "@/shared/types";
import { Item } from "../item";

const List = ({ projects }: { projects: StrapiProject[] }) => {
  return (
    <div className="projects__list" data-scroll>
      {projects.map((project) => (
        <Item key={project.id} project={project} />
      ))}
    </div>
  );
};

export { List };
