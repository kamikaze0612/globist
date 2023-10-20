const formatter = Intl.NumberFormat("en-US", {
  maximumSignificantDigits: 3,
  maximumFractionDigits: 0,
});

function formatPopulation(number) {
  return formatter.format(number);
}

export { formatPopulation };
