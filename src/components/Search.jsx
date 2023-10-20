import { useCountries } from "../store";

function Search() {
  const { dispatch, query } = useCountries();

  return (
    <div className="ml-auto mr-4 flex items-center sm:mr-8">
      <input
        type="text"
        value={query}
        onChange={(e) => dispatch({ type: "search", payload: e.target.value })}
        placeholder="Search country..."
        className="w-32 rounded-full bg-stone-100 py-1  pl-2 pr-3 text-xs focus:outline-none focus:ring focus:ring-stone-100 focus:ring-offset-1 dark:bg-slate-300 dark:focus:ring-slate-300 sm:w-40 sm:py-2 sm:pl-4 sm:pr-5 sm:text-sm"
      />
      <span className="inline-block h-full translate-x-[-150%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 256 256"
        >
          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
        </svg>
      </span>
    </div>
  );
}

export default Search;
