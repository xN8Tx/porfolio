import type { UICommonProps } from "@/types";

type HeadingProps = UICommonProps;

const Heading = ({
  size = "regular",
  color = "default",
  children,
  ...props
}: HeadingProps) => {
  const className = `ui-heading ${size} ${color}`;

  return (
    <h3 className={className} {...props}>
      {children}
    </h3>
  );
};

export { Heading };
