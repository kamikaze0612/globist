"use strict";

const BASE_URL = "https://restcountries.com/v3.1/";

async function getCountries() {
  const res = await fetch(`${BASE_URL}all`);
  const data = await res.json();

  return data;
}

async function getCountryByName(countryName) {
  const res = await fetch(`${BASE_URL}name/${countryName}`);
  const data = await res.json();

  return data;
}

async function getCountryByCode(code) {
  const res = await fetch(`${BASE_URL}alpha/${code}`);
  const data = await res.json();

  return data;
}

export { getCountries, getCountryByName, getCountryByCode };
