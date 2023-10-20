import { useLoaderData, useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import { formatPopulation } from "../../utils/helpers";
import { getCountryByCode } from "../../services/apiRestCountries";
import { useCountries } from "../../store";

function Country() {
  const navigate = useNavigate();

  const { borderCountries, dispatch } = useCountries();

  const [selectedCountry] = useLoaderData();

  let nativeName, currencyName, languages;

  if (Object.keys(selectedCountry).length > 0) {
    nativeName = Object.values(
      Object.values(selectedCountry.name.nativeName)[0],
    )[0];
    currencyName = Object.keys(selectedCountry.currencies)[0];
    languages = Object.values(selectedCountry.languages);
  }

  async function handleBorderClick(countryName, id) {
    await dispatch({ type: "country/loaded", payload: id });
    navigate(`/country/${id}`);
  }

  return selectedCountry && Object.keys(selectedCountry).length > 0 ? (
    <>
      <div className="mx-auto flex flex-col p-6 dark:text-stone-200 lg:w-[80%]">
        <span>
          <Button size="sm" onClick={() => navigate("/countries")}>
            &larr; Countries
          </Button>
        </span>
        <div className="mt-6 self-center md:grid md:grid-cols-2 md:gap-10 lg:mt-16">
          <img
            className="inline-block justify-self-end object-cover object-center lg:mt-6 lg:h-[300px] lg:w-auto"
            src={selectedCountry.flags.png}
            alt={`Flag of ${selectedCountry.name.common}`}
          />
          <div className="mt-6">
            <h2 className="text-sm font-bold sm:text-lg md:text-xl lg:text-2xl">
              {selectedCountry.name.official}
            </h2>
            <div className="md:mt-4 md:flex md:items-start md:gap-6 lg:mt-8">
              <ul className="mt-6 flex flex-col gap-2 md:mt-0">
                <li className="text-xs text-stone-700 dark:text-stone-200 sm:text-sm lg:text-base">
                  <span className="font-semibold text-stone-950 dark:text-stone-50">
                    Native Name:
                  </span>{" "}
                  {nativeName}
                </li>
                <li className="text-xs text-stone-700 dark:text-stone-200 sm:text-sm lg:text-base">
                  <span className="font-semibold text-stone-950 dark:text-stone-50">
                    Population:
                  </span>{" "}
                  {formatPopulation(selectedCountry.population)}
                </li>
                <li className="text-xs text-stone-700 dark:text-stone-200 sm:text-sm lg:text-base">
                  <span className="font-semibold text-stone-950 dark:text-stone-50">
                    Region:
                  </span>{" "}
                  {selectedCountry?.region ? selectedCountry.region : null}
                </li>
                <li className="text-xs text-stone-700 dark:text-stone-200 sm:text-sm lg:text-base">
                  <span className="font-semibold text-stone-950 dark:text-stone-50">
                    Sub Region:
                  </span>{" "}
                  {selectedCountry?.subregion
                    ? selectedCountry.subregion
                    : null}
                </li>
                <li className="text-xs text-stone-700 dark:text-stone-200 sm:text-sm lg:text-base">
                  <span className="font-semibold text-stone-950 dark:text-stone-50">
                    Capital:
                  </span>{" "}
                  {selectedCountry?.capital ? selectedCountry.capital[0] : null}
                </li>
              </ul>
              <ul className="mt-8 flex flex-col gap-2 md:mt-0">
                <li className="text-xs text-stone-700 dark:text-stone-200 sm:text-sm lg:text-base">
                  <span className="font-semibold text-stone-950 dark:text-stone-50">
                    Top Level Domain
                  </span>{" "}
                  {selectedCountry?.tld ? selectedCountry?.tld[0] : null}
                </li>
                <li className="text-xs text-stone-700 dark:text-stone-200 sm:text-sm lg:text-base">
                  <span className="font-semibold text-stone-950 dark:text-stone-50">
                    Currencies:
                  </span>{" "}
                  {currencyName}
                </li>
                <li className="text-xs text-stone-700 dark:text-stone-200 sm:text-sm lg:text-base">
                  <span className="font-semibold text-stone-950 dark:text-stone-50">
                    Languages:
                  </span>{" "}
                  {languages.join(", ")}
                </li>
              </ul>
            </div>
            <div className="mt-12 flex flex-col gap-2 md:mt-6  lg:mt-8">
              <span className="font-semibold text-stone-950 dark:text-stone-50 md:text-xl">
                Border Countries:
              </span>
              <div className="flex flex-wrap gap-2">
                {borderCountries.map((country, index) => (
                  <Button
                    size="sm"
                    key={index}
                    onClick={() =>
                      handleBorderClick(country.name?.common, country.cca3)
                    }
                  >
                    {country.name?.common}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}

export async function loader({ params }) {
  const selectedCountry = await getCountryByCode(params.countryName);
  if (!selectedCountry) throw new Error("Invalid name");

  return selectedCountry;
}

export default Country;
