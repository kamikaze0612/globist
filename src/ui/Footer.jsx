import Icon from "../components/Icon";

function Footer() {
  return (
    <footer className="relative flex h-12 flex-col justify-center px-4 py-4 shadow-[0_-1px_2px_rgba(0,0,0,0.05)] dark:bg-primary-blue dark:text-stone-100 sm:h-16">
      <button
        onClick={() => document.body.classList.toggle("dark")}
        className="absolute top-[-40px] rounded-md border border-stone-200 bg-white p-1.5 dark:border-stone-800 dark:bg-primary-blue sm:top-[-52px] lg:p-2"
      >
        <Icon className="dark:hidden" iconName="icon-moon-fill" />
        <Icon
          className="hidden fill-slate-100 dark:block"
          iconName="icon-sun-fill"
        />
      </button>
      <p className="self-center text-center text-xs sm:text-base">
        &copy; 2023{" "}
        <a
          className=" font-semibold no-underline"
          href="https://kamikaze0612.github.io/"
        >
          Buyantogtokh B
        </a>
        . All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
