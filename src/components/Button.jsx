import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Button({ onClick, children, to, size = "base" }) {
  const commonClass =
    "inline-block rounded-full border border-stone-600 bg-white dark:bg-primary-blue dark:border-slate-800 dark:text-stone-200 text-stone-700 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-900 focus:ring dark:focus:ring-slate-800 dark:hover:bg-slate-700 focus:ring-gray-200 focus:ring-offset-1";

  const sizes = {
    sm: commonClass + " px-2 py-1 sm:px-3 sm:py-2 md:px-4 text-xs sm:text-sm",
    base: commonClass + " px-3 py-2 sm:px-4 sm:py-3 md:px-5 text-sm sm:text-lg",
  };

  if (to) {
    return (
      <Link className={`${sizes[size]}`} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${sizes[size]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
