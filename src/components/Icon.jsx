/* eslint-disable react/prop-types */
import sprite from "../assets/sprite.svg";

function Icon({ iconName, size = "md", className }) {
  const iconTypes = {
    md: "h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6",
    bg: "h-6 w-6 sm:h-7 sm:w-7",
  };
  return (
    <svg className={`${className} dark:fill-slate-400 ${iconTypes[size]}`}>
      <use xlinkHref={`${sprite}#${iconName}`}></use>
    </svg>
  );
}

export default Icon;
