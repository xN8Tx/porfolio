import { getMetadata } from "@/lib";
import { ChildrenProps } from "@/types";

export const generateMetadata = async () => {
  return await getMetadata("en");
};

const LanguageLayout = async ({ children }: ChildrenProps) => {
  return <>{children}</>;
};

export default LanguageLayout;
