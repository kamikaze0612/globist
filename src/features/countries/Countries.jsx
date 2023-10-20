import { useEffect } from "react";
import { getCountries } from "../../services/apiRestCountries";
import { useCountries } from "../../store";
import CountryItem from "./CountryItem";
import { useLoaderData } from "react-router-dom";

function Countries() {
  const countriesData = useLoaderData();
  let countries;

  const { dispatch, query } = useCountries();

  if (query)
    countries = countriesData.filter((country) =>
      country.name.common.toLowerCase().includes(query),
    );
  else countries = countriesData;

  useEffect(() => {
    dispatch({ type: "countries/loaded", payload: countriesData });
  }, [dispatch, countriesData]);

  return (
    <>
      <div className="p-6">
        {countries.length > 0 ? (
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-items-center gap-x-6 gap-y-8">
            {countries.map((country, index) => (
              <CountryItem country={country} key={index} id={country.cca3} />
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export async function loader() {
  const countries = await getCountries();
  return countries;
}

export default Countries;
