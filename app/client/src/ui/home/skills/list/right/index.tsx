import { useContext } from "react";

import { LanguageContext } from "@/models";
import { Item } from "../item";

const Right = () => {
  const { languageData } = useContext(LanguageContext);
  const { skillsText } = languageData;

  return (
    <ul className="skills__list">
      {skillsText.map((skill, index) => {
        const skillIndex = ++index;

        if (index < 6) return null;
        return <Item key={index} skillIndex={skillIndex} skill={skill} />;
      })}
    </ul>
  );
};

export { Right };
