import { Projects } from "./projects";
import { Concept } from "./concept";
import { Skills } from "./skills";
import { About } from "./about";

const Wrapper = () => {
  return (
    <>
      <Concept />
      <About />
      <Skills />
      <Projects />
    </>
  );
};

export { Wrapper };
