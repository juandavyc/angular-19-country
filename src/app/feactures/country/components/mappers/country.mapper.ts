import { Country, RESTCountry } from "../../interfaces";


export class CountryMapper {

  static restCountryToCountry(country: RESTCountry): Country {
    return {
      cca2: country.cca2,
      icon: country.flag,
      flag: country.flags.svg,
      name: country.name.common,
      population: country.population,
      capital: country.capital.join(", "),
    };
  }

  static restCountriesToCountries(countries: RESTCountry[]): Country[] {
    return countries.map(country => this.restCountryToCountry(country));
  }

}
