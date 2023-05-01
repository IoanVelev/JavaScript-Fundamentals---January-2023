function travelTime(data) {
  let countries = {};
  for (let line of data) {
    [country, city, price] = line.split(" > ");
    price = Number(price);
    if (!countries.hasOwnProperty(country)) {
      countries[country] = {};
    }
    if (!countries[country].hasOwnProperty(city)) {
      countries[country][city] = price;
    } else {
      if (countries[country][city] > price) {
        countries[country][city] = price;
      }
    }
  }
  let keys = Object.keys(countries).sort((a, b) => a.localeCompare(b));
  for (let currentCountry of keys) {
    let sortedCities = Object.entries(countries[currentCountry]).sort((a, b) => a[1] - b[1]);
    let res = []
    for (let currentCity of sortedCities) {
        res.push(currentCity.join(' -> '));
    }
    res = res.join(" ");
    console.log(`${currentCountry} -> ${res}`);
  }
}
travelTime([
  "Bulgaria > Sofia > 25000",
  "Bulgaria > Sofia > 25000",
  "Kalimdor > Orgrimar > 25000",
  "Albania > Tirana > 25000",
  "Bulgaria > Varna > 25010",
  "Bulgaria > Lukovit > 10",
]);
