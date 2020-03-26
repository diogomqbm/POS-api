const Cities = require('./controllers/index');
const express = require('express');
const app = express();
const CityClass = new Cities.CitiesController();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get("/cities", (req, res, next) => {
  res.send(CityClass.getCities());
});

app.get("/city/:code", (req, res, next) => {
  res.send(CityClass.getCityByCode(req.params.code));
})

app.post('/city', (req, res, next) => {
  CityClass.addCity(req.body);
  res.send(200, "Cidade adicionada com sucesso");
});

app.delete('/city/', (req, res, next) => {
  console.log(req.body)
  res.send(CityClass.removeCityByCode(req.body));
})

app.listen(3000, () => {
  console.log("Server running on localhost:3000");
});