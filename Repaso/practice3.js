// 3. Dado un arreglo de objetos de países que poseen dos propiedades: name y
// population, ordenarlos de mayor a menor en cuanto a su población utilizando la
// función de arreglo sort().
// Ejemplo de un objeto del arreglo: { name: Argentina, population: 458100000}

let countries = [
  { name: "Argentina", population: 459100000 },
  { name: "Brasil", population: 451100000 },
  { name: "Colombia", population: 458100000 },
  { name: "Ecuador", population: 453100000 },
];

countries.sort(function (a, b) {
  return b.population - a.population;
});

console.log(countries);

//menor a mayor a-b
//mayor a menor b-a
