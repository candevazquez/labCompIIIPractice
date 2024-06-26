// 2. Crear un arreglo de nombres a partir del arreglo anterior pero solo para las
// personas mayores de 20 años y menores de 29.

let input = [
    { name: "John", age: 21, city: "New York" },
    { name: "Mike", age: 28, city: "Moscow" },
    { name: "Danny", age: 30, city: "London" },
    { name: "Lisa", age: 26, city: "Paris" },
    { name: "Sophie", age: 19, city: "Berlin" },
];

const filterAge = input
.filter((person) => person.age > 20 && person.age < 29)
.map((person) => person.name)

console.log(filterAge)