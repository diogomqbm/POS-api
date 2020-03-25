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

  removeCityByCode(code) {
    this.newCities = this.newCities.filter(c => c.codigo_ibge !== code);
    return "Removido com sucesso";
  }

};

module.exports = {
  CitiesController
}