import type { Dispatch, SetStateAction } from "react";

type ButtonProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const Button = ({ isMenuOpen, setIsMenuOpen }: ButtonProps) => {
  const buttonHandler = () => {
    setIsMenuOpen((prev) => {
      const newValue = !prev;
      document.body.style.overflowY = newValue ? "hidden" : "auto";
      return newValue;
    });
  };

  return (
    <div
      className="header__burger-button"
      data-isopen={isMenuOpen.toString()}
      onClick={buttonHandler}
    >
      <div className="header__burger-button__wrapper">
        <div className="header__burger-button__hamburger">
          <span className="header__burger-button_span"></span>
          <span className="header__burger-button_span"></span>
          <span className="header__burger-button_span"></span>
        </div>
        <div className="header__burger-button__cross">
          <span className="header__burger-button_span"></span>
          <span className="header__burger-button_span"></span>
        </div>
      </div>
    </div>
  );
};

export { Button };
