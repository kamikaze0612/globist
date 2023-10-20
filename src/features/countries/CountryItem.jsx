/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { formatPopulation } from "../../utils/helpers";
import { useCountries } from "../../store";

function CountryItem({ country, id }) {
  const navigate = useNavigate();

  const { dispatch } = useCountries();

  async function handleClickCountry() {
    await dispatch({ type: "country/loaded", payload: id });
    navigate(`/country/${country.cca3}`);
  }

  return (
    <li
      onClick={handleClickCountry}
      className="h-[300px] w-[240px] cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl dark:bg-primary-blue dark:text-stone-200 md:h-[360px] md:w-[280px]"
    >
      <img
        src={country.flags.png}
        className="inline-block h-[140px] w-[240px] object-cover object-center md:h-[160px] md:w-[280px]"
        alt={`Flag of ${country.name.official}`}
      />
      <div className="px-4 pt-4 md:px-6 md:pt-6">
        <h2 className=" mb-3 mt-1 text-sm font-bold leading-normal md:text-base">
          {country.name.official}
        </h2>
        <p className="mb-1 text-xs md:text-sm">
          <span className="font-semibold">Population:</span>{" "}
          {formatPopulation(country.population)}
        </p>
        <p className="mb-1 text-xs md:text-sm">
          <span className="font-semibold">Region:</span> {country.continents[0]}
        </p>
        <p className="mb-1 text-xs md:text-sm">
          <span className="font-semibold">Capital:</span>{" "}
          {country.capital && country.capital[0]}
        </p>
      </div>
    </li>
  );
}

export default CountryItem;
