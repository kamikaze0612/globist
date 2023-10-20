/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const CountriesContext = createContext();

const initialState = {
  isLoading: false,
  countries: [],
  selectedCountry: {},
  countryNames: [],
  borderCountries: [],
  query: "",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "countries/loaded":
      return {
        ...state,
        countries: payload,
        countryNames: payload.map((country) => country.name.common),
        isLoading: false,
        selectedCountry: {},
        borderCountries: [],
      };

    case "loading":
      return {
        ...state,
        isLoading: true,
      };

    case "search":
      return {
        ...state,
        query: payload.toLowerCase(),
      };

    case "country/loaded":
      const curCountry = state.countries.find(
        (country) => country.cca3 === payload,
      );

      return {
        ...state,
        selectedCountry: curCountry,
        borderCountries:
          (curCountry?.borders &&
            curCountry?.borders.map((border) =>
              state.countries.find((country) => country.cca3 === border),
            )) ||
          [],
        isLoading: false,
      };

    default:
      throw new Error("Unknown action!");
  }
}

function CountriesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    isLoading,
    countries,
    selectedCountry,
    countryNames,
    borderCountries,
    query,
  } = state;

  return (
    <CountriesContext.Provider
      value={{
        dispatch,
        isLoading,
        countries,
        selectedCountry,
        countryNames,
        borderCountries,
        query,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

function useCountries() {
  const context = useContext(CountriesContext);
  if (CountriesContext === undefined) {
    throw new Error(
      "CountriesProvider is declared outside of CountriesContext",
    );
  }

  return context;
}

export { CountriesProvider, useCountries };
