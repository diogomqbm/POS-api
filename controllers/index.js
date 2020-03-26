const cities = require('../br_cities.json');

class CitiesController {

  newCities = cities;

  getCities() {
    return this.newCities;
  }

  getCityByCode(code) {
    return this.newCities.find(c => c.codigo_ibge === parseInt(code));
  }

  addCity(city) {
    return this.newCities.push(city);
  }

  removeCityByCode(city) {
    this.newCities = this.newCities.filter(c => c.codigo_ibge !== city.codigo_ibge);
    return `Cidade ${nome_municipio} foi removida!`;
  }

};

module.exports = {
  CitiesController
}