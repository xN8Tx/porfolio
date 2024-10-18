import { addZeroToNum } from "@/lib";
import { Paragraph } from "@/ui/kit";

type ItemProps = {
  skillIndex: number;
  skill: string;
};

const Item = ({ skillIndex, skill }: ItemProps) => {
  return (
    <li className="skills__item">
      <Paragraph size="large">
        {addZeroToNum(skillIndex)}. {skill}
      </Paragraph>
    </li>
  );
};

export { Item };
