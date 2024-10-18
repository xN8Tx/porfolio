import { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie-player";

import { useIcon } from "@/hooks";
import { Link } from "@/ui/kit";

import type { Icons } from "@/types";

type ItemProps = {
  href: string;
  name: string;
  icon: Icons;
};

const Item = ({ href, name, icon }: ItemProps) => {
  const [isHover, setIsHover] = useState(false);
  const lottieRef = useRef(null);

  const animationData = useIcon(icon);

  const handleMouseEnter = () => {
    if (lottieRef.current) {
      // @ts-ignore
      lottieRef.current.goToAndStop(0, 0);
    }
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    // @ts-ignore
    if (lottieRef.current) lottieRef.current.goToAndStop(0, 0);
  }, [lottieRef]);

  return (
    <>
      {animationData && (
        <Link
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          href={href}
          type="link"
          isHover={false}
        >
          <Lottie
            ref={lottieRef}
            play={isHover}
            animationData={animationData}
            style={{ width: "32px", height: "32px" }}
          />
          {name}
        </Link>
      )}
    </>
  );
};

export { Item };
