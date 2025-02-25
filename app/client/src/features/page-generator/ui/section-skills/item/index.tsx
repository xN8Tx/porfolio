import { addZeroToNum } from "@/shared/lib";
import { Paragraph } from "@/shared/ui";

type ItemProps = {
  index: number;
  title: string;
};

const Item = ({ index, title }: ItemProps) => {
  return (
    <li className="skills__item" data-testid="page-skills_item">
      <Paragraph size="large">
        {addZeroToNum(index)}. {title}
      </Paragraph>
    </li>
  );
};

export { Item };
