//1. Crear un arreglo de nombres a partir del siguiente input:


let input = [
    { name: "John", age: 21, city: "New York" },
    { name: "Mike", age: 28, city: "Moscow" },
    { name: "Danny", age: 30, city: "London" },
    { name: "Lisa", age: 26, city: "Paris" },
    { name: "Sophie", age: 19, city: "Berlin" },
];

const names = input
    .map(person => person.name);
console.log(names);

//por name y city

const namesAndCities = input
.map((person) => ({
    name : person.name,
    city : person.city
}))

console.log(namesAndCities)