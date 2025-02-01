import { Link } from "@/i18n/routing";
import { StrapiHeader } from "@/shared/types";
import { Svg } from "@/shared/ui";

const Logo = (props: Pick<StrapiHeader, "logo">) => {
  return (
    <Link href="/" id="site-logo" className="header__logo">
      <Svg
        src={props.logo.url}
        width={65}
        height={20}
        mime={props.logo.mime}
        alt={props.logo.alternativeText ?? "Logo"}
      />
    </Link>
  );
};

export { Logo };
