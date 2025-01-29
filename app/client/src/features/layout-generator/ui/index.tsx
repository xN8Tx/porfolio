import { Root } from "./root";
import { getLayoutData } from "../api";

interface LayoutGeneratorProps {
  children: React.ReactNode;
  locale: string;
}

const LayoutGenerator = async ({ children, locale }: LayoutGeneratorProps) => {
  const {
    data: { footer, header },
  } = await getLayoutData(locale);

  return (
    <Root footer={footer} header={header}>
      {children}
    </Root>
  );
};

export { LayoutGenerator };
