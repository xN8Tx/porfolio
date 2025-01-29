import { StrapiHeader } from "@/shared/types";
import { Svg } from "@/shared/ui";

const Logo = (props: Pick<StrapiHeader, "logo">) => {
  return (
    <div className="header__logo">
      <Svg
        src={props.logo.url}
        width={65}
        height={20}
        mime={props.logo.mime}
        alt={props.logo.alternativeText ?? "Logo"}
      />
    </div>
  );
};

export { Logo };
